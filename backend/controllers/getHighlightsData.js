const { sequelize } = require('../models/index'); // Import the Sequelize instance
const { Drivers } = sequelize.models; // Import the Driver model


// getting highlights data to show as highlighsts in the dashboard page
const getHighLightsData = async (req, res) => {
    try {
        const uniqueCountries = await Drivers.count({
            distinct: true,
            col: 'country',
        });
        console.log(`Number of unique countries: ${uniqueCountries}`);

        const totalDrivers = await Drivers.count();
        console.log(`Total number of drivers: ${totalDrivers}`);

        const maxChampionshipDriver = await Drivers.findOne({
            attributes: ['country', 'name', 'drivers_championship'],
            order: [['drivers_championship', 'DESC']],
        });
        console.log(`Country: ${maxChampionshipDriver.country}`);
        console.log(`Driver Name: ${maxChampionshipDriver.name}`);
        console.log(`Drivers Championship: ${maxChampionshipDriver.drivers_championship}`);

        const maxPointsDriver = await Drivers.findOne({
            attributes: ['country', 'name', 'points'],
            order: [['points', 'DESC']],
        });
        console.log(`Country: ${maxPointsDriver.country}`);
        console.log(`Driver Name: ${maxPointsDriver.name}`);
        console.log(`Points: ${maxPointsDriver.points}`);

        const max_participations = await Drivers.findOne({
            order: [[sequelize.fn('LENGTH', sequelize.col('seasons_competed')), 'DESC']],
          });
        
        let seasons_competed_arr = max_participations.seasons_competed;
        seasons_competed_arr = seasons_competed_arr.split(',');
        max_participation_num = seasons_competed_arr.length;

        const obj = {}
        obj["uniqueCountries"] = uniqueCountries;
        obj["totalDrivers"] = totalDrivers;
        obj["country_max_championship"] = maxChampionshipDriver.country;
        obj["driver_max_championship"] = maxChampionshipDriver.name;
        obj["num_championships"] = maxChampionshipDriver.drivers_championship;
        obj["country_max_points"] = maxPointsDriver.country;
        obj["driver_max_points"] = maxPointsDriver.name;
        obj["max_points"] = maxPointsDriver.points;
        obj["max_participation_num"] = max_participation_num;
        obj["max_participation_driver"] = max_participations.name;
        obj["max_participations_country"] = max_participations.country;

        res.json(obj);



    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getHighLightsData,
};