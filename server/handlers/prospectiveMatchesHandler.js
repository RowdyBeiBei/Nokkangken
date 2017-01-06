const mockProspectiveMatches = require('../mockData/prospectiveMatches.json');

module.exports = {
  getProspectiveMatches: (req, res) => {
    res.status(200).json(mockProspectiveMatches);
  }
};
