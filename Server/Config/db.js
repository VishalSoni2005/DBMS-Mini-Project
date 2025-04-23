const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "@Vishal0702",
  database: "gym",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

connection.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL (pooled)");
    connection.release(); // release connection back to pool
  }
});

module.exports = connection;

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '@Vishal0702',
//   database: 'gym',
// });

// connection.connect(error => {
//   if (error) {
//     console.error('Error connecting to the database:', error);
//     return;
//   }
//   console.log('Connected to the database');
// });

// module.exports = connection;
