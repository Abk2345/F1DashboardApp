# F1 Drivers Dashboard Project
uses:
    AngularJS: Front-end
    NodeJs(Sequelize): Back-end

# Backend Creation
1. Installation of express, sequelize, sequelize-cli, csv-parser, pg for postgresql database
2. Downloading file F1DriversDataset.csv from kaggle to this project backend folder
3. Initializing sequalize for the project
4. Configure Postgresql databse in condif/config.json file (for now -> development)
5. Creating model -> driver.js for saving data
6. Creating migration create_drivers_table for saving drivers data 
7. Using save_data.js file saved the data from csv to the database
7. Creating routes and controllers for routing api's properly and to implement business login respectively
8. Writing app.js to integrate all the backend functionalities with middleware to handle errors in api calls
9. Writing all the api's requirements from Angular front-end

# Front-end creation
1. Setting up Angular project as frontend using command (ng new frontend)
2. Generating 6 components for the dashboard project using command (ng g c comp_name)
3. Generating service module file for integrating with backend api (ng generate service driver)
4. Brainstorming different api, data and how to show them on screen
5. Writing components files, html files, driver.service files
6. Using material ui components for the front-end UI like mat-table, mat-card, autocomplete
7. Using library canvasjs charts for showing charts in the app
8. Modifying and cleaning the code

# Docker Image creation and push
1. writing Dockerfile, .dockerignore files inside frontend for creation of docker image of angular app
2. Running command: (docker build -t frontend-angular-app .) for creation of front end image
3. Running image with the command: (docker run -d -p 4200:80 angular-app-frontend) for running the image
4. Setting up backend for making of docker image by creating files: Dockerfile, .dockerignore, entrypoint.sh to execute saving of data from the database before running the app, docker-compose.yml to setup postgres container environment for the backend
5. Running command (docker-compose build) & (docker-compose up) to run the image properly
6. Iterating and debugging all the errors for project to run completely by docker image
7. Pushing the image to docker hub

# Steps to Install the App
1. Setting up in local environment:
    1. Clone the repository in your device
    2. Backend
        1. Go to backend folder and run commnd (npm install) for installing all the required libraries
        2. Make a database "F1DriversDashboard" in your database and configure your postgres database credentials in config/config.json file
        3. Run the command (sequelize db:migrate) to create the drivers table from the database
        4. Run the file save_data.js to save data from csv file to the database using command: (node save_data.js)
        5. Run the command (node app.js) to run the backend
    3. Frontend
        1. Go to frontend folder using command (cd frontend)
        2. Install all the required libraries using command (npm install)
        3. Run the application using command (ng serve)

2. Running the app using docker image
    1. Download the docker-image of backend: https://hub.docker.com/r/abhi731/f1-dashboard-backend-app
    2. Download the docker-image of frontend: https://hub.docker.com/r/abhi731/f1-dashboard-frontend-app
    3. Run the frontend docker image using command: (docker run -d -p 4201:80 abhi731/f1-dashboard-frontend-app)
    4. Run the backend docker image using docker-compose file inside the folder "Run-docker-image-compose-file"

# Hope you enjoyed!



