const database = require('../db/connection');
const {Exercise} = require('../models/model');

// fetch exercises w/queries
const fetchExercises =  (type, movementType , bodyPart ) => {   
    let queryObj = {};
       
    if (type) {queryObj.type = type}
    if (movementType) {queryObj.movementType = movementType}
    if (bodyPart) {queryObj.bodyPart = bodyPart}
    
    return Exercise.find(queryObj)
    .then(result => {
        // console.log(result);
        return result;
    })
}



module.exports = {fetchExercises}