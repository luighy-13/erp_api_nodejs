"use strict";

var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'company',
  multipleStatements: true
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.log("error");
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});
module.exports = mysqlConnection;