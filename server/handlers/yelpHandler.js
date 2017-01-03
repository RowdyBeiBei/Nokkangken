const yelpKeys = require('../config.js').yelpKeys;
const request = require('request');

module.exports = {
  getNearbyLocations: (req, res) => {
    const options = {
      url: 'https://api.yelp.com/v3/businesses/search?',
      headers: {
        'Authorization': `Bearer ${yelpKeys.access_token}`
      },
      qs: {
        latitude: req.query.latitude,
        longitude: req.query.longitude,
        open_at: req.query.open_at
      }
    };
    request(options, (err, response, body) => {
      res.set({'Content-type': 'application/json'});
      if(err) {
        console.log('this is an err from getNearbyLocations: ', err);
        res.status(400).send(err);
      }else {
        res.status(200).send(body);
      }
    });
  },
  getSelectedLocation: (req, res) => {
    const options = {
      url: `https://api.yelp.com/v3/businesses/${req.query.businessId}`,
      headers: {
        'Authorization': `Bearer ${yelpKeys.access_token}`
      }
    };
    request(options, (err, response, body) => {
      res.set({'Content-type': 'application/json'});
      if(err) {
        res.status(400).send(err);
      }else {
        res.status(200).send(body);
      }
    });
  }
};
