const connection = require('../Config/db');
const bcrypt = require('bcryptjs');

// const createUser = async (name, email, phone, password, image_url, callback) => {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const sql = `INSERT INTO users (name, email, phone, password, image_url) VALUES (?, ?, ?, ?, ?)`;
//     const result = connection.query(sql, [name, email, phone, hashedPassword, image_url], callback);
//     console.log('Response from db: ' + result);
//     return result;

// };

// const createUser = (name, email, phone, password, image_url=null) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const sql = `INSERT INTO users (name, email, phone, password, image_url) VALUES (?, ?, ?, ?, ?)`;
//       connection.query(
//         sql,
//         [name, email, phone, hashedPassword, image_url],
//         (err, results) => {
//           if (err) return reject(err);
//           resolve(results);
//         }
//       );
//     } catch (err) {
//       reject(err);
//     }
//   });
// };


const createUser = (
  name,
  email,
  phone,
  password,
  joinDate = null,
  image_url = null
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const sql = `INSERT INTO users (name, email, phone, password, join_date, image_url)
                   VALUES (?, ?, ?, ?, ?, ?)`;
      connection.query(
        sql,
        [name, email, phone, hashedPassword, joinDate, image_url],
        (err, results) => {
          if (err) return reject(err);
          resolve(results);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
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
