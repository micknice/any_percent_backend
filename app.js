require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const multer = require('multer');
const upload = multer();
const {Exercise} = require('./data/exercises')
const {handleCustomErrors, handleServerErrors, handleMongoDBErrors} = require('./controllers/error_handling_controller')

const {getExercises, getExerciseByName} = require('./controllers/exercise_controller');
const {getUsers, getUserByUID, postNewUser} = require('./controllers/users_controller');

const cors = require('cors');
app.use(cors());
app.use(express.json());

// app.get('/api', getApi);

// gets all exercises in db w/ no query, queries to filter by type, movementType and bodyPart
app.get('/api/exercises', getExercises);
app.get('/api/exercises/:name', getExerciseByName)

app.get('/api/users', getUsers)
app.get('/api/users/:UID', getUserByUID)

app.post('/api/users',upload.none(), postNewUser)


app.use('/*', (req, res)=> {
res.status(404).send({msg: 'not found'});
})
app.use(handleCustomErrors);
app.use(handleMongoDBErrors);
app.use(handleServerErrors);

// app.listen(3000, () => {
//     console.log(`Server Started at ${3000}`)
// })
    
module.exports = app;