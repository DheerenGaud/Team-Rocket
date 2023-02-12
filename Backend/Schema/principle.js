const mongoose =require("mongoose")
const autoincrement=require("mongoose-auto-increment");
const collageShema=mongoose.Schema(
   { Pname:String,
    Cname:String,
    email:String,
    address:String,
    password:String,
    state:String,
    city:String,
    qualification:String,
    accridetaion:String,
    collage_info:{
        history:String,
        founded:String,
        achievement:[{
            title:String,
            content :String,
            img:String,
        }]}
        
    }
)
autoincrement.initialize(mongoose.connection)
collageShema.plugin(autoincrement.plugin,"collage")
module.exports =mongoose.model("collage",collageShema);