const User=require("../Schema/user")


const adduser= async(req,res)=>{
    const newUser=new User(req.body)
    try{
     await newUser.save();
     console.log("user is added in db")
     res.status(200).json(newUser)
    }
    catch(err){
      console.log("err ocuur during storing user "+err)
    }
}

const finduser= async(req,res)=>{
    console.log(req.body.email)
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


module.exports= {
    adduser,finduser
}

