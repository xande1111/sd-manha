var express = require('express');
var router = express.Router();

 // const timesRepo = require('../repositorios/timesRepo');
 const timesController = require('../controllers/timesController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let response = timesController.getAllTimes(req.get("api_key"));
  res.status(response.code).json(response.payload);
});

router.get('/:id', function(req, res, next) {
  res.json(timesController.getTimeById(req.params.id));
});

router.post('/', function(req, res, next) {
  timesController.addTime(req.body);
  res.send('ok');
});



module.exports = router;

