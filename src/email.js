

// step 1: Referencing mongoose.
let mongoose = require("mongoose");

// step 2: Defining the schema.
let emailSchema = new mongoose.Schema({
    email: String
});

// step 3: Export the model
module.exports = mongoose.model("Email", emailSchema);