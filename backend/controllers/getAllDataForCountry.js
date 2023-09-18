const { sequelize, Sequelize } = require('../models/index'); // Import the Sequelize instance
const { Drivers } = sequelize.models; // Import the Driver model

// getting all data entries belonging to this country
const getDataFilterByCountry = async (req, res) => {
    try {
        const countryName = req.params.country_name;

        const driversData = await Drivers.findAll({
            where: {
                country: countryName,
            },
            order: [['points', 'DESC']],
        });

        return res.json(driversData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getDataFilterByCountry,
};