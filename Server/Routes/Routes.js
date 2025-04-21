const {
  getAttendanceOfAllUsers,
  getUserAttendanceById,
} = require("../Controllers/attendance.controller");
const { getMembershipPlan } = require("../Controllers/memberships.controller");
const {
  insertInSubscription,
  getSubscriptedUsersFromSubscription,
} = require("../Controllers/subscription.controller");
const {
  addUser,
  getAllUser,
  updateUserById,
} = require("../Controllers/Users.controller");
const app = require("express").Router();

//! users table
app.post("/users", addUser);
app.get("/users", getAllUser);
app.put("/users/:id", updateUserById);

//! subscriptios table
app.get("/getsubscribedUsers", getSubscriptedUsersFromSubscription);
app.post("/getSubscriptions", insertInSubscription);

//! Membership
app.get("/getMemberships", getMembershipPlan);

//! attendance
app.get("/getAllAttendance", getAttendanceOfAllUsers);
app.post(`/attendance/:user_id`, getUserAttendanceById);

module.exports = app;
