const { sequelize, Sequelize } = require('../models/index'); // Import the Sequelize instance
const { Drivers } = sequelize.models; // Import the Driver model

// getting all drivers
const getDriverDataByName = async (req, res) => {
    try {
        const driverName = req.params.driver_name;

        const driversData = await Drivers.findAll({
            where: {
                name: driverName,
            }
        });

        return res.json(driversData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getDriverDataByName,
};