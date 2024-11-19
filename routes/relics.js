var express = require('express');
var router = express.Router();
const relic_controller = require('../controllers/relicController');
const Detail_controller = require('../controllers/DetailController');


// GET request to fetch all relics
// router.get('/', relic_controller.relic_view_all_Page);
// router.post('/relics', relic_controller.relic_create_post);
// router.get('/:id', relic_controller.relic_detail);
// router.put('/:id', relic_controller.relic_update_put);
// router.delete('/:id', relic_controller.relic_delete);

router.get('/', relic_controller.relic_view_all_Page);
router.post('/relics', relic_controller.relic_create_post);
router.get('/relics/:id', relic_controller.relic_detail);
router.put('/relics/:id', relic_controller.relic_update_put);
router.delete('/relics/:id', relic_controller.relic_delete);

router.get('/detail', Detail_controller.relic_view_one_Page);

module.exports = router;
