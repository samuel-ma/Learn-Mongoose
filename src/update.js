

//update a record using mongoose
EmailModel = require("./email2");

EmailModel.findOneAndUpdate(
    {
        email: "ada.lovelace@gmail.com"
    },
    {
        email: "thunderbolt@live.com"
    },
    {
        new: true,
        runValidators: true
    },
    ). then(doc => {
        console.log(doc)
    }). catch(err => {
        console.error(err)
    })