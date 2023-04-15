const mongoose = require("mongoose");
// const validator = require("validator");

const linksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },

})

// create new collection

const Marketting = new mongoose.model('Marketting', linksSchema);

module.exports = Marketting;