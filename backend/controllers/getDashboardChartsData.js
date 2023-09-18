const { sequelize } = require('../models/index'); // Import the Sequelize instance
const { Drivers } = sequelize.models; // Import the Driver model


// getting maxCompetedDriver and maxChampionshipDriver data for charts in dashboard page
const getDashboardChartData = async (req, res) => {
    try {

        const maxCompetedDriver = await Drivers.findAll({
            attributes: ['country', 'name', 'seasons_competed'],
            order: [[sequelize.fn('LENGTH', sequelize.col('seasons_competed')), 'DESC']],
        });

        results = []
        for(let i=0; i<maxCompetedDriver.length; i++)
        {
            driver = maxCompetedDriver[i];
            var season_competed_arr = driver.seasons_competed;
            season_competed_arr = season_competed_arr.split(',');
            const obj = {};
            obj['name'] = driver.name;
            obj['country'] = driver.country;
            obj['num_seasons_competed'] = season_competed_arr.length;
            results.push(obj);
        }

        const maxChampionshipDriver = await Drivers.findAll({
            attributes: ['country', 'name', 'drivers_championship'],
            order: [['drivers_championship', 'DESC']],
        });

        const obj = {};
        obj["max_competed"] = results;
        obj["max_championships"] = maxChampionshipDriver;

        res.json(obj);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getDashboardChartData,
};