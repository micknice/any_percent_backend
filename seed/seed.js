require('dotenv').config();
const mongoose = require('mongoose');
const {Exercise} = require('../models/model');
const seedExercises = require('../data/exercises');
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
    await Exercise.deleteMany({});
    await Exercise.insertMany(seedExercises);
};

seedDb().then(()=> {
    mongoose.connection.close();
});