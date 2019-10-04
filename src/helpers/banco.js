const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: '<USUARIO>',
    password: '<SENHA>',
    database: 'aloha'
});

module.exports = con;