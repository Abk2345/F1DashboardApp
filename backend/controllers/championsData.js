const { sequelize, Sequelize } = require('../models/index'); // Import the Sequelize instance
const { Drivers } = sequelize.models; // Import the Driver model


// getting all drivers
const getChampionsData = async (req, res) => {
    try {

        const championsData = await Drivers.findAll({
            attributes: ['country', 'name', 'drivers_championship', 'points'],
            where: {
                drivers_championship: {
                    [Sequelize.Op.gt]: 0
                } 
            },
            order: [['drivers_championship', 'DESC']],
        });

        return res.json(championsData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getChampionsData,
};