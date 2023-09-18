const { sequelize, Sequelize } = require('../models/index'); // Import the Sequelize instance
const { Drivers } = sequelize.models; // Import the Driver model


// getting all data for the leaderboard page
const getLeaderBoardData = async (req, res) => {
    try {

        const leaderboardData = await Drivers.findAll({
            attributes: ['country', 'name', 'seasons_competed', 'drivers_championship', 'points'],
            where: {
                points: {
                    [Sequelize.Op.gt]: 0
                } 
            },
            order: [
                ['points', 'DESC'],
                ['drivers_championship', 'DESC'],
            ],
        });

        return res.json(leaderboardData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getLeaderBoardData,
};