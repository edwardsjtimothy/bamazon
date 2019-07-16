var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "ImwiJo1991!",
  database: "greatBay_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});
