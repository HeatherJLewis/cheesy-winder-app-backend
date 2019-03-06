# cheesy-winder-app-backend

Back-end repository for node REST API linking React 'Don't Worry Brie Happy' App front-end to AWS mySQL RDS by creating AWS Lambda function.

## Pre-requisites 

Ensure serverless framework is installed: 

#### `npm install --global serverless`

Then all other dependencies managed by node:

#### `npm install`

## Dependencies

- node 
- Express
- Serverless
- CORS
- mySQL

## Deployment

`serverless deploy --RDS_HOST yourAWSdbInstanceHere -- RDS_USER yourUserNameHere --RDS_PASSWORD yourPasswordHere --RDS_DATABASE yourSQLdbHere`

## Testing 

Tested using Postman.
