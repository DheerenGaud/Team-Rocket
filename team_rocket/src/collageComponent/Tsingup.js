import React from 'react'
import "../style/addtecher.css"
import {useState} from "react"
import { useParams ,useNavigate } from 'react-router-dom'
import {techerExist,addTeacherContent} from "../Components/api/collage"

export default function Teacherslogin() {
    //lode data

	const [teacher,setTeacher]=useState({
		Uname:"",
		email:"",
		experiance:-1,
		gender:"",
		password:"",
		rpassword:"",
		qualification:"",
		profilePic:"",
		department:""
	  }) 
        const navigate=useNavigate()
	  const imgUplode = (e)=>{
		setTeacher({...teacher,profilePic:e.target.files[0]})
	  }
	  const {id}=useParams();
	  const handleChange=(e)=>{
		   const {name,value}=e.target;
		   setTeacher({...teacher,[name]:value})
	  }
	  const handleClick= async(event)=>{
		event.preventDefault();
		const data = await techerExist(id,teacher)
		const x= data.data.find((element)=>{
             return (teacher.email==element.email)
		 })
		 if(x===undefined){
			navigate(`/collage/${id}/teacher/${x.data.teachers}`)
		 }
		 else{
			const data = await addTeacherContent(id,teacher)
			navigate(`/collage/${id}/tlogin`)
			console.log(data)
		 }
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
						<input type="text" name="Uname"  onChange={handleChange} placeholder="Enter your name" class="form-control" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label id="email-label" for="email">Email</label>
						<input type="email" name="email" id="email" onChange={handleChange} placeholder="Enter your email" class="form-control" required/>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label id="number-label" for="number">Experiance</label>
						<input type="text" name="experiance" onChange={handleChange} id="number" min="10" max="99" class="form-control" placeholder="Age" />
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label>Gender</label>
						<select id="dropdown" name="gender" onChange={handleChange} class="form-control" required>
							<option disabled selected value>Select</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label id="number-label" for="number">Qualification</label>
						<input type="text" name="qualification" onChange={handleChange} id="number" min="10" max="99" class="form-control" placeholder="Qualification" />
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label>Subject</label>
						<select id="dropdown" onChange={handleChange} name="role" class="form-control" required>
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
				<div class="col-md-6">
					<div class="form-group">
						<label id="number-label" for="number">Img</label>
						<input type="file" onChange={imgUplode} name="profilePic" id="" min="10" max="99" class="form-control" placeholder="img" />
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label id="number-label" for="number">department</label>
						<input type="text" onChange={handleChange} name="department" id="" min="10" max="99" class="form-control" placeholder="department" />
					</div>
				</div>			
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label id="name-label" for="name">Password</label>
						<input type="text" onChange={handleChange} name="password" id="name" placeholder="Enter your Password" class="form-control" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label id="email-label" for="email">Confirm password</label>
						<input type="text" onChange={handleChange} name="rpassword" id="email" placeholder="Enter your Confirm password" class="form-control" required/>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-4">
					<button type="submit" id="submit" onClick={handleClick} class="btn btn-primary btn-block">Submit</button>
				</div>
			</div>
		</form>
	   </div>	
     </div>
    </div>
  )
}