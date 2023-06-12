const database = require('../db/connection');
const {Session} = require('../models/model');

const fetchSessionsByUID = (UID) => {    
    const queryObj = {userUID: UID}
    return Session.find(queryObj)
    .then((result) => {
        
        return result      
    })
}

const insertNewSession = () => {

}


module.exports = {fetchSessionsByUID, insertNewSession}