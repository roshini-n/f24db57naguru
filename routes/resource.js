// routes/resource.js
const express = require('express');
const router = express.Router();

// Require controller modules
const api_controller = require('../controllers/api');
const relics_controller = require('../controllers/relicController');

/// API ROUTE ///

// GET request for API base
router.get('/', api_controller.api);

// Relics Routes
router.get('/', relics_controller.relic_list); // GET request for list of all Relics
router.post('/:id', relics_controller.relic_create_post); // POST request for creating a Relic
router.get('/:id', relics_controller.relic_detail); // GET request for a specific Relic
router.put('/:id', relics_controller.relic_update_put); // PUT request to update a Relic
router.delete('/:id', relics_controller.relic_delete); // DELETE request to delete a Relic

module.exports = router;