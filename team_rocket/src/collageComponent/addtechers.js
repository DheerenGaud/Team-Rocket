import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "../style/addtecher.css"
import {addTeachers} from "../Components/api/collage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Addteachers() {
    
	const [newteacher,setNewteacher]=useState({
		name:"",
		email:"",
		sub:""
	})
	const {id} =useParams()
	const handleChange =(e)=>{
		const {name,value}=e.target;
		setNewteacher({...newteacher,[name]:value})
	}
	const handleClick= async(event)=>{
		
		console.log(newteacher)
		event.preventDefault();
		const data=await addTeachers(newteacher,id);
		toast.success("Teacher Successfully Added");
		console.log(data.data)
	}
    

  return (
    <div>
      <div class="container my-5 px-5">
	<div class="form-wrap">	
		<form id="survey-form">
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label id="name-label" for="name">Name</label>
						<input type="text" name="name"  id="name" onChange={handleChange}  placeholder="Enter your name" class="form-control" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label id="email-label" for="email">Email</label>
						<input type="email" name="email" id="email" onChange={handleChange}  placeholder="Enter your email" class="form-control" required/>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label>Subject</label>
						<select id="dropdown" name="sub" class="form-control" onChange={handleChange} required>
							<option disabled selected value>Select</option>
							<option value="Maths">Maths</option>
							<option value="Python">Python</option>
							<option value="Os">Os</option>
							<option value="Java">java</option>
							<option value="c++">c++</option>
						</select>
					</div>
				</div>
			</div>
				
			
			
			<div class="row">
				<div class="col-md-4">
					<button type="submit" onClick={handleClick} id="submit" class="btn btn-primary btn-block">Submit Survey</button>
				</div>
			</div>
		</form>
	   </div>	
     </div>
	 <ToastContainer />
    </div>
  )
}