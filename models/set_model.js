const database = require("../db/connection");
const { Set } = require("../models/model");
const {typeArray, movementTypeArray, bodyPartArray, exerciseNamesArray} = require('../data/exercises');

const insertNewSet = (stackId, lift, weight, weightUnit, repsPerformed, targetReps, setType) => {
    const time = Date.now().toString();
    const stackIdShortened = stackId.split('_')[1]
    const setId = `${stackIdShortened}${time.slice(6)}`
    const newSet = {setId: setId, lift:lift, weight: weight, weightUnit, repsPerformed};
    return Set.create(newSet)
    .then(result => {
        return result
    })   
}


const updateSet = () => {

}

const removeSet = () => {

}

const fetchSetsByStackId = () => {

}
const fetchSetBySetId = () => {

}


module.exports = {insertNewSet, updateSet, removeSet, fetchSetsByStackId, fetchSetBySetId}




