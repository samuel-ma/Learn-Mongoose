

//create a record using mongoose
let EmailModel = require("./email2");

let msg = new EmailModel({
    email: "ada.lovelace@gmail.com"
})

msg.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.error(err)
})

