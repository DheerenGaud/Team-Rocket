import axios from "axios";
const url="http://localhost:8000"

export const newCollage= async(data)=>{
    
     console.log(data)
    const formdata=new FormData();
    formdata.append("Pname",data.Pname);
    formdata.append("logo",data.logo,data.logo.name);
    formdata.append('Cname',data.Cname)
    formdata.append('email',data.email)
    formdata.append('address',data.address)
    formdata.append('password',data.password)
    formdata.append('state',data.state)
    formdata.append('city',data.city)
    formdata.append('qualification',data.qualification)
    formdata.append('accridetaion',data.accridetaion)
    formdata.append('found',data.found)
    formdata.append('age', data.age)
    formdata.append('mission', data.mission)
    formdata.append('vision', data.vision)
    try{
        return await axios.post(`${url}/collage/add`,formdata)
    }
    catch(err){
          console.log("error is occur in adding user by api")
    }
}

export const getCollageData= async(id)=>{
    try{
        return await axios.post(`${url}/collage/find`,id)
    }
    catch(err){
          console.log("error is occur in finding collage data by api")
    }
}
export const addTeachers= async(newTeacher,id)=>{
    try{
        return await axios.post(`${url}/collage/addTeacher`,{id:id,x:newTeacher})
    }
    catch(err){
          console.log("error is occur in finding collage data by api")
    }
}
export const editCollage= async(data,id)=>{
    console.log("------------------")
    console.log(data.image_3)
    const formdata=new FormData();
    
    formdata.append("image_1",data.image_1,data.image_1.name);
    formdata.append("image_2",data.image_2,data.image_2.name);
    formdata.append("image_3",data.image_3,data.image_3.name);
    formdata.append("image_4",data.image_4,data.image_4.name);
    formdata.append("image_5",data.image_5,data.image_5.name);
    formdata.append("image_6",data.image_6,data.image_6.name);
    formdata.append('title_1', data.title_1)
    formdata.append('title_2', data.title_2)
    formdata.append('title_3', data.title_3)
    formdata.append('title_4', data.title_4)
    formdata.append('title_5', data.title_5)
    formdata.append('title_6', data.title_6)
    formdata.append('infradiscription', data.infradiscription)
    formdata.append('achievement', data.achievement)
    formdata.append('id',id)
    try{
        return await axios.post(`${url}/collage/edit`,formdata)
    }
    catch(err){
          console.log("error is occur in finding collage data by api")
    }
}

export const techerExist= async(id,data)=>{
    console.log(data)
    const formdata=new FormData();

    formdata.append("profilePic",data.profilePic,data.profilePic.name);
    formdata.append('Uname',data.Uname)
    formdata.append('email',data.email)
    formdata.append('experiance',data.experiance)
    formdata.append('gender',data.gender)
    formdata.append('password',data.password)
    formdata.append('qualification',data.qualification)
    formdata.append('department',data.department)
    formdata.append('id',id)

    try{
        return await axios.post(`${url}/collage/exist`,formdata)
    }
    catch(err){
          console.log("error is occur in finding collage data by api")
    }
}
export const addTeacherContent= async(id,data)=>{
    console.log(data)
    const formdata=new FormData();
    formdata.append("profilePic",data.profilePic,data.profilePic.name);
    formdata.append('Uname',data.Uname)
    formdata.append('email',data.email)
    formdata.append('experiance',data.experiance)
    formdata.append('gender',data.gender)
    formdata.append('password',data.password)
    formdata.append('qualification',data.qualification)
    formdata.append('department',data.department)
    formdata.append('id',id)

    try{
        return await axios.post(`${url}/collage/addMore`,formdata)
    }
    catch(err){
          console.log("error is occur in finding collage data by api")
    }
}

export const findTeacher= async(id,data)=>{

    try{
        return await axios.post(`${url}/collage/findteacher`,{id:id,data:data})
    }
    catch(err){
          console.log("error is occur in finding collage data by api")
    }
}
export const getTeacher= async(data)=>{

    try{
        return await axios.post(`${url}/collage/getTeacher`,data)
    }
    catch(err){
          console.log("error is occur in finding collage data by api")
    }
}