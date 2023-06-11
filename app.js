require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const {Exercise} = require('./data/exercises')

const {getExercises, getExerciseByName} = require('./controllers/exercise_controller');

const cors = require('cors');
app.use(cors());
app.use(express.json());

// app.get('/api', getApi);

// gets all exercises in db w/ no query, queries to filter by type, movementType and bodyPart
app.get('/api/exercises', getExercises);
app.get('/api/exercises/:name', getExerciseByName)


app.use('/*', (req, res)=> {
res.status(404).send({msg: 'not found'});
})
// app.use(handleCustomErrors);
// app.use(handlePSQL400Error);
// app.use(handleServerErrors);

// app.listen(3000, () => {
//     console.log(`Server Started at ${3000}`)
// })
    
module.exports = app;