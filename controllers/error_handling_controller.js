const app = require('../app');

const handleServerErrors = (err, req, res, next) => {
    console.log(err)
    res.status(500).send({msg: 'internal server error'})
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
    else {
        next(err);
    }
}

module.exports = {handleCustomErrors, handleServerErrors}