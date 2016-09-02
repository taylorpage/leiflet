const request = require('request');
const KEYS = require('../config/config.js');
const translate = require('yandex-translate')(KEYS.TRANSAPI);
/* All Helper Functions Belong Here
   Use callbacks to return values back to the routes */

exports.translator = function(phrase, to, from, cb) {
  translate.translate(phrase, { to: to, from: from }, function(err, res) {
    cb(res.text);
  })
}