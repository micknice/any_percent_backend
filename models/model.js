const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userUID: {
    required: true,
    type: String,
    unique: true,
  },
  userName: {
    required: true,
    type: String,
  },
  defaultWeightUnit: {
    required: true,
    type: String,
  },
});

const sessionSchema = new mongoose.Schema({
    userUID: {
        required: true,
        type: String
    },
    sessionId: {
        required: true,
        type: String,
        
    },
    date: {
        required: true,
        type: Date,
        default: Date.now()
    },
    stacks: {
        required: true,
        type: [],
    }
    
})
const stackSchema = new mongoose.Schema({
  sessionId: {
    required: true,
    type: String,
  },
  lift: {
    required: true,
    type: String,
  },
  stackId: {
    required: true,
    type: String,
  },
});

const exerciseSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
  movementType: {
    required: true,
    type: String,
  },
  bodyPart: {
    required: true,
    type: String,
  },
  musclesUsed: {
    required: true,
    type: [],
  },
});

const setSchema = new mongoose.Schema({
    stackId: {
        required: true,
        type: String
    },
    setId: {
        required: true,
        type: String
    },
    lift: {
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
        required: false,
        type: String
    }
})

const Exercise = mongoose.model("Exercise", exerciseSchema);

const User = mongoose.model("Users", userSchema);

const Session = mongoose.model("Sessions", sessionSchema);

const Stack = mongoose.model("Stacks", stackSchema);

const Set = mongoose.model("Sets", setSchema)

module.exports = { Exercise, User, Session, Stack, Set };
