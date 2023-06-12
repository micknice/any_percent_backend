require('dotenv').config();
const mongoose = require('mongoose');
const {Exercise, User} = require('../models/model');
const userArray = require('../test_data/test_user_data');
const {seedExercises} = require('../data/exercises');
const mongoString = process.env.DATABASE_URL;

mongoose
    .connect(mongoString, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('mongodb connection open!');
    })
    .catch((err) => {
        console.log(err);
    })


const seedDb = async () => {
    console.log('seeding')

    await Exercise.deleteMany({});
    
    await Exercise.insertMany(seedExercises);
    await User.deleteMany({});
    await User.insertMany(userArray);
};

seedDb().then(()=> {
    mongoose.connection.close();
});




module.exports = {seedDb}