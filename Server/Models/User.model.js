const connection = require('../Config/db');
const bcrypt = require('bcryptjs');

const createUser = async (name, email, phone, password, image_url, callback) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = `INSERT INTO users (name, email, phone, password, image_url) VALUES (?, ?, ?, ?, ?)`;
    connection.query(sql, [name, email, phone, hashedPassword, image_url], callback);
  } catch (error) {
    callback(error, null);
    console.log("Error in user model");
    
    console.log(error);
  }
};

const getUsers = callback => {
  const result = connection.query('SELECT * FROM users', callback);
  console.log('Response from db: ' + result);

  return result;
};

//* update the user
const updateUser = (id, name, email, age, callback) => {
  const sql = `UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?`;
  connection.query(sql, [name, email, age, id], callback);
};

// //* delete from the database
// const deleteUser = (id, callback) => {
//   connection.query('DELETE FROM users WHERE id = ?', [id], callback);
// };

module.exports = {
  createUser,
  getUsers,
  updateUser,
  // deleteUser,
};
