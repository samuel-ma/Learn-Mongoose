

module.exports = function timestamp(schema){

    //add the two fields to the schema
    schema.add({
        createdAt: Date,
        updatedAt: Date
    })

    //create a pre-save hook
    schema.pre("save", function(next){
        let now = Date.now()

        this.updatedAt = now

        //set a value for createdAt only if it is null
        if(!this.createdAt){
            this.createdAt = now
        }

        next()
    })
}