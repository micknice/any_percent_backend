const database = require('../db/connection');
const {Session} = require('../models/model');

const fetchSessionsByUID = (UID) => {    
    const queryObj = {userUID: UID}
    return Session.find(queryObj)
    .then((result) => {
        
        return result      
    })
    
}

const insertNewSession = (UID) => {
    const sessionId = `${UID}${Date.now()}`
    console.log(sessionId)
    const newSession = {userUID: UID, sessionId: sessionId}
    return Session.create(newSession)
    .then(result => {
        return result
    })

}


module.exports = {fetchSessionsByUID, insertNewSession}