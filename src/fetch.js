

//fetch a record using mongoose
let EmailModel = require("./email2");

EmailModel.find({
    email: "ada.lovelace@gmail.com"
}). then(doc => {
    console.log(doc);
}). catch(err => {
    console.error(err);
})