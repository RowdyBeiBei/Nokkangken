const express = require('express');
var router = require('./router.js');
const prospectiveMatchesHandler = require('./handlers/prospectiveMatchesHandler.js');



const app = express();


require('./middleware.js')(app, express);

app.use('/', router);

app.get('/prospectiveMatches', prospectiveMatchesHandler.getProspectiveMatches);

app.listen(3000, () => {
  console.log('Nokkangken listening on port 3000');
});
