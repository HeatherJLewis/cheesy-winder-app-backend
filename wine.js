const serverless = require('serverless-http');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
//this cors middleware adds a header to allow connections
//this registers the middleware we need as long as you have express 4.16

const databaseService = require('./databaseservice')

//app.get is our request type for GET

app.get('/cheese', function (request, response) {


  databaseService.getCheese()
    .then(function (results) {
      //We got the tasks OK
      response.json(results);
    })

    .catch(function (error) {
      //something went wrong when getting the tasks
      response.status(500);
      response.json(error);

    });

})

app.get('/wine/:cheeseName', function (request, response) {

  const nameOfCheeseSelected = request.params.cheeseName;

  databaseService.getWine(nameOfCheeseSelected)
    .then(function (results) {
      //We got the tasks OK
      response.json(results);
    })

    .catch(function (error) {
      //something went wrong when getting the tasks
      response.status(500);
      response.json(error);

    });

})

app.get('/cheese', function (request, response) {


  databaseService.getCheese()
    .then(function (results) {
      //We got the tasks OK
      response.json(results);
    })

    .catch(function (error) {
      //something went wrong when getting the tasks
      response.status(500);
      response.json(error);

    });

})

module.exports.handler = serverless(app);