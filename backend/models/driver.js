// Defining drivers database model
module.exports = (sequelize, DataTypes) => {
    const Driver = sequelize.define('Drivers', {
        name: DataTypes.STRING,
        country: DataTypes.STRING,
        seasons_competed: DataTypes.STRING,
        drivers_championship: DataTypes.DOUBLE,
        race_entries: DataTypes.DOUBLE,
        race_starts: DataTypes.DOUBLE,
        pole_positions: DataTypes.DOUBLE,
        race_wins: DataTypes.DOUBLE,
        podium_fastest_laps: DataTypes.DOUBLE,
        points: DataTypes.DOUBLE,
    });

    return Driver;
}