# Project Description
This Project contains two parts:
* cw-user-api - A basic API for user registration and login
* cw-login-form - A basic front-end that makes uses of the user-api

# Necessary Software
Please install the following software to run this software.  Versions indicated show what this software was built with, it may work with earlier versions but has not been tested.
* (Optional) Git (v2.45.1+)
* (Optional) Install NVM (v1.2.2+)
* Install Node.js (v22.16.0+)
* Install NPM (10.9.2+)
* Install Postgres (17)
* (Optional) Install Postman (v11.47.1)

# Setup
Follow the README.md in each sub-project for their setup.
1) cw-user-api 
2) cw-login-form

# Critieria
- [x] Create a Node.js application that allows a user to register, login and view their details.
- [x] The frontend pages should be written in React and Redux which will interact with a restful API the perform the various actions.
- [x] The GitHub repository should also contain an readme.txt file of how to install and configure your application. 

## Pages required:

### Registration page - required
- [x] The registration page should accept the users name, email address and password (and confirm password).  
- [x] On submission this page will send a request to a registration API e.g. POST /user/register 

### Login page - required
- [x] The login page that takes an email address and password then on submission send a POST request to a login API e.g. POST /user/login

### Landing page – optional
- [x] The landing page will be a shown once the user has registered or logged in.
- [x] This page can request the users details to display on the screen e.g. GET /user

### Homepage – optional
- [x] A homepage with some dummy content and welcome message, including navigation.

## Restful API’s required
- [ ] POST /user/register - user registration 
> This uses /users/register, rather than /user/register
- [ ] POST /user/login – user login
> This uses /users/authenticate, rather than /user/login
- [x] When the login and registration API endpoints receive valid credentials, they should return a 200 response with a success 
- [x] and when it is anything else - it should return an error stating that the authentication / submission has failed.
- [ ] GET /user – fetch user details (optional)
> This uses /users, rather than /user

## Points to note
- [x] Use React and Redux on the Front End.
- [x] Use Postgres to store the user data.
- [x] On the front end create a project in React and Redux that consumes these API endpoints and create a decent looking Front End for a login box and register page.
- [ ] Extra points for good validation of registration and login page, 
> checks existance of first and last name
- [x] including valid email address, 
- [ ] adequate passwords and 
> checks minimum length, which is not adequate
- [x] ensuring that the user credentials are unique when registering.
- [x] Extra points for making the login page responsive.
- [x] Extra points given for making the pages look professional and easy to use.
- [x] Extra points for adding a home page and usable navigation
- [ ] Extra points for using and supplying unit testing
> Some minimal functional testing is provided in a readme file
- [x] Extra points for using JWT tokens for authentication
- [x] Create the project in GitHub and provide the link
- [x] Create a simple readme file that explains how to run the code

# Critieria
Most Critiera completed in the time alloted.  
Top priority if given more time (or building for a production setting) would be to match API endpoints exactly, however the risk of losing a working state does not justify correcting this for a demonstrative piece of work.

# Notes
This project:
* Was gathered and made to work together by this author
* was made to work with Postgres by this author
* was documented by this author
* AI was not used by this author