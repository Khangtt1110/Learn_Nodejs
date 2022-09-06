const mongoose = require('mongoose')

async function connect() {
    const url = 'mongodb://localhost:27017';
    // Database Name
    const dbName = 'myProject';

    try {
        await mongoose.connect('mongodb://localhost:27017/Nodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect success');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect }