

let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    createdAt: Date,
    updateAt: Date
});

userSchema.pre("save", function(next){
    let now = Date.now()

    this.updateAt = now

    if(!this.createdAt){
        this.createdAt = now
    }

    next()
})

let UserModel = require("./user");

let model = new UserModel({
    fullName: "Peter Pan"
})

msg.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.error(err)
})

module.exports = mongoose.model("User", userSchema);