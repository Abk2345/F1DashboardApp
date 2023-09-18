const { sequelize, Sequelize } = require('../models/index'); // Import the Sequelize instance
const { Drivers } = sequelize.models; // Import the Driver model


// getting all drivers
const getAllDriverNames = async (req, res) => {
    try {

        const driverNamesData = await Drivers.findAll({
            attributes: [[sequelize.literal('DISTINCT "name"'), 'name']],
            order: [['name', 'ASC']],
        });

        let result_ = [];
        for(let i=0; i<driverNamesData.length; i++)
        {
            result_.push(driverNamesData[i].name);
        }

        const obj = {};
        obj['drivers_name_list'] = result_;

        return res.json(obj);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllDriverNames,
};