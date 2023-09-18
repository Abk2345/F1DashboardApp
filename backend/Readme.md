# Backend of F1 Drivers Dashboard using NodeJs, and Postgresql

# Steps used in the project
1. Installation of express, sequelize, sequelize-cli, csv-parser, pg for postgresql database
2. Downloading file F1DriversDataset.csv from kaggle to this project backend folder
3. Initializing sequalize for the project
4. Configure Postgresql databse in condif/config.json file (for now -> development)
5. Creating model -> driver.js for saving data
6. Creating migration create_drivers_table for saving drivers data 
7. Using save_data.js file saved the data from csv to the database
7. Creating routes and controllers for routing api's properly and to implement business login respectively
8. Writing app.js to integrate all the backend functionalities with middleware to handle errors in api calls