const database = require("../db/connection");
const { Session, Stack } = require("../models/model");

const fetchSessionsByUID = (UID) => {
  const queryObj = { userUID: UID };
  return Session.find(queryObj).then((result) => {
    return result;
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

const updateSessionWithStack = (sessionId, lift) => {
  const stackId = `${lift}_${sessionId}`;
  const newStack = { sessionId: sessionId, lift: lift, stackId: stackId };
  return Session.stacks.push(newStack).then((result) => {
    return result;
  });
};

module.exports = {
  fetchSessionsByUID,
  insertNewSession,
  updateSessionWithStack,
};
