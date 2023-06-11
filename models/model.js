const mongoose = require('mongoose');

// const dataSchema = new mongoose.Schema({
//     name: {
//         required: true,
//         type: String
//     },
//     age: {
//         required: true,
//         type: Number
//     }
// })

// const sessionSchema = new mongoose.Schema({
//     userId: {
//         required: true,
//         type: Number
//     },
//     date: {
//         required: true,
//         type: String
//     },
//     exercises: {
//         required: true,
//         type: []

//     },
//     sets: {
//         required: true,
//         type: []
//     } 

// })

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

// const setSchema = new mongoose.Schema({
//     exerciseName: {
//         required: true,
//         type: String
//     },
//     reps: {
//         required: true,
//         type: Number
//     },
//     setType: {
//         required: true,
//         type: String
//     }
// })

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = {Exercise}