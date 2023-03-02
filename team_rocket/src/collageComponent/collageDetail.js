import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {getCollageData} from "../Components/api/collage"
import {editCollage} from "../Components/api/collage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    
  
useEffect(()=>{
    lodeData();
},[])

 const [data,setData]=useState({
//   Cname:"",
//   mission:"",
//   vision:"",
//   logo:"",
  image_1:"",
  image_2:"",
  image_3:"",
  image_4:"",
  image_5:"",
  image_6:"",
  title_1:"",
  title_2:"",
  title_3:"",
  title_4:"",
  title_5:"",
  title_6:"",
  infradiscription:"",
  achievement:""
 })
  const {id }=useParams()
 const lodeData= async()=>{
    const data = await getCollageData({id:id})
    console.log(data.data)
    setData({
        // Cname:data.data.Cname,mission:data.data.mission,vision:data.data.vision,
         image_1:data.data.collage_info.infraArr[0].photo
       ,image_2:data.data.collage_info.infraArr[1].photo,image_3:data.data.collage_info.infraArr[2].photo,
       image_4:data.data.collage_info.achiArr[0].photo,image_5:data.data.collage_info.achiArr[1].photo,image_6:data.data.collage_info.achiArr[2].photo,
       title_1:data.data.collage_info.infraArr[0].title,title_2:data.data.collage_info.infraArr[1].title,title_3:data.data.collage_info.infraArr[2].title,
       title_4:data.data.collage_info.achiArr[0].title,title_5:data.data.collage_info.achiArr[1].title,title_6:data.data.collage_info.achiArr[2].title
    ,infradiscription:data.data.collage_info.infradiscription,achievement:data.data.collage_info.achievement}) 
 }

 const handleClick =async(event)=>{
    event.preventDefault();
    console.log(data)
    const x= await editCollage(data,id)
    toast.success("Updated Successfully");
 }

 const imgUplode =(e)=>{
    setData({...data,[e.target.name]:e.target.files[0]})
  }
  const handleChange =(e)=>{
    setData({...data,[e.target.name]:e.target.value})
 }


  return (
    <>
    <div>
    <div class="container my-5 px-5">
  <div class="form-wrap">	
      <form id="survey-form">
    
         
    

          <h2 className='fw-semibold'>College infrastructure: </h2>
          <div class="row">
          <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" for="name">Image-1</label>
                      <input type="file" name="image_1" onChange={imgUplode} placeholder="" class="form-control"  required/>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" >title-1</label>
                      <input  type="text" name="title_1" id="name" value={data.title_1} onChange={handleChange} placeholder="Enter your title" class="form-control" required/>
                  </div>
              </div>
          </div>
          <div class="row">
          <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" for="name">Image-2</label>
                      <input type="file" name="image_2" onChange={imgUplode}   placeholder="" class="form-control"  required/>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" >title-2</label>
                      <input  type="text" name="title_2" id="name" value={data.title_2} onChange={handleChange} placeholder="Enter your title" class="form-control" required/>
                  </div>
              </div>
          </div>
          <div class="row">
          <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" for="name">Image-3</label>
                      <input type="file" name="image_3"  onChange={imgUplode}  placeholder="" class="form-control"  required/>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" >title-3</label>
                      <input  type="text" name="title_3" value={data.title_3} id="name" onChange={handleChange} placeholder="Enter your title" class="form-control" required/>
                  </div>
              </div>
          </div>
          <div className='row' >
          <div  className='col-md-10' >
          <label id="name-label" for="name">About Infrastructure</label>
          <textarea  type="text" name="infradiscription" value={data.infradiscription} id="name"onChange={handleChange}  placeholder="Enter here..." class="form-control" required/>
          </div>
          </div>


          <h2 className='fw-semibold mt-4' >College Achievement: </h2>
          <div class="row">
          <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" for="name">Image-1</label>
                      <input type="file" name="image_4"  onChange={imgUplode} placeholder="" class="form-control"  required/>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" >title-1</label>
                      <input  type="text" name="title_4" value={data.title_4} onChange={handleChange} placeholder="Enter your title" class="form-control" required/>
                  </div>
              </div>
          </div>
          <div class="row">
          <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" for="name">Image-2</label>
                      <input type="file" name="image_5" onChange={imgUplode}  placeholder="" class="form-control"  required/>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" >title-2</label>
                      <input  type="text" name="title_5"value={data.title_5}  onChange={handleChange} placeholder="Enter your title" class="form-control" required/>
                  </div>
              </div>
          </div>
          <div class="row">
          <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" for="name">Image-3</label>
                      <input type="file" name="image_6" onChange={imgUplode}   placeholder="" class="form-control"  required/>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <label id="name-label" >title-3</label>
                      <input  type="text" name="title_6" id="name" value={data.title_6} onChange={handleChange} placeholder="Enter your title" class="form-control" required/>
                  </div>
              </div>
          </div>
          
          <div className='row' >
          <div  className='col-md-10' >
          <label id="name-label" for="name">About Achievement</label>
          <textarea  type="text" name="achievement"  onChange={handleChange} value={data.achievement} placeholder="Enter here..." class="form-control" required/>
          </div>
          </div>

          <div class="row mt-4 ">
              <div class="col-md-4">
                  <button onClick={handleClick}  class="btn btn-primary btn-block">Update</button>
              </div>
          </div>
      </form>
     </div>	
   </div>
   <ToastContainer />
  </div>
</>
  )
}