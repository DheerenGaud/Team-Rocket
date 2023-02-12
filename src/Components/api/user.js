import axios from "axios";
const url="http://localhost:8000"

export const newuser= async(data)=>{
    try{
         await axios.post(`${url}/add`,data)
         console.log("useris added by api")
    }
    catch(err){
          console.log("error is occur in adding user by api")
    }
}
export const findUser= async(user)=>{
    try{
        return await axios.post(`${url}/find`,user)
    }
    catch(err){
          console.log("error is occur in finding user by api")
    }
}