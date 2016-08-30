const helpers = require('../helpers/helpers');

module.exports = function(app, express) {

  app.post('/translate/client', function(req, res) {
    helpers.translator(req.body.phrase, req.body.lang, function(data) {
      console.log(data);
      res.status(200).send(data);
    });
  })

  app.post('/translate/user', function(req, res) {
  })
}