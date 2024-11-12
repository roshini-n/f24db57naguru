// controllers/relicController.js
var Relic = require('../models/relic');
// List all relics
exports.relic_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Relic list');
};

// For a specific relic
exports.relic_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Relic detail: ' + req.params.id);
};

// Handle relic creation on POST
exports.relic_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Relic create POST');
};

// Handle relic deletion on DELETE
exports.relic_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Relic delete DELETE ' + req.params.id);
};

// Handle relic update on PUT
exports.relic_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Relic update PUT ' + req.params.id);
};
