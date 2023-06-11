const app = require('../app');
const {fetchExercises} = require('../models/exercise_model');


const getExercises = (req, res, next) => {   
    const {type, movementType, bodyPart} = req.query;
    console.log(bodyPart)    
    return fetchExercises(type, movementType, bodyPart)
    .then((result) => {
    console.log('fetchExercises returned');
    res.status(200).send({exercises: result})
    })
    .catch((err) => {next(err)})
}


module.exports = {getExercises};