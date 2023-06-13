const app = require("../app");
const {fetchSessionsByUID,insertNewSession,insertNewStack, updateStack, removeStack} = require("../models/session_model");
const multer = require("multer");
const upload = multer();

const getSessionsByUID = (req, res, next) => {
    const { UID } = req.params;
    return fetchSessionsByUID(UID)
    .then((result) => {
    console.log(result)
    res.status(200).send({ sessions: result });
    })
    .catch((err) => {next(err)});
};

const postNewSession = (req, res, next) => {
    const { UID } = req.params;
    return insertNewSession(UID)
    .then((result) => {     
    res.status(201)
    .send({ msg: "new session created", sessionId: result.sessionId });
    })
    .catch((err) => {next(err)});
};
const postNewStack = (req, res, next) => {
    const { sessionId, lift } = req.body;
    return insertNewStack(sessionId, lift)
    .then((result) => {
    res.status(201).send({ msg: "stack created", stack: result });
    })
    .catch((err) => {next(err)});
};

const patchStack = (req, res, next) => {
    const {stackId, lift} = req.body
    return updateStack(stackId, lift)
    .then((result) => {
        res.status(200).send({msg: 'stack updated', stack: result})
    })
    .catch((err) => {next(err)})
}

const deleteStack = (req, res, next) => {
    const {stackId} = req.params
    return removeStack(stackId)
    .then((result) => {
        res.status(202).send({msg: result})
    })
    .catch((err) => {next(err)})
}


module.exports = { getSessionsByUID, postNewSession, postNewStack, patchStack, deleteStack };
