const User=require("../Schema/user")
const Collage=require("../Schema/principle")

const adduser= async(req,res)=>{
    
    const profilePic=(req.file)?req.file.filename:null
    console.log(req.file)
    const {Fname,Lname,password,email,collage,standard}=req.body
    const x={
       name:Fname,
       std:standard,
       img:profilePic,
       email:email
    }
    const newUser=new User({Fname,Lname,password,email,collage,standard,profilePic})
    try{
     await newUser.save();
     await Collage.findOneAndUpdate({Cname:collage},{
        $push:{
            students: x
        }
     },(err,result)=>{
        if(!err){
             res.status(200).json(result)
        }
        else{
            console.log("err is ther"+err)
        }
     })
     console.log("user is added in db")
     res.status(200).json(newUser)
    }
    catch(err){
      console.log("err ocuur during storing user "+err)
    }
}

const finduser= async(req,res)=>{
    console.log(req.body.password)
     const newemail=req.body.email;

     User.findOne({email:newemail},(err,result)=>{
         if(!err){
             if(!result){
                 console.log("user not found in db")
                 res.status(200).json(result)
                }
                else{
                    if(result.password===req.body.password){
                        res.status(200).json(result)
                        console.log("user found in db")
                }
                else{
                    res.status(200).json({_id:-1})
                    console.log("user password is wrong")
                }
            }
        }
        else{
            console.log("err ocuur during findin user "+err)
        }
     })
}
const findUserByID= async(req,res)=>{
    console.log(req.body.id)
    console.log("asaaaaaaaaaaaaaaaaaaaaa")
    console.log(req.body.file)

     User.findOne({_id:req.body.id},(err,result)=>{
         if(!err){
             if(!result){
                 console.log("user not found in db")
                 res.status(200).json(result)
                }
                else{
                        res.status(200).json(result)
                        console.log("user found in by its id db")
                }
            
        }
        else{
            console.log("err ocuur during findinBy Id user "+err)
        }
     })
}


module.exports= {
    adduser,finduser,findUserByID
}

