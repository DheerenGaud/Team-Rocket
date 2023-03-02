import { Button, TextField, MenuItem,InputLabel,FormControl,Select,FormHelperText} from '@mui/material'
import  { SelectChangeEvent } from '@mui/material/Select';
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
    accridetaion:"",
    found:"",
    age:-1,
    mission:"",
    vision:"",
    logo:""
  })

  const navigate=useNavigate()

  const handleChange =(e)=>{
     setData({...data,[e.target.name]:e.target.value})
  }

  const handleClick= async(event)=>{
    console.log(data)
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
  const imgUplode =(e)=>{
    setData({...data,logo:e.target.files[0]})
  }
  

 

  return (
    <>
    <div>
      <div class="container my-5 px-5">
	<div class="form-wrap">	
		<form id="survey-form">
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						{/* <label id="name-label" >College Name</label> */}
                        
						<label id="name-label" >College Name</label>
						<select id="dropdown" name="Cname" class="form-control" onChange={handleChange} required>
							<option disabled selected value>Select</option>
							<option value="Hindi Primary School">Hindi Primary School</option>
							<option value="Swami Vivekanand College of Engineering">Swami Vivekanand College of Engineering</option>
							<option value="Bharati Vidyapeeth College of Engineering">Bharati Vidyapeeth College of Engineering</option>
							<option value="Fr. Agnel College of Engineering">Fr. Agnel College of Engineering</option>
							<option value="Datta Meghe College of Engineering">Datta Meghe College of Engineering</option>
						</select>


						{/* <input  type="text" name="Cname" id="name"onChange={handleChange} placeholder="Enter your name" class="form-control" required/> */}
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label id="email-label" >Vision</label>
						<input type="email" name="vision" onChange={handleChange} placeholder="Enter  Vision" class="form-control" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label id="name-label" for="name">Accredation</label>
						<input type="text" name="accridetaion" onChange={handleChange} placeholder="Enter Accredation" class="form-control" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label id="email-label" for="email">Found</label>
						<input  name="found"  onChange={handleChange} placeholder=" /_ / " class="form-control" required/>
					</div>
				</div>
			</div>
      <div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label id="number-label" for="number">City</label>
						<input type="City" onChange={handleChange} name="city" id="" min="10" max="99" class="form-control" placeholder="City" />
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label>State</label>
						<select id="dropdown" name="state" class="form-control" onChange={handleChange} required>
							<option disabled selected value>Select</option>
							<option value="Maharashtra">Maharashtra</option>
							<option value="Punjab">Punjab</option>
							<option value="Gujrat">Gujrat</option>
							<option value="Up">Up</option>
							<option value="Bihar">Bihar</option>
						</select>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label id="name-label" for="name">Logo</label>
						<input type="file" name="logo"  onChange={imgUplode} placeholder="" class="form-control"  required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label id="email-label" for="email">Mission</label>
						<input type="text" name="mission"  onChange={handleChange} placeholder="Enter your email" class="form-control" required/>
					</div>
				</div>
			</div>

            <h2>Principle Details</h2>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label id="name-label" for="name">Principle Nmae</label>
						<input type="text" name="Pname"  onChange={handleChange} placeholder="Enter your name" class="form-control" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label id="email-label" for="email">Email</label>
						<input type="email" name="email"  onChange={handleChange} placeholder="Enter your email" class="form-control" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label id="name-label" for="name">Password</label>
						<input type="password" name="password"  onChange={handleChange} placeholder="Enter your password" class="form-control" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label id="email-label" for="email">Confirm Password</label>
						<input type="text" name="Cpassword"  onChange={handleChange} placeholder="Enter your confirm password" class="form-control" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label id="name-label" for="name">Age</label>
						<input type="text" name="age" id="name" onChange={handleChange} placeholder="Enter your age" class="form-control" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label id="email-label" for="email">Qualification</label>
						<input type="text" name="qualification" onChange={handleChange}  placeholder="Enter your qualification" class="form-control" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<button onClick={handleClick}  class="btn btn-primary btn-block">Submit</button>
				</div>
			</div>
		</form>
	   </div>	
     </div>
    </div>
</>
  )
}

