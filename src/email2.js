

//Let's enhance the email.js file we just created

// step 1: referencing mongoose
let mongoose = require("mongoose");

// step 2: add a validator
let validator = require("validator");

// step 3: define the schema
let emailSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: (value) => {
        return validator.isEmail(value)
      }
    }
})

// using the timestamp plugin helper method
userSchema.plugin(timestampPlugin)

module.exports = mongoose.model("Email", emailSchema);