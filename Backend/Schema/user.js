const mongoose =require("mongoose")
const autoincrement=require("mongoose-auto-increment")

const userShema=mongoose.Schema({
    Fname:String,
    Lname:String,
    email:String,
    collage:String,
    password:String,
    standard:String,
    profilePic:String
})
autoincrement.initialize(mongoose.connection)
userShema.plugin(autoincrement.plugin,"user")
module.exports =mongoose.model("user",userShema);