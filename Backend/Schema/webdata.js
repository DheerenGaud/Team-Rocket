const mongoose = require("mongoose")


const dataSchema= mongoose.Schema({
   content:[{
    subject:String,
    data:[{
        topic:String,
        vedio:String
    }]
   }]
})


module.exports=mongoose.model("webdata",dataSchema)