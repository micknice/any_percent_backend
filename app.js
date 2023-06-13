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
const {getUsers, getUserByUID, postNewUser, patchUser, deleteUser} = require('./controllers/users_controller');
const {getSessionsByUID, postNewSession, postNewStack, patchStack, deleteStack} = require('./controllers/session_controller');
const {postNewSet, patchSet, deleteSet, getSetsByStackId, getSetBySetId} = require('./controllers/set_controller');
const cors = require('cors');
app.use(cors());
app.use(express.json());

// app.get('/api', getApi);
//exercises
// gets all exercises in db w/ no query, queries to filter by type, movementType and bodyPart
app.get('/api/exercises', getExercises);
app.get('/api/exercises/:name', getExerciseByName)

// users
app.get('/api/users', getUsers)
app.get('/api/users/:UID', getUserByUID)

app.post('/api/users',upload.none(), postNewUser)
app.patch('/api/users', upload.none(), patchUser)
app.delete('/api/users/:UID', deleteUser)

// session
// gets all sessions for given UID
app.get('/api/session/:UID', getSessionsByUID)
app.post('/api/session/:UID', postNewSession)

// stack
app.post('/api/stack', upload.none(), postNewStack)
app.patch('/api/stack', upload.none(), patchStack)
app.delete('/api/stack/:stackId', deleteStack)

// set
app.get('/api/sets/:stackId', getSetsByStackId)
app.get('/api/set/:setId', getSetBySetId)
app.post('/api/set', upload.none(), postNewSet)
app.patch('/api/set', upload.none(), patchSet)
app.delete('/api/set/:setId', deleteSet)


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