const mysql = require('mysql');
const util = require('util');

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: '<USUARIO>',
    password: '<SENHA>',
    database: 'aloha'
});
// con.query = util.promisify(con.query);
module.exports = con;