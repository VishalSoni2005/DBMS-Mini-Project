const {
  getAllAttendance,
  getUserAttendance,
} = require("../Models/attendance.modal");

const getAttendanceOfAllUsers = async (req, res) => {
  getAllAttendance((err, result) => {
    if (err) return res.status(400).json("Interval server Errror");
    res.send(result);
  });
};

const getUserAttendanceById = async (req, res) => {
  //todo: change this -> const { user_id } = req.body;
  const user_id = req.params.user_id;
  getUserAttendance(user_id, (err, result) => {
    if (err) return res.status(400).json("Interval server Errror");
    if (result.length === 0) {
      return res.status(404).json("No attendance found for this user");
    }
    res.send(result);
  });

};

module.exports = {
  getAttendanceOfAllUsers,
  getUserAttendanceById,
};
