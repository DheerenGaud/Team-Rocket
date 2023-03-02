const mongoose =require("mongoose")
const autoincrement=require("mongoose-auto-increment");
const collageShema=mongoose.Schema(
   { Pname:String,
    logo:String,
    Cname:String,
    email:String,
    address:String,
    password:String,
    state:String,
    city:String,
    qualification:String,
    accridetaion:String,
    found:String,
    mission:String,
    vision:String,
    age:Number,
    collage_info:
       {
        infradiscription:String,
        achievement:String,
        infraArr:[{
            title:String,
            photo:String,
        }],
        achiArr:[{
            title:String,
            photo:String,
        }],
        },
        teachers:[{
          
            name:String,
            sub:String,
            email:String,
            age:String,
            Uname:String,
            experiance:Number,
            gender:String,
            password:String,
            qualification:String,
            profilePic:String,
            department:String

        }],
        students:[{
            name:String,
            std:String,
            img:String,
            email:String
        }]
        
    }
)

autoincrement.initialize(mongoose.connection)
collageShema.plugin(autoincrement.plugin,"collage")
module.exports =mongoose.model("collage",collageShema);