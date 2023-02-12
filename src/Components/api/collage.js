import axios from "axios";
const url="http://localhost:8000"

export const newCollage= async(data)=>{
    console.log(data)
    try{
        return await axios.post(`${url}/collage/add`,data)
    }
    catch(err){
          console.log("error is occur in adding user by api")
    }
}