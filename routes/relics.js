var express = require('express');
const relic_controller = require('../controllers/relicController');  // Corrected name
var router = express.Router();

// GET request to fetch all relics
router.get('/', relic_controller.relic_view_all_Page);

// POST request to create a new relic
router.post('/relics', relic_controller.relic_create_post);

// GET /resource/:id - Get details of a specific relic by ID
// router.get('/:id', relic_controller.relic_detail);

// // Default home page or placeholder route
// router.get('/home', function(req, res, next) {
//   res.send('List of relics');
// });

module.exports = router;
