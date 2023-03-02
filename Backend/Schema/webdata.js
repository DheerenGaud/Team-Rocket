const mongoose = require("mongoose")

const subjectSchema=mongoose.Schema({
    subject:String,
    _id:Number,
    data:[{
        topic:String,
        vedio:String}]
})

const dataSchema= mongoose.Schema({
   content:[subjectSchema]
})


module.exports=mongoose.model("webdata",dataSchema)