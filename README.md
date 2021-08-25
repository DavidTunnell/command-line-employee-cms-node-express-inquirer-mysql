# Command Line Employee Content Management System using Node, Express, Inquirer, Console.Table, MySQL Database

A content management system for an employees database schema. 

This application is really two applications (client and server). There is a [node.js](https://nodejs.org/en/) and [express.js](https://expressjs.com/) located in the `./server/` folder which connects to a [mySQL](https://www.mysql.com/) database using [MySQL2](https://www.npmjs.com/package/mysql2). Located in `./server/db` are the schema and seed data files needed to create the database for the node server to interact with. The node server uses modular routing where when `./server.js/` is started it runs `./routes/index.js` which in turn allows `./routes/department.js`, `./routes/role.js` and `./routes/employee.js` files to run and control their respective requests. These files all rely on `./helper/dbConnection.js` to connect and interact with the mySQL database. Each API route has CRUD functionality for the associated table. The connection information can also be updated here. The project also has [nodemon](https://www.npmjs.com/package/nodemon) available for debugging on the server project. Run with `nodemon ./server.js`.

There is also a command line client which connects to this server side API....

[inquirer](https://www.npmjs.com/package/inquirer)
[console.table](https://www.npmjs.com/package/console.table)

## Database Schema

![DB schema](./assets/schema-diagram.png)

## Installation

## API

As mentioned above the API server is a separate application. This  server is available via REST with or without the client. These could be called locally once the server is running on your machine via the install instructions above. The code is also deployed/running on [Heroku](https://www.heroku.com/) at the following address. Below are some example commands available. 

Command examples
* 
* 

## Screenshots

================

//deploy to heroku?
//walkthrough video
//screenshots for readme
//finish readme
//link to github repo