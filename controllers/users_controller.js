const app = require('../app');
const {fetchUserByUID, fetchUsers, insertNewUser} = require('../models/users_model');
const multer = require('multer');
const upload = multer();


const getUsers = (req, res, next) => {
    return fetchUsers()
    .then((result) => {
        res.status(200).send({users: result})
    })
    .catch((err) => {next(err)})

}

const getUserByUID = (req, res, next) => {
    console.log('getbyUIDInvoked')
    const {UID} = req.params;
    return fetchUserByUID(UID)
    .then((result) => {
        res.status(200).send({user: result[0]})
    })
    .catch((err) => {next(err)})
}

const postNewUser = (req, res, next) => {
    const {userUID, userName, defaultWeightUnit} = req.body
    return insertNewUser(userUID, userName, defaultWeightUnit)
    .then((result) => {
        res.status(201).send({user: result})
    })
    .catch((err) => {next(err)})
}


module.exports = {getUsers, getUserByUID, postNewUser};