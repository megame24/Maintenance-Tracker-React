# Maintenance-Tracker-React

[![Build Status](https://travis-ci.org/megame24/Maintenance-Tracker-React.svg?branch=develop)](https://travis-ci.org/megame24/Maintenance-Tracker-React) [![Maintainability](https://api.codeclimate.com/v1/badges/f73a899b14f947387f88/maintainability)](https://codeclimate.com/github/megame24/Maintenance-Tracker-React/maintainability) [![Coverage Status](https://coveralls.io/repos/github/megame24/Maintenance-Tracker-React/badge.svg?branch=develop)](https://coveralls.io/github/megame24/Maintenance-Tracker-React?branch=develop)

Maintenance Tracker App is an application that provides users with the ability to reach out to operations or repairs department regarding repair or maintenance requests and monitor the status of their request.

[Click here](https://in-m-tracker-react.herokuapp.com/) to visit the app.


## Features

The app has the following features for the respective categories;

* A User can:

  * create an account and login.
  * make maintenance or repairs request.
  * view all his/her requests.
  * view the details of a single request, which includes a feedback from an admin if any.
  * update a request, if it is yet to be approved.
  * delete a request.

* An admin can:

  * approve/disapprove a repair/maintenance request.
  * mark request as resolved once it is done.
  * view all maintenance/repairs requests on the application.
  * filter requests.
  * view the details of a request.
  * provide feedback on approving/disapproving or on resolving a request.
  * trash a request.

## Technologies

* `React`
* `Redux`

## Installation

Follow the steps below to setup a local development environment.

1.  Clone the repository from a terminal `git clone https://github.com/megame24/Maintenance-Tracker-React.git`.
2.  Navigate to the project directory `cd Maintenance-Tracker-React`
3.  Run `npm install` on the terminal to install dependencies.
5.  Run `npm start` to start the application.

## Testing

Follow the steps below to test the application.

1.  Navigate to the project directory through a terminal
2.  If you haven't, install dependencies `npm install`
4.  Run `npm test`
  
## Licence

MIT