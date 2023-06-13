const app = require('../app');
const {insertNewSet, updateSet, removeSet, fetchSetsByStackId, fetchSetBySetId} = require('../models/set_model')
const multer = require('multer');
const upload = multer();

const postNewSet = (req, res, next) => {
    console.log('post invoked')
    const {stackId, lift, weight, weightUnit, repsPerformed, targetReps, setType} = req.body
    return insertNewSet(stackId, lift, weight, weightUnit, repsPerformed, targetReps, setType)
    .then((result) => {
        res.status(201).send({set: result})
    })
    .catch((err) => {next(err)})
    
}


const patchSet = (req, res, next) => {

}


const deleteSet = (req, res, next) => {

}

const getSetsByStackId = (req, res, next) => {

}

const getSetBySetId = (req, res, next) => {

}




module.exports = {postNewSet, patchSet, deleteSet, getSetsByStackId, getSetBySetId}