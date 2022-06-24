var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "qldienthoai"
});

db.connect(function(err) {
  console.log("Connected!");}
);

module.exports = db;