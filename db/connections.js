require('dotenv').config();
const mongoose = require('mongoose')


// Connect to database

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.once('open', () => {
    console.log('mongoose has connected')
})

mongoose.connection.on('error',  (err) =>{
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});


module.exports = mongoose