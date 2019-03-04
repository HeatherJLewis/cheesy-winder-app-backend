const mysql = require("mysql");

function getDatabaseConnection() {
    return mysql.createConnection({
        host: process.env.RDS_HOST,
        user: process.env.RDS_USER,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DATABASE
    });
}

//this is a json object that sets up the properties of the connection

function getCheese() {
    const connection = getDatabaseConnection();
    return new Promise(function (resolve, reject) {
        connection.query("SELECT * FROM Cheese", function (error, results, fields) {
                
            if (error) {
                connection.destroy();
                return reject(error);
            }
            else {
                connection.end(function () {
                    return resolve(results);
                });

            }
        });
    });
}

function getWine(nameOfCheeseSelected) {
    const connection = getDatabaseConnection();
    return new Promise(function (resolve, reject) {
        connection.query("SELECT * FROM Wine JOIN Cheese ON Wine.cheeseId = Cheese.cheeseId WHERE cheeseName=?", nameOfCheeseSelected, function (error, results, fields) {
                
            if (error) {
                connection.destroy();
                return reject(error);
            }
            else {
                connection.end(function () {
                    return resolve(results);
                });

            }
        });
    });
}

//for app need to have a get that returns just the wine based on cheeseId
//just trying to return all now

module.exports = {
    getWine,
    getCheese
}