var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'emuem001.mysql.guardedhost.com',
    port: 3306,
    database: 'emuem001_gec',
    user: 'emuem001_gec',
    password: '3x9Xk&2cSj'
});

connection.connect((err) => {
    if(err) {
        console.log('Error connecting', err);
        return;
    }

    console.log('Connection Esatblished with remote db');
});

module.exports = connection;