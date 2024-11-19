var Relic = require('../models/relic');
 
// View for a single relic detail page
exports.relic_view_one_Page = async function (req, res) {
    console.log('Single view for id ' + req.query.id);
    try {
        // Find the relic by its ID
        const result = await Relic.findById(req.query.id);
        // Render the view with the retrieved relic data
        res.render('relicdetail', {
            title: 'Relic Detail',
            toShow: result,
        });
    } catch (err) {
        // Handle errors
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};

exports.relic_create_Page = function (req, res) {
    console.log("Create view");
    try {
      res.render('reliccreate', { title: 'Create Relic' });
    } catch (err) {
      res.status(500);
      res.send(`{'error': '${err}'}`);
    }
  };

  exports.relic_update_Page = async function(req, res) {
    console.log("Update view for item " + req.query.id);
    try {
      let result = await Relic.findById(req.query.id);
      res.render('relicupdate', { title: 'Relic Update', toShow: result });
    } catch (err) {
      res.status(500);
      res.send(`{'error': '${err}'}`);
    }
  };