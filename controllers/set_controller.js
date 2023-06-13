const app = require('../app');
const {insertNewSet, updateSet, removeSet, fetchSetsByStackId, fetchSetBySetId} = require('../models/set_model')
const multer = require('multer');
const upload = multer();

const postNewSet = (req, res, next) => {
    
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