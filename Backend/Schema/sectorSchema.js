const mongoose = require("mongoose")

const sectorSchema=mongoose.Schema({
    sector:[{
        sectorname:String,
        _id:Number,
        content:[{
            _id:Number,
            subject:String,
            data:[{
                topic:String,
                vedio:String
            }]
        }]
    }]
})




module.exports=mongoose.model("sector",sectorSchema)