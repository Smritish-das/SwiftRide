const rideModel = require('../models/rides.model.js');
const { sendMessageToSocketId } = require('../socket.js');
const mapService = require('./maps.service.js')
const crypto = require('crypto')

async function getFare(pickUp,destination){
    if(!pickUp || !destination){
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickUp,destination);

    const baseFare = {
        auto:30,
        car:50,
        motorcycle:20
    }

    const perKmRate = {
        auto:10,
        car:15,
        motorcycle:8
    }

    const perMinuteRate = {
        auto:2,
        car:3,
        motorcycle:1.5
    }

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value/1000) * perKmRate.auto) + ((distanceTime.duration.value/60)  * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value/1000) * perKmRate.car) + ((distanceTime.duration.value/60) * perMinuteRate.car)),
        motorcycle: Math.round(baseFare.motorcycle + ((distanceTime.distance.value/1000) * perKmRate.motorcycle) + ((distanceTime.duration.value/60) * perMinuteRate.motorcycle))
    }
    
    return fare;
}

function getOtp(num){
    const otp = crypto.randomInt(Math.pow(10,num-1),Math.pow(10,num)).toString();
    return otp;
}

module.exports.getFare = getFare;

module.exports.createRide = async({user,pickUp,destination,vehicleType}) => {
    if(!user || !pickUp || !destination || !vehicleType){
        
        throw new Error('All Fields are required');

    }

    const fare = await getFare(pickUp,destination);
    const ride = await rideModel.create({
        user,
        pickUp,
        destination,
        vehicleType,
        otp: getOtp(6),
        fare:fare[vehicleType]
    })

    return ride
}

module.exports.confirmRide = async({rideId,captain}) => {
    if(!rideId){
        throw new Error('Ride not found');
    }

    await rideModel.findOneAndUpdate({
        _id:rideId
    },{
        status:'accepted',
        captain: captain._id
    })

    const ride = await rideModel.findOne({
        _id: rideId,
    }).populate('user').populate('captain').select('+otp');

    
    return ride;

}

module.exports.startRide = async({rideId,otp,captain}) => {
    if(!rideId || !otp){
        throw new Error('Ride Id and OTP are required ');
    }

    const ride  = await rideModel.findOne({
        _id: rideId
    }).populate('user').populate('captain').select('+otp')

    if(!ride){
        throw new Error('Ride not found')
    }

    if(ride.status !== 'accepted'){
        throw new Error('Ride not accepted')
    }

    if(ride.otp !== otp){
        throw new Error('Invalid OTP')
    }

    await rideModel.findOneAndUpdate({
        _id:rideId
    },{
        status:'ongoing'
    })

    sendMessageToSocketId(ride.user.socketId,{
        event: 'ride-started',
        data:ride
    })

    return ride;
}

module.exports.endRide = async({rideId, captain}) => {
    if(!rideId){
        throw new Error("Ride is required");
    }

    const ride = await rideModel.findOne({
        _id:rideId,
        captain:captain._id 
    }).populate('user').populate('captain').select('+otp');

    if(!ride){
        throw new Error("Ride is not found");
    }

    console.log(ride);

    if(ride.status !== 'ongoing'){
        throw new Error("Ride not ongoing");
    }
    await rideModel.findOneAndUpdate({
        _id:rideId
    },{
        status : 'completed'
    })

    return ride
}
