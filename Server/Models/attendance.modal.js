const connection = require('../Config/db');

const getAllAttendance = (callback) => {
  const query = "SELECT * FROM attendance";
  connection.query(query, callback);
}

const getUserAttendance = (user_id, callback) => {
  const query = `SELECT * FROM attendance WHERE user_id = ?`;
  connection.query(query, [user_id], callback);
}

module.exports = {
  getAllAttendance,
  getUserAttendance
};