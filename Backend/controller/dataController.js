const Data=require("../Schema/webdata")
const Sector=require("../Schema/sectorSchema")

const getdata = async (req,res)=>{
    console.log("i am here")
    try {
       await Data.find({},(err,result)=>{
        if(!err){
            res.status(200).json(result)
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
const getVedios = async (req,res)=>{
    console.log(req.body.subject)
    console.log("it is get vedio")
   
    try {
        await Data.find({},(err,result)=>{
         if(!err){
             console.log(result)
             res.status(200).json(result)

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
const getSectordata = async (req,res)=>{
    console.log("i am here")
    try {
       await Sector.find({},(err,result)=>{
        if(!err){
            res.status(200).json(result)
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


module.exports={
    getdata,getVedios,getSectordata
}