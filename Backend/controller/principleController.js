const Collage=require("../Schema/principle")

const newCollage= async(req,res)=>{
    console.log(req.body)
    const newCollage=new Collage(req.body)
    try{
     await newCollage.save();
     console.log("user is added in db")
     res.status(200).json(newUser)
    }
    catch(err){
      console.log("err ocuur during storing user "+err)
    }
}

module.exports={
    newCollage
}
