const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

function handleQueryError(error) {
  if (error) {
    console.error(error);
    connection.end();
    throw error;
  }
}

connection.query('DROP DATABASE IF EXISTS ownDoc', function (error, results, fields) {
  handleQueryError(error);
  console.log('Database dropped if it existed');

  connection.query('CREATE DATABASE ownDoc', function (error, results, fields) {
    handleQueryError(error);
    console.log('Database created');

    connection.query('USE ownDoc', function (error, results, fields) {
      handleQueryError(error);
      console.log('Switched to database ownDoc');

      const sql = `CREATE TABLE blogs(
        id INT AUTO_increment PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
      )`;

      connection.query(sql, function (error, results, fields) {
        handleQueryError(error);
        console.log('Table created');
      });
        
      const insertSql = `INSERT INTO blogs (title, content) VALUES ?`;
      const values = [
          ['First Blog', 'This is the first blog.'],
          ['Second Blog', 'This is the second blog.'],
          ['third Blog', 'This is the third blog.'],
          // Add more blogs as needed
      ];
  
      connection.query(insertSql, [values], function (error, results, fields) {
        handleQueryError(error);
        console.log('Data inserted');
        // connection.end();
      });

      connection.query('SELECT title, content FROM blogs', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        // connection.end();
      })
    });
  });
  // connection.end();
});

module.exports = connection;
