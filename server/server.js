const express = require('express');
const router = require('./router.js');
const prospectiveMatchesHandler = require('./handlers/prospectiveMatchesHandler.js');



const app = express();
const port = process.env.PORT || 3000;

require('./middleware.js')(app, express);

app.use('/', router);
console.log("hello");
app.get('/prospectiveMatches', prospectiveMatchesHandler.getProspectiveMatches);

app.listen(port, () => {
  console.log('Nokkangken listening on port 3000');
});
