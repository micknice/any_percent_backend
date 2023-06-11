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
    console.log('here')
    console.log('req', req.params)
    const {name} = req.params

    
    return fetchExerciseByName(name)
    .then((result) => {
    res.status(200).send({exercise: result})
    })
    .catch((err) => {next(err)})
}


module.exports = {getExercises, getExerciseByName};