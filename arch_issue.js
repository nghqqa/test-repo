// Architectural: inline SQL string concatenation - unfixable by simple line patch
// Requires full ORM migration + query parameterization + connection pooling redesign
const mysql = require('mysql2');
const conn = mysql.createConnection({host:'localhost',user:'root',password:'',database:'app'});
function getUser(id) {
  return conn.query("SELECT * FROM users WHERE id = " + id + " AND deleted = 0");
}
function deleteUser(id) {
  return conn.query("DELETE FROM users WHERE id = " + id);
}
module.exports = { getUser, deleteUser };
