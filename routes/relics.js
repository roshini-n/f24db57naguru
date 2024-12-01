var express = require('express');
var router = express.Router();
const passport = require('passport'); 
const relic_controller = require('../controllers/relicController');
const Detail_controller = require('../controllers/DetailController');


// GET request to fetch all relics
// router.get('/', relic_controller.relic_view_all_Page);
// router.post('/relics', relic_controller.relic_create_post);
// router.get('/:id', relic_controller.relic_detail);
// router.put('/:id', relic_controller.relic_update_put);
// router.delete('/:id', relic_controller.relic_delete);
//router.get('/', relic_controller.relic_list);

const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect('/login');
  };
  
router.get('/relics', relic_controller.getRelics);
router.get('/', relic_controller.relic_view_all_Page);
router.post('/relics', relic_controller.relic_create_post);
router.get('/relics/:id', relic_controller.relic_detail);
router.put('/relics/:id', relic_controller.relic_update_put);
router.delete('/relics/:id', relic_controller.relic_delete);

router.get('/detail', Detail_controller.relic_view_one_Page);
router.get('/create', Detail_controller.relic_create_Page);
router.get('/create', secured, Detail_controller.relic_create_Page);
router.get('/update', Detail_controller.relic_update_Page);
router.get('/update',secured, Detail_controller.relic_update_Page);
router.get('/details/:id', secured, Detail_controller.relic_view_one_Page);
router.get('/delete/:id', secured, Detail_controller.relic_delete_Page);

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
    
router.get('/delete', Detail_controller.relic_delete_Page);

module.exports = router;
