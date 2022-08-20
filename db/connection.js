const mysql = require('mysql2');
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'SuperCorp_db'
  },
  console.log('WELCOME TO SUPERCORP! Remember, you`re here forever!')
);

connection.connect(function (err) {
  if(err) throw err;
});

module.exports = connection;