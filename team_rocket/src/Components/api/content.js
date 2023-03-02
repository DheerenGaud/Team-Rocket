import axios from "axios";
const url="http://localhost:8000"

export const getContent = async()=>{
    try{
        return await axios.get(`${url}/data`)
    }
    catch(err){
          console.log("error is occur in finding data by api")
    }
}

export const getVedios = async(SubId)=>{
        console.log(" value of"+SubId)

    try{
        return await axios.post(`${url}/data/vedios`,{subject:SubId})
    }
    catch(err){
          console.log("error is occur in finding data by api")
    }
}

export const getContentOfsector = async()=>{

    try{
       
        return await axios.get(`${url}/data/dataofSector`)
    }
    catch(err){
          console.log("error is occur in finding getSector data by api")
    }
}
