const { createUser, getUsers, updateUser } = require('../Models/User.model');

const addUser = async (req, res) => {
  const { name, email, phone, password, role = 'member', join_date = new Date() } = req.body;
  createUser(name, email, phone, password, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'User added!', userId: result.insertId });
  });
};

const getAllUser = (req, res) => {
  getUsers((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

const updateUserById = (req, res) => {
  const { id } = req.params;
  const { name, email, password, phone, join_date = new Date(), role = 'member' } = req.body;

  updateUser(id, name, email, password, phone, join_date, role, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User updated!' });
  });
};

module.exports = {
  addUser,
  getAllUser,
  updateUserById
};
