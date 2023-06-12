const database = require('../db/connection');
const {User} = require('../models/model');



const fetchUsers = () => {
    return User.find()
    .then((result) => {
        return result;
    })

}

const fetchUserByUID = (UID) => {
    const queryObj = {userUID: UID};
    return User.find(queryObj)
    .then((result) => {
        if (result.length === 1) {
            return result;
        } else {
            return Promise.reject({
                status: 404,
                msg: 'user not found'
            })
        }
    })
}

const insertNewUser = (userUID, userName, defaultWeightUnit) => {
    const newUser = {
        userUID: userUID, 
        userName: userName, 
        defaultWeightUnit: defaultWeightUnit
    }
    return User.create(newUser)
    .then(result => {
        return result
    })

}


module.exports = {fetchUsers, fetchUserByUID, insertNewUser};