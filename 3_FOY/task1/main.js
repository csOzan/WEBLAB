'use strict';

var mysql = require('mysql');
var fs = require('fs');

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  main()
});

function createTable() {
  var sql = "CREATE TABLE  Employee (EmployeeId INT AUTO_INCREMENT PRIMARY KEY, FirstName VARCHAR(255), LastName VARCHAR(255), DepartmentName VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
  });
}
function changeDepartment(name, title){
  var sql = "UPDATE Employee SET DepartmentName = '"+title+"' WHERE FirstName = '"+name+"'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}
function fetchDepartment(departmentString){
   con.query("SELECT * FROM Employee WHERE DepartmentName = '"+departmentString+"'", function (err, result, fields) {
    if (err) throw err;
    console.log("ID  FirstName  LastName  DepartmentName");
    result.forEach(element => {
        console.log(element.EmployeeId + "  " + element.FirstName+ "\t" + element.LastName+ "\t  "+ element.DepartmentName);
    });
  });
}
function reader(){
  var content = fs.readFileSync('./data.txt').toString();
  return content.split('\r\n').map(String);
}
function insertData( arrayFromFillTable ){
  var sql = "INSERT INTO Employee (FirstName, LastName, DepartmentName) VALUES ('"+arrayFromFillTable[0]+"', '"+arrayFromFillTable[1]+"', '"+arrayFromFillTable[2]+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
  });
}
function fillTable(){ 
  var generalArray = reader();
  var littleArray = [];
  generalArray.forEach(element => {
    littleArray = element.split(' ').map(String);
    insertData(littleArray);
  });
}
function main(){
  //createTable();
  //fillTable();
  fetchDepartment("Engineering");
  //changeDepartment("Terri","Executive");
}