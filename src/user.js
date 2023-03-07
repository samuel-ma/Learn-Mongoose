

let mongoose = require("mongoose");

let timestampPlugin = require("./timestamp")

let userSchema = new mongoose.Schema({
    firstName: String,
    secondName: String
});

// using the virtual property helper methods
userSchema.virtual("fullName").get(function(){
    return this.firstName + "" + this.lastName
})

userSchema.virtual("fullName").set(function(name){
    let str = name.split()

    this.firstName = str[0]
    this.lastName = str[1]
})

let model = new UserModel();

model.fullName = "Alexander Anderson";

console.log(model.to.JSON())

console.log(model.fullName)

// using the instance model helper methods
userSchema.methods.getInitials = function(){
    return this.firstName[0] + this.lastName[0]
}

let model2 = new UserModel({
    firstName: "John",
    lastName: "Doe"
})

let initials = model.getInitials();

console.log(initials);

// using the static helper methods
userSchema.statics.getUsers = function(){
    return new Promise((res, rej) => {
        this.find((err, docs) => {
            if(err){
                console.error(err);
                return rej(err)
            }
            res(docs)
        })
    })
}

UserModel.getUsers().then(docs => {
    console.log(docs)
}).catch(err => {
    console.erro(err)
})

// using the timestamp plugin helper method
userSchema.plugin(timestampPlugin)

module.exports = mongoose.model("User", userSchema);