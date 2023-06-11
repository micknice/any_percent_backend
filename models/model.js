const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userUID: {
        required: true,
        type: String
    },
    userName: {
        required: true,
        type: String
    },
    userTrainingLog: {
        required: true,
        type: [sessionSchema]
    },
    defaultWeightUnit: {
        required: true,
        type: String
    }
    
})

const sessionSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: String
    },
    exercises: {
        required: true,
        type: []

    },
    sets: {
        required: true,
        type: []
    } 

})
const liftSchema = new mongoose.Schema({
    lift: {
        required: true,
        type: exerciseSchema
    },
    sets: {
        required: true, 
        type: [setSchema]
    }
})

const exerciseSchema = new mongoose.Schema({   
    name: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    movementType: {
        required: true,
        type: String
    },
    bodyPart: {
        required: true,
        type: String
    },
    musclesUsed: {
        required: true,
        type: []
    }
})

const setSchema = new mongoose.Schema({
    exerciseName: {
        required: true,
        type: String
    },
    weight: {
        required: true,
        type: Number
    },
    weightUnit: {
        required: true,
        type: String
    },    
    repsPerformed: {
        required: true,
        type: Number
    },
    targetReps: {
        required: false,
        type: Number
    },
    setType: {
        required: true,
        type: String
    }
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = {Exercise}