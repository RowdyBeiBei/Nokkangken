const mockData = require('../mockData/users.json');

module.exports = {
  login: (req, res) => {
    // console.log("login user req", req.query);
    res.status(200).json(mockData.nick);
  },
  signup: (req, res) => {
    res.sendStatus(200);
  }

};
