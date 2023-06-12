const app = require('../app');
const {fetchSessionsByUID, insertNewSession} = require('../models/session_model');
const multer = require('multer');
const upload = multer();


const getSessionsByUID = (req, res, next) => {
    const {UID} = req.params
    return fetchSessionsByUID(UID)
    .then((result) => {
        console.log('.then block controller')
        console.log(result)
        res.status(200).send({sessions: result})
    })

}

const postNewSession = (req, res, next) => {

}






module.exports = {getSessionsByUID, postNewSession}