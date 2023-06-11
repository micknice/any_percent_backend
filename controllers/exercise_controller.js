const app = require('../app');
const {fetchExercises, fetchExerciseByName} = require('../models/exercise_model');
// const {exerciseNamesArray} = import('../data/exercises')

const getExercises = (req, res, next) => {
    const {type, movementType, bodyPart} = req.query;   
    return fetchExercises(type, movementType, bodyPart)
    .then((result) => {   
    res.status(200).send({exercises: result})
    })
    .catch((err) => {next(err)})
}

const getExerciseByName = (req, res, next) => {    
    const {name} = req.params   
    return fetchExerciseByName(name)
    .then((result) => {
    const exercise = result[0];
    res.status(200).send({exercise: exercise})
    })
    .catch((err) => {next(err)})
}


module.exports = {getExercises, getExerciseByName};