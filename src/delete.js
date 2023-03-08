

//deleting records with mongoose
let EmailModel = require("./email2");

EmailModel.findOneAndRemove({
    email: "thunderbolt@live.com"
}). then(res => {
    console.log(res)
}). error(err => {
    console.error(err)
})
