#Setup

* Update Postgres connection details in config.json
* Update "secret" in config.json to a new unique alphanumeric string

#Getting Started

Be in this project sub-folder (where package.json is located) and:
* Start on a new command line (window)
* On command line run: `npm install` to install node modules
* On command line run: `npm start` to activate API listening

There is no User Interface for this project.

Database Tables and Schema will be added if not existing, if existing they are not emptied.

#Testing Activation==

This project can be tested with a 3rd party software to produce and return results.

##Registration

In Postman:
* Create a new request tab (hit the plug button)
* Set the new request for have method of "POST"
* Enter the http field to this local API: http://localhost:4000/users/register
* Set the body of the request 'raw' content, with format 'JSON'
* Add this JSON object:
`{
    "firstName": "Andy",
    "lastName": "Anderson",
    "username": "aanderson",
    "password": "aanderson"
}`
* Hit the Send Button

You should receive a '200 OK' response as a success message

##Authentication

In Postman:
* Create a new request tab (hit the plug button)
* Set the new request for have method of "POST"
* Enter the http field to this local API: http://localhost:4000/users/authenticate
* Set the body of the request 'raw' content, with format 'JSON'
* Add this JSON object:
`{
    "username": "aanderson",
    "password": "aanderson"
}`
* Hit the Send Button

You should receive a '200 OK' response as a success message with users details including a JWT token