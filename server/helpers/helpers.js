const request = require('request');
const KEYS = require('../config/config.js');
const translate = require('yandex-translate')(KEYS.TRANSAPI);
/* All Helper Functions Belong Here
   Use callbacks to return values back to the routes */

exports.translator = function(phrase, lang, cb) {
  translate.translate(phrase, { to: lang }, function(err, res) {
    console.log(res.text);
  })
}