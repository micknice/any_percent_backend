const app = require('../app');
const {fetchUserByUID, fetchUsers} = require('../models/users_model')


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
        console.log(result)
        res.status(200).send({user: result[0]})
    })
    .catch((err) => {next(err)})
}


module.exports = {getUsers, getUserByUID};