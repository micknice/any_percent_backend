const database = require('../db/connection');
const {Exercise} = require('../models/model');
const {typeArray, movementTypeArray, bodyPartArray, exerciseNamesArray} = require('../data/exercises');

// fetch exercises w/queries
const fetchExercises =  (type, movementType , bodyPart ) => {   
    let queryObj = {};
    let typeValid = false;
    let movTypeValid = false;
    let bodyValid = false;
    if (type === undefined || typeArray.includes(type)) {
        typeValid = true;
        if (type) {queryObj.type = type;}    
    }
    if (movementType === undefined || movementTypeArray.includes(movementType)) {
        movTypeValid = true;
        if (movementType) {queryObj.movementType = movementType;}
    }
    if (bodyPart === undefined || bodyPartArray.includes(bodyPart)) {
        bodyValid = true;
        if (bodyPart) {queryObj.bodyPart = bodyPart;}    
    }
    if (typeValid && movTypeValid && bodyValid) {
        return Exercise.find(queryObj)
        .then(result => {
            return result;
        })
    } else if (!typeValid && movTypeValid && bodyValid){
        return Promise.reject({
            status: 400,
            msg: 'invalid type field'
        })
    } else if (typeValid && !movTypeValid && bodyValid){
        return Promise.reject({
            status: 400,
            msg: 'invalid movementType field'
        })
    } else if (typeValid && movTypeValid && !bodyValid){
        return Promise.reject({
            status: 400,
            msg: 'invalid bodyPart field'
        })
    } else {
        return Promise.reject({
            status: 400,
            msg: 'invalid query fields'
        })
    }
}


const fetchExerciseByName = (name) => {
    if (exerciseNamesArray.includes(name)) {
        return Exercise.find({name: name})
        .then(result => {
            return result;
        })
    } else {
       return Promise.reject({
        status: 400,
        msg: 'invalid exercise name'
       }) 
    }

}



module.exports = {fetchExercises, fetchExerciseByName}