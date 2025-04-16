const mongoose = require('mongoose');

//--------------Older version of connectToDb function----------------- 

// function connectToDb(){
//     mongoose.connect(process.env.DB_CONNECT, {  useNewUrlParser: true, useUnifiedTopology:true}
//             ,() =>{
//                 console.log('Connected to DB');
//             }).catch(err => console.log(err));
// }

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log('Connected to DB');
        })
        .catch((err) => {
            console.error('Error connecting to DB:', err);
        });
}


module.exports = connectToDb;