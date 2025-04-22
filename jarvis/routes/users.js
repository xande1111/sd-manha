var express = require('express');
var router = express.Router();

const users = [
  {
    id: 1,
    username: 'jett'
  },

  {id: 3, username: 'yoru'}
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
