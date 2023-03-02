import axios from "axios";
const url="http://localhost:8000"

export const newuser= async(data)=>{
    const formdata=new FormData();
    formdata.append("profilePic",data.profilePic,data.profilePic.name);
    formdata.append('Fname',data.Fname)
    formdata.append('Lname',data.Lname)
    formdata.append('password',data.password)
    formdata.append('email',data.email)
    formdata.append('collage',data.collage)
    formdata.append('standard',data.standard)

    try{
         await axios.post(`${url}/add`,formdata)
        //  await axios.post(`${url}/add`,data)
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
export const findUserByID= async(id)=>{
    console.log(id)
    try{
        return await axios.post(`${url}/findById`,id)
    }
    catch(err){
          console.log("error is occur in finding user by api")
    }
}