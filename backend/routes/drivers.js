const express = require('express');
const router = express.Router();
const { getAllDrivers } = require('../controllers/driversController');
const { getHighLightsData } = require('../controllers/getHighlightsData');
const { getDashboardChartData } = require('../controllers/getDashboardChartsData');
const { getLeaderBoardData } = require('../controllers/leaderboardData');
const { getChampionsData } = require('../controllers/championsData');
const { getAllDriverNames } = require('../controllers/getAllDriverNames');
const { getAllCountries } = require('../controllers/getAllCountries');
const { getDriverDataByName } = require('../controllers/getDriverDataByName');
const { getDataFilterByCountry } = require('../controllers/getAllDataForCountry');

// routing for all the api's related to drivers
router.get('/drivers', getAllDrivers);
router.get('/highlights-data', getHighLightsData);
router.get('/getDashboardChartsData', getDashboardChartData);
router.get('/leaderboard-data', getLeaderBoardData);
router.get('/champions-data', getChampionsData);
router.get('/driver-names', getAllDriverNames);
router.get('/country-names', getAllCountries);
router.get('/driver-data/:driver_name', getDriverDataByName);
router.get('/drivers-country-data/:country_name', getDataFilterByCountry);

module.exports = router;