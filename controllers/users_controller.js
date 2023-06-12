const app = require('../app');
const {fetchUserByUID, fetchUsers, insertNewUser, updateUser, removeUser} = require('../models/users_model');
const multer = require('multer');
const upload = multer();


const getUsers = (req, res, next) => {
    console.log('GETUSERS')
    return fetchUsers()
    .then((result) => {
        res.status(200).send({users: result})
    })
    .catch((err) => {next(err)})

}

const getUserByUID = (req, res, next) => {
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

const patchUser = (req, res, next) => {    
    const {userUID, userName, defaultWeightUnit} = req.body
    return updateUser(userUID, userName, defaultWeightUnit)
    .then((result) => {
        res.status(200).send({updatedUser: result})
    })
    .catch((err) => {next(err)})
}

const deleteUser = (req, res, next) => {
    const {UID} = req.params;
    return removeUser(UID)
    .then((result) => {
        res.status(202).send({msg: 'user successfully deleted'})
    })
    .catch((err) => {next(err)})
}


module.exports = {getUsers, getUserByUID, postNewUser, patchUser, deleteUser};