const app = require('../app');

const handleServerErrors = (err, req, res, next) => {
    console.log('handleServerErrors', err)
    res.status(500).send({msg: 'internal server error'})
}
const handleMongoDBErrors = (err, req, res, next) => {
    if (err.code === 11000 ) {
        res.status(400).send({msg: 'no duplicate keys'})
    } else {
        next(err)
    }
}

const handleCustomErrors = (err, req, res, next) => {
    if (err.msg === 'invalid type field' && err.status === 400) {
        res.status(400).send({msg: 'invalid type field'})
    }
    else if (err.msg === 'invalid movementType field' && err.status === 400) {
        res.status(400).send({msg: 'invalid movementType field'})
    }
    else if (err.msg === 'invalid bodyPart field' && err.status === 400) {
        res.status(400).send({msg: 'invalid bodyPart field'})
    }
    else if (err.msg === 'invalid query fields' && err.status === 400) {
        res.status(400).send({msg: 'invalid query fields'})
    } 
    else if (err.msg === 'invalid exercise name' && err.status === 400) {
        res.status(400).send({msg: 'invalid exercise name'})
    } 
    else if (err.msg === 'user not found' && err.status === 404) {
        res.status(404).send({msg: 'user not found'})
    } 
    else if (err.msg === 'no stack with requested StackId' && err.status === 404) {
        res.status(404).send({msg: 'no stack with requested StackId'})
    } 
    else if (err.msg === 'no set with requested setId' && err.status === 404) {
        res.status(404).send({msg: 'no set with requested setId'})
    } 
    else if (err.msg === 'no sets with requested stackId' && err.status === 404) {
        res.status(404).send({msg: 'no sets with requested stackId'})
    } 
    else {
        next(err);
    }
}

module.exports = {handleCustomErrors, handleServerErrors, handleMongoDBErrors}