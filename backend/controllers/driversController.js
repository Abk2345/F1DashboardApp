
const { sequelize } = require('../models/index'); // Import the Sequelize instance
const { Drivers } = sequelize.models; // Import the Driver model


// getting all drivers
const getAllDrivers = async(req, res) => {
    try{
        const drivers = await Drivers.findAll();
        res.json(drivers);
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = {
    getAllDrivers,
};