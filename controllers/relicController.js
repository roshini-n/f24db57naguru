//const mongoose = require('mongoose');
// controllers/relicController.js
var Relic = require('../models/relic');


// List all relics
exports.relic_view_all_Page = async function(req, res) {
    try {
        const relics = await Relic.find();
        res.render('relics', { title: 'Relic Search Results', results: relics });
    } catch (error) {
        res.status(500).send(`{"error": ${error}}`);
    }
};



// Get details of a specific relic
exports.relic_detail = async function(req, res) {
    console.log("detail: " + req.params.id);
    try {
        const result = await Relic.findById(req.params.id);
        if (!result) {
            return res.status(404).send({ error: `Document for id ${req.params.id} not found` });
        }
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: `Error retrieving document for id ${req.params.id}` });
    }
};




// Handle relic creation on POST (based on your given instructions)
exports.relic_create_post = async (req, res) => {
    console.log(req.body);  // Log the body to ensure you're receiving it correctly

    // Creating a new relic object using the request body
    let newRelic = new Relic({
        relic_name: req.body.relic_name,   // assuming relic_name is part of the JSON object
        origin: req.body.origin,           // assuming origin is part of the JSON object
        estimated_value: req.body.estimated_value // assuming estimated_value is part of the JSON object
    });

    try {
        // Save the new relic to the database
        const result = await newRelic.save();
        res.status(201).json(result); // Respond with the created relic as a JSON object
    } catch (err) {
        res.status(500).send({ error: err.message });  // Handle any errors
    }
};


// Handle relic deletion on DELETE
// Handle Relic delete on DELETE
exports.relic_delete = async function (req, res) {
    console.log(`Attempting to delete relic with id: ${req.params.id}`);
    try {
        const relic = await Relic.findByIdAndDelete(req.params.id);

        if (!relic) {
            // Relic not found
            console.warn(`Relic with id ${req.params.id} not found`);
            return res.status(404).json({ error: `Relic with id ${req.params.id} not found` });
        }

        console.log(`Successfully deleted relic with id: ${req.params.id}`);
        res.status(200).json({ message: "Relic deleted successfully", data: relic });
    } catch (error) {
        console.error(`Error deleting relic: ${error.message}`);
        res.status(500).json({ error: `Failed to delete relic: ${error.message}` });
    }
};

// Handle relic update on PUT
exports.relic_update_put = async function(req, res) {
    console.log(`Update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Relic.findById(req.params.id);
       
        if (!toUpdate) {
            return res.status(404).send(`{"error": "Relic with id ${req.params.id} not found"}`);
        }
 
        // Do updates of properties
        toUpdate.relic_name = req.body.relic_name;
        toUpdate.origin = req.body.origin;
        toUpdate.estimated_value = req.body.estimated_value;
 
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500).send(`{"error": "Update for id ${req.params.id} failed due to error: ${err}"}`);
    }
};
