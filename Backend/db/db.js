
const mongoose=require("mongoose")

const connected =async ()=>{
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/TeamRocket',{useNewUrlParser : true , useUnifiedTopology : true })  
        console.log("database is connected...")
       
    } catch (error) {
        console.log("some error in connecting database")
    }
}
module.exports =connected;