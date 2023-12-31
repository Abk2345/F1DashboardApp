const express = require('express');
// creating express app
const app = express()
//Getting instances of sequelize from models
const sequelize = require('./models').sequelize; 
// routes
const driversRoute = require('./routes/drivers');
// using cors for good communication between different ports on localhost (frontend and backend)
const cors = require('cors');

// parsing json
app.use(express.json())
app.use(cors())

// using the drivers route
app.use('/api', driversRoute)

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something wrong on Server side!');
})

// setting up port
const PORT = process.env.PORT || 3000;

// syncing database and starting the server
sequelize.sync().then(() => {
    app.listen(PORT, ()=>{
        console.log('Server is running on port http://localhost:3000');
    });
}).catch((error)=>{
    console.error('Unable to connect to the database: ', error);
})

