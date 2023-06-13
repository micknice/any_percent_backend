const database = require("../db/connection");
const { Set } = require("../models/model");
const {typeArray, movementTypeArray, bodyPartArray, exerciseNamesArray} = require('../data/exercises');

const insertNewSet = (stackId, lift, weight, weightUnit, repsPerformed, targetReps, setType) => {
    const time = Date.now().toString();
    const stackIdShortened = stackId.split('_')[1]
    const setId = `${stackIdShortened}${time.slice(6)}`
    const newSet = {stackId: stackId, setId: setId, lift:lift, weight: weight, weightUnit, repsPerformed};
    return Set.create(newSet)
    .then(result => {
        return result
    })   
}


const updateSet = (setId, weight, weightUnit, repsPerformed, targetReps, setType) => {
    const filter = {setId: setId}
    const update = {}
    const updateOptions = {new: true}
    if (weight) {update.weight = weight}
    if (weightUnit) {update.weightUnit = weightUnit}
    if (repsPerformed) {update.repsPerformed = repsPerformed}
    if (targetReps) {update.targetReps = targetReps}
    if (setType) {update.setType = setType}
    return Set.findOneAndUpdate(filter, update, updateOptions)
    .then(result => {
        if (result) {
            return result
        } else {
            return Promise.reject({
                status: 404,
                msg: 'no set with requested setId' 
            })   
        }
    })
}

const removeSet = (setId) => {
    return Set.findOneAndDelete({setId: setId})
    .then(result => {
        return result
    })
}

const fetchSetsByStackId = (stackId) => {
    return Set.find({stackId: stackId})
    .then((result) => {
        if (result.length > 0) {
            return result
        } else {
            return Promise.reject({
                status: 404,
                msg: 'no sets with requested stackId'
            })
        }
    })
}
const fetchSetBySetId = (setId) => {
    return Set.find({setId: setId})
    .then(result => {
        return result
    })
}


module.exports = {insertNewSet, updateSet, removeSet, fetchSetsByStackId, fetchSetBySetId}




