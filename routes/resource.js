const express = require('express');
const router = express.Router();
const relicController = require('../controllers/relicController');
const apiController = require('../controllers/api'); // Assuming apiController exists

// API Route
router.get('/api', apiController.api);

// Relic Routes
router.get('/relics', relicController.relic_view_all_Page); // Page for viewing all relics
router.get('/relics/:id', relicController.relic_detail); // Get details of a specific relic
router.post('/relics', relicController.relic_create_post); // Create a relic
router.put('/relics/:id', relicController.relic_update_put); // Update a relic by ID
router.delete('/relics/:id', relicController.relic_delete); // Delete a relic by ID
//router.post('/relic', relicController.relic_create);

module.exports = router;
