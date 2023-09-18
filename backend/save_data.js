// file to save csv data to the postgres database

const fs = require('fs');
const csv = require('csv-parser');

const { sequelize } = require('./models/index'); // Import the Sequelize instance
const { Drivers } = sequelize.models; // Import the Driver model

// specifying the path to csv file
const csvFilePath = 'F1DriversDataset.csv';


const pushDataToDatabase = async () => {
    try {
        const results = [];
        // read csv file
        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', (row) => {

                const db_obj = {};
                db_obj['name'] = row['Driver'];
                db_obj['country'] = row['Nationality'];
                db_obj['seasons_competed'] = row['Seasons'];
                db_obj['drivers_championship'] = row['Championships'];
                db_obj['race_entries'] = row['Race_Entries'];
                db_obj['race_starts'] = row['Race_Starts'];
                db_obj['pole_positions'] = row['Pole_Positions'];
                db_obj['race_wins'] = row['Podiums'];
                db_obj['podium_fastest_laps'] = row['Fastest_Laps'];
                db_obj['points'] = row['Points'];

                // works fine
                // console.log(db_obj)
                // processing it here
                results.push(db_obj);
            })
            .on('end', async () => {
                await Drivers.bulkCreate(results);
                console.log('Data inserted successfully.');
            })
    } catch (error) {
        console.error('Error: ', error);
    }
};

pushDataToDatabase();


