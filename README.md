Billing Application Workflow Process

    Please download the zip folder call John-Master, I use visual Studio Code as IDE to open up my project folder.

Prerequisites
    1. After you have navigated to the folder on command prompt, please enter: nodemon app.js and once the connection is establish, you can then use http://localhost:3000/ to start your own application.

Installing
    Since all the necessary modules have been download in the folder to run on node.js, you don’t need to install or download anything, even I have the cloud database set up for you so that you don’t need to set up anything on your local. All the dependencies are in the package.json file in order to run this application. 

Running the tests
    1.	Use http://localhost:3000/register to create Customers, I have created Customers1, Customer2, and Customer3 in database already, you can create more if you like. 
    2.	Use http://localhost:3000/login to login as admin, there are three type of admin: finance, cs, and sale. The           workflow are base on them, please use them to login, to see the workflow process. 
        
Break down into end-to-end tests
    Workflow goes like this: login as Finance to begin status is “Open”->”Waiting”->”Approve” or “Reject” by Customer Success team-> “Approve” or “Reject by sales team”->”Finalize” if sales team approved it->“Sent” by Finance team

Built With
    •	Node.js - JavaScript run-time environment for executing JavaScript code server-side
    •	Express.js - web application framework for Node.js
    •	Mongoose Mongodb – create database schema
    •	EJS – HTML templating language
    •	MLAB – cloud database service that hosts MongoDB databases