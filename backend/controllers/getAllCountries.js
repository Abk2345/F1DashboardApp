const { sequelize, Sequelize } = require('../models/index'); // Import the Sequelize instance
const { Drivers } = sequelize.models; // Import the Driver model


// getting all drivers
const getAllCountries = async (req, res) => {
    try {

        const countriesData = await Drivers.findAll({
            attributes: [[sequelize.literal('DISTINCT "country"'), 'country']],
            order: [['country', 'ASC']],
        });

        let result_ = [];
        for(let i=0; i<countriesData.length; i++)
        {
            result_.push(countriesData[i].country);
        }

        const obj = {};
        obj['country_list'] = result_;

        return res.json(obj);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllCountries,
};