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