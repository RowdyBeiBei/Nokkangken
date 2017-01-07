// const yelpKeys = require('../config.js').yelpKeys;
const request = require('request-promise');
const token = process.env['access_token'] || require('../config.js').yelpKeys;

module.exports = {
  getNearbyLocations: (req, res) => {
    const optionsSearch = {
      url: 'https://api.yelp.com/v3/businesses/search?',
      headers: {
        'Authorization':  `Bearer ${token}`
      },
      qs: {
        latitude: req.query.latitude,
        longitude: req.query.longitude
      },
      json: true
    };
    request.get(optionsSearch).then((body) => {
      return body.businesses.map((location) => {
        return location.id;
      });
    }).then((ids) => {
      return ids.map((id) => {
        const optionsId = {
          url: `https://api.yelp.com/v3/businesses/${id}`,
          headers: {
            'Authorization': `Bearer ${yelpKeys.access_token}`
          },
          json: true
        };
        return request.get(optionsId).then((location) => {
          return location
        });
      });
    }).then((requestMap) => {
      return Promise.all(requestMap);
    }).then((locations) => {
      res.status(200).json(locations);
    });
  },
  // ↓ this was used for detailed info which we are now getting from the start, we prolly dont need this

  getSelectedLocation: (req, res) => {
    const options = {
      url: `https://api.yelp.com/v3/businesses/${req.query.businessId}`,
      headers: {
        'Authorization': `Bearer ${token}`
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
