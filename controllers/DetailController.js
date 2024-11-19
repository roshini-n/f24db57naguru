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