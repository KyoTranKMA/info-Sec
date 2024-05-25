const express = require('express');
/* Challenge 1 */
const helmet = require('helmet')
const app = express();

/* Challenge 2 */
app.use(helmet.hidePoweredBy({ setTo: 'Kyo Server'}));

/* Challenge 3 */
app.use(helmet.frameguard({action: 'deny'}));
/* Challenge 4 */
app.use(helmet.xssFilter())
/* Challenge 5 */
app.use(helmet.noSniff())
/* CHallenge 6 */
app.use(helmet.ieNoOpen())
/* Challenge 7 */
const timeInSecond = 90 * 24 * 60 * 60 * 1000;
app.use(helmet.hsts({maxAge: timeInSecond, force: true}))
/* Challenge 8 */
app.use(helmet.dnsPrefetchControl());
/* Challenge 9 */
app.use(helmet.noCache());
/* Challenge 10 */
app.use(helmet.contentSecurityPolicy({ directives: { defaultSrc: ["'self'"], scriptSrc: ["'self'", "trusted-cdn.com"] } }));









































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
