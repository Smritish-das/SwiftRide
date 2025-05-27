const rideService = require('../services/rides.services.js')
const { validationResult } = require('express-validator')
const mapService = require('../services/maps.service.js')
const { sendMessageToSocketId } = require('../socket.js')
const ridesModel = require('../models/rides.model.js')

module.exports.createRide = async(req,res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    const {pickUp,destination,vehicleType} = req.body;

    try{
        const ride = await rideService.createRide({user:req.user._id, pickUp, destination, vehicleType});
        
        const pickUpCoordinates = await mapService.getAddressCoordinate(pickUp);

        const captainsInRadius = await mapService.getCaptainsInTheRadius(pickUpCoordinates.ltd, pickUpCoordinates.lng, 15);
        

        ride.otp = "";

        const rideWithUser = await ridesModel.findOne({_id: ride._id}).populate('user')
        
        captainsInRadius.map(async captain => {
            sendMessageToSocketId(captain.socketId,{
                event:'new-ride',
                data : rideWithUser
            })
        });

        res.status(201).json(ride);

    }catch(err){
        return res.status(400).json({message: err.message})
    }
    
}

module.exports.getFare = async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const { pickUp, destination } = req.query;

    try{
        const fare = await rideService.getFare(pickUp, destination);
        return res.status(200).json(fare);
    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}

module.exports.confirmRide = async(req,res) => {
    const errors = validationResult(req);   
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { rideId } = req.body;

    try{
        const ride = await rideService.confirmRide({rideId, captain:req.captain});

        sendMessageToSocketId(ride.user.socketId, {
            event:'ride-confirmed',
            data:ride
        })
        return res.status(200).json(ride);
    }catch(err){
        return res.status(500).json({message:err.message});
    }

}

module.exports.startRide = async(req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {rideId, otp} = req.query;

    try{
        const ride = await rideService.startRide({ rideId, otp, captain:req.captain});

        sendMessageToSocketId(ride.user.socketId, {
            event:'ride-started',
            data:ride
        })
        return res.status(200).json(ride);
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }
}

module.exports.endRide = async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {rideId} = req.body;

    try{
        const ride = await rideService.endRide({rideId, captain:req.captain});

        sendMessageToSocketId(ride.user.socketId,{
            event:'ride-ended',
            data: ride 
        })

        return res.status(200).json({ride:ride});

    }catch(err){
        return res.status(500).json({message:err.message})
    }
}

