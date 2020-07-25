# Using Node.js, Express.js & MongoDB to bulid a simple CURD map blog
This simple blog is about basic *CRUD* operation with **Node.js**, **Express.js** and **MongoDB**, which contains two main parts:
1. Store user and map information

2. Display maps 

## Getting Started
To get started you could simply clone the repository and install the dependencies:

`npm install`

### Prerequisites
To initialize the project, multiple modules need to be installed:

* Node.js and its package manager (npm)

    http://nodejs.org/

* Node.js modules listed in *package.json* 

* MongoDB and mongoose

    https://www.mongodb.com/

## Functionality
1. **/admin/login** 
    
    Users should validate email address and password before futher access to other pages. 
    
    Upon successful validation, server will:
    * Create a user session.
    * Redirect to **/admin/user**.

    If the validation fails, server will send a error message back to client. 

2. **/admin/user** & **/admin/article**

    * **/admin/user**
        * Create: Users could create new records after logging in only when email address has not been used yet.
        * Update: Users could update existing records only when typing password correctly. 
        * Remove: Users could delete records from database.
        * Pagination
    
    * **/admin/article**
        * The major difference between these two parts is **/admin/article** could upload images. 

3. **/home/** & **/home/article**

    * **/home/**
        * Display the map with author, publish time and brief description. 
        * Pagination

    * **/home/article**
        * Users should login before commenting.
        * Display comments with author(Login user), publish time. 