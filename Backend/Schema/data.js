const mongoose = require("mongoose")

const dataSchema=mongoose.Schema({
    from:String,
    class:[{
        name:String,
        subject:[{
            name:String,
            module:[{
                name:String,
                content:[{
                    topic:String,
                    vedio:String
                }]
            }]
        }],

    }]
})

module.exports=mongoose.model("data",dataSchema)