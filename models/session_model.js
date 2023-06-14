const database = require("../db/connection");
const { Session, Stack } = require("../models/model");
const { fetchUserByUID } = require("./users_model");

const fetchSessionsByUID = (UID) => {
  console.log(UID);
  const queryObj = { userUID: UID };
  return fetchUserByUID(queryObj).then((result) => {
    console.log(result, "session Model");
    return Session.find(queryObj).then((result) => {
      return result;
    });
  });
};

const insertNewSession = (UID) => {
  const sessionId = `${UID}${Date.now()}`;
  console.log(sessionId);
  const newSession = { userUID: UID, sessionId: sessionId };
  return Session.create(newSession).then((result) => {
    return result;
  });
};

const insertNewStack = (sessionId, lift) => {
  const stackId = `${lift}_${sessionId}`;
  const newStack = { sessionId: sessionId, lift: lift, stackId: stackId };
  return Stack.create(newStack).then((result) => {
    return result;
  });
};

const updateStack = (stackId, lift) => {
  const newStackId = `${lift}_${stackId.split("_")[1]}`;
  const filter = { stackId: stackId };
  const update = {};
  const updateOptions = { new: true };
  if (lift) {
    update.lift = lift;
  }
  if (stackId) {
    update.stackId = newStackId;
  }
  return Stack.findOneAndUpdate(filter, update, updateOptions).then(
    (result) => {
      if (result) {
        return result;
      } else {
        return Promise.reject({
          status: 404,
          msg: "no stack with requested StackId",
        });
      }
    }
  );
};

const removeStack = (stackId) => {
  console.log("modelside pre query", stackId);
  return Stack.findOneAndDelete({ stackId: stackId }).then((result) => {
    console.log;
    if (result) {
      return result;
    } else {
      return Promise.reject({
        status: 404,
        msg: "no stack with requested StackId",
      });
    }
  });
};

module.exports = {
  fetchSessionsByUID,
  insertNewSession,
  insertNewStack,
  updateStack,
  removeStack,
};
