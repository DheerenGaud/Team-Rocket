const Collage=require("../Schema/principle")

const newCollage= async(req,res)=>{
  console.log(req.body)
  const logo=(req.file)?req.file.filename:null
 
  const {Pname,vision,age,mission,found,accridetaion,Cname,qualification,email,address,password,Cpassword,city,state}=req.body

    const newCollage=new Collage({Pname,logo,vision,age,mission,found,accridetaion,Cname,qualification,email,address,password,Cpassword,city,state})
    try{
     await newCollage.save();
     console.log("Collage is added in db")
     res.status(200).json(newCollage)
    }
    catch(err){
      console.log("err ocuur during storing collage "+err)
    }
}

const findCollage= async(req,res)=>{
  console.log(req.body.id)
  
  Collage.findOne({_id:req.body.id},(err,result)=>{
       if(!err){
           if(!result){
               console.log("collage not found in db")
               res.status(200).json(result)
              }
              else{
                      res.status(200).json(result)
                      console.log("collage found in by its id db")
              }
          
      }
      else{
          console.log("err ocuur during findinBy Id collage "+err)
      }
   })
}
const addTeacher= async(req,res)=>{
  
   const y=req.body.x
   try {
     await Collage.findOneAndUpdate({_id:req.body.id},{
      $push:{
        teachers:y
      }
      },(err,result)=>{
      if(!err){
           console.log("result  "+result)
           res.status(200).json(result)
      }
      else{
          console.log("err is ther"+err)
      }
     })
   } catch (error) {
    console.log(error)
   }
}

const editCollage= async(req,res)=>{ 

  console.log("hxchgdshdhdskj --------------------")
  console.log(req.body)
  
  const image_1=(req.files.image_1)?req.files.image_1[0].filename:null
  const image_2=(req.files.image_2)?req.files.image_2[0].filename:null
  const image_3=(req.files.image_3)?req.files.image_3[0].filename:null
  const image_4=(req.files.image_4)?req.files.image_4[0].filename:null
  const image_5=(req.files.image_5)?req.files.image_5[0].filename:null
  const image_6=(req.files.image_6)?req.files.image_6[0].filename:null

  const {infradiscription,achievement,title_1,title_2,title_3,title_4,title_5,title_6}=req.body
   
 const infraArr=[{title:title_1,photo:image_1},{title:title_2,photo:image_2},{title:title_3,photo:image_3}]
 const achiArr=[{title:title_4,photo:image_4},{title:title_5,photo:image_5},{title:title_6,photo:image_6}]
   

 const id=Number(req.body.id)
   console.log(id)
  
   try {
     await Collage.findOneAndUpdate({_id:id},{
     '$set':{ 
      collage_info:{
        infradiscription:infradiscription,
        achievement:achievement,
          infraArr:infraArr,
          achiArr:achiArr
      }
    }
      },(err,result)=>{
      if(!err){
           console.log("result  "+result)
           res.status(200).json(result)
      }
      else{
          console.log("err is ther"+err)
      }
     })


   } catch (error) {
    console.log("err is ther"+error)
   }
}

const teacherExist = async (req,res)=>{
  console.log(req.body)
    let teacher=[]
  try {
     await Collage.find({_id:req.body.id},(err,result)=>{
      if(!err){
          teacher=result[0].teachers;
          res.status(200).json(teacher)
          console.log("Succecfully finding the data")
      }
      else{
          console.log("error is occor finding the data"+err)
      }
    })
  } catch (error) {
    console.log("error is occor finding the data"+error)
  } 
}
const addMoreTeacherData = async (req,res)=>{
  console.log(req.file)
  const profilePic=(req.file)?req.file.filename:null
  try {
    await Collage.findOneAndUpdate({_id:req.body.id,teachers:{$elemMatch:{email:req.body.email}}},{
      $set:{
        "teachers.$.Uname":req.body.Uname,
        "teachers.$.experiance":req.body.experiance,
        "teachers.$.gender":req.body.gender,
        "teachers.$.password":req.body.password,
        "teachers.$.qualification":req.body.qualification,
        "teachers.$.profilePic":profilePic,
        "teachers.$.department":req.body.department
      }
    },(err,result)=>{
      if(!err){
        res.status(200).json(result)
        console.log("Teacher is finded and updated the data"+err)
      }
    })
  } catch (error) {
    
    console.log("error is occor finding the data"+error)
  }
  
  
}

const findteacher = async (req,res)=>{
  console.log(req.body.data.email)
  // try {teachers:{$elemMatch:{email:res.body.data.email,password:res.body.data.password}
  try{
     await Collage.findOne({_id:req.body.id,teachers:{$elemMatch:{email:req.body.data.email,password:req.body.data.password}}},(err,result)=>{
        if(!err){
             console.log(result);
             res.status(200).json(result)
        }
        else{
          res.status(200).json({})
          console.log("error is occor finding the teacher")
        }
     })
  } catch (error) {
    console.log("error is occor finding the data"+error)
  } 
}
const getTeacher = async (req,res)=>{
  console.log(req.body)
  
  try{
     await Collage.findOne({_id:req.body.id},(err,result)=>{
        if(!err){
             console.log(result);
             res.status(200).json(result)
        }
        else{
          res.status(200).json({})
          console.log("error is occor finding the teacher")
        }
     })
  } catch (error) {
    console.log("error is occor finding the data"+error)
  } 
}

module.exports={
    newCollage,findCollage,addTeacher,editCollage,teacherExist,addMoreTeacherData,findteacher,getTeacher
}
