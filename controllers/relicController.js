const mongoose = require('mongoose');
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
    try {
        // Ensure req.params.id is a valid ObjectId
        const relicId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(relicId)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const relic = await Relic.findById(relicId);
        if (!relic) {
            return res.status(404).json({ message: "Relic not found" });
        }
        res.json(relic);
    } catch (error) {
        console.error("Error retrieving relic:", error);
        res.status(500).json({ error: "Failed to retrieve relic details" });
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
exports.relic_delete = async function(req, res) {
    try {
        const relic = await Relic.findByIdAndDelete(req.params.id);
        if (!relic) {
            return res.status(404).json({ message: "Relic not found" });
        }
        res.json({ message: "Relic deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete relic" });
    }
};

// Handle relic update on PUT
exports.relic_update_put = async function(req, res) {
    try {
        const updatedRelic = await Relic.findByIdAndUpdate(
            req.params.id,
            {
                relic_name: req.body.relic_name,
                origin: req.body.origin,
                estimated_value: req.body.estimated_value
            },
            { new: true } // Option to return the updated document
        );
        if (!updatedRelic) {
            return res.status(404).json({ message: "Relic not found" });
        }
        res.json(updatedRelic);
    } catch (error) {
        res.status(400).json({ error: "Failed to update relic" });
    }
};
