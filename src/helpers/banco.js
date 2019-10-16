const mysql = require('mysql');
const util = require('util');

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'aloha'
});
// con.query = util.promisify(con.query);
module.exports = con;