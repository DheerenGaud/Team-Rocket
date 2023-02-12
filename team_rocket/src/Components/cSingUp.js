import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import {newCollage} from "./api/collage"
import {useNavigate} from "react-router-dom"
export default function Signup() {
   
  const [data ,setData]=useState({
    Pname:"",
    Cname:"",
    email:"",
    address:"",
    password:"",
    Cpassword:"",
    state:"",
    city:"",
    qualification:"",
    accridetaion:""

  })

  const navigate=useNavigate()

  const handleChange =(e)=>{
     setData({...data,[e.target.name]:e.target.value})
  }

  const handleClick= async(event)=>{
    event.preventDefault();
    if(data.password===data.Cpassword){
         const info= await newCollage(data);
          const id=info.data._id
          navigate(`/collage/${id}`)
    }
    else{
      console.log("password and r-password differ")
      navigate("/Ssingup")
    }
  }

  return (
  
    <div className=' d-flex justify-content-center gap-5  align-items-center flex-column ' style={{height:'100vh'}} >
        <h1 className='text-success fw-semibold'>Signup</h1>
         
        <div className="d-flex  gap-5">
        <TextField  id="outlined-basic"color="warning" name='Pname' onChange={handleChange} required label="Principal Name" sx={{width:'300px'}} variant="outlined" />
      <TextField id="outlined-basic"color="warning" name='Cname'onChange={handleChange} required label="College Name" sx={{width:'300px'}} fullwidth variant="outlined" />  
        </div>
        <div className="d-flex flex-row gap-5">
        <TextField  id="outlined-basic" color="warning" name='email'onChange={handleChange} required label="Email" sx={{width:'300px'}} variant="outlined" />
      <TextField id="outlined-basic"color="warning"name='address'onChange={handleChange} required label="Addres" sx={{width:'300px'}} fullwidth variant="outlined" />  
        </div>
        <div className="d-flex flex-row gap-5">
        <TextField  id="outlined-basic" color="warning" name='password'onChange={handleChange} required  label="password" sx={{width:'300px'}} variant="outlined" />
      <TextField id="outlined-basic" color="warning" name='state' onChange={handleChange} required label="State" sx={{width:'300px'}} fullwidth variant="outlined" />  
        </div>
        <div className="d-flex flex-row gap-5">
        <TextField  id="outlined-basic" color="warning" onChange={handleChange} name='Cpassword' required label="Confirm password" sx={{width:'300px'}} variant="outlined" />
      <TextField id="outlined-basic" color="warning" onChange={handleChange} required name='city' label="City" sx={{width:'300px'}} fullwidth variant="outlined" />  
        </div>
        <div className="d-flex flex-row gap-5">            
        <TextField  id="outlined-basic" color="warning" onChange={handleChange} required name='qualification' label="Qualification" sx={{width:'300px'}} variant="outlined" />
      <TextField id="outlined-basic" color="warning" onChange={handleChange} required name='accridetaion' label="Accridetaion" sx={{width:'300px'}} fullwidth variant="outlined" />  
        </div>
      <Button variant='contained' color='warning'sx={{width:650,py:2}}  onClick={handleClick} fullWidth>Submit</Button> 
    </div>
  )
}