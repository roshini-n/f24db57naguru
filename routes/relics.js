var express = require('express');
var router = express.Router();
const relic_controller = require('../controllers/relicController');


// GET request to fetch all relics
router.get('/', relic_controller.relic_view_all_Page);
router.post('/relics', relic_controller.relic_create_post);
router.get('/:id', relic_controller.relic_detail);
router.put('/:id', relic_controller.relic_update_put);
router.delete('/:id', relic_controller.relic_delete);
// GET /resource/:id - Get details of a specific relic by ID
// router.get('/:id', relic_controller.relic_detail);

// // Default home page or placeholder route
// router.get('/home', function(req, res, next) {
//   res.send('List of relics');
// });

module.exports = router;
