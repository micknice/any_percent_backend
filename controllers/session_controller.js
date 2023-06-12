const app = require('../app');
const {fetchSessionsByUID, insertNewSession} = require('../models/session_model');
const multer = require('multer');
const upload = multer();


const getSessionsByUID = (req, res, next) => {
    const {UID} = req.params
    return fetchSessionsByUID(UID)
    .then((result) => {
        res.status(200).send({sessions: result})
    })
    .catch((err) => {next(err)})

}

const postNewSession = (req, res, next) => {
    const {UID} = req.params
    return insertNewSession(UID)
    .then((result) => {
        console.log(result)
        res.status(201).send({msg: 'new session created', sessionId: result.sessionId})
    })
    .catch((err) => {next(err)})


}






module.exports = {getSessionsByUID, postNewSession}