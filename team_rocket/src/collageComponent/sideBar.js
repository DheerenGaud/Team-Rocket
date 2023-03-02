import React from 'react'
import "../style/theam.css"
import { Button } from '@mui/material'
import {Link, NavLink, Outlet, useParams} from "react-router-dom"
export default function Dashbord(props) {
    
    const {id}=useParams()

  return (
<div className="col-3">
<div className="Dashbord  my-2">
    <div className="details bg-blue rounded-4 d-flex align-items-center flex-column  ">
        <div className="img my-2">
            <img src={`http://localhost:8000/public/profilePic/${props.img}`} className='rounded-circle img-cover' style={{height:150}} alt=""/>
        </div>
        <div className="name fs-4 text-white my-2">{props.Pname}</div>
    </div>
    <div className="naviagation my-2 bg-blue rounded-3 d-flex flex-column " style={{height:"67vh"}} >
        <div className='border-bottom'>
       <NavLink to={`/collage/${id}/dashbord/`}><Button variant='contained'sx={{py:3,fontSize:16,backgroundColor:'#794BFF','&:hover':{backgroundColor: '#A277FF'}}} fullWidth disableElevation>Show Students</Button></NavLink>
        </div>
        <div className='border-bottom'>
       <NavLink to={`/collage/${id}/dashbord/editCollage`} activeclassName='active'><Button variant='contained'sx={{py:3,fontSize:16,backgroundColor:'#794BFF','&:hover':{backgroundColor: '#A277FF'}}} fullWidth disableElevation>College Details</Button></NavLink>
        </div>
        <div className='border-bottom'>
        <NavLink to={`/collage/${id}/dashbord/teacher`}><Button variant='contained'sx={{py:3,fontSize:16,backgroundColor:'#794BFF','&:hover':{backgroundColor: '#A277FF'}}} fullWidth disableElevation>Show Teachers</Button></NavLink>
        </div>
        <div className='border-bottom'>
        <NavLink to={`/collage/${id}/dashbord/addteacher`}><Button variant='contained'sx={{py:3,fontSize:16,backgroundColor:'#794BFF','&:hover':{backgroundColor: '#A277FF'}}} fullWidth disableElevation>Add Teachers</Button></NavLink>
        </div>
       
        <div className=''>
       <Button component={Link} to={`/`} variant='contained'sx={{py:3,fontSize:16,backgroundColor:'#794BFF','&:hover':{backgroundColor: '#A277FF'}}} fullWidth disableElevation>Logout</Button>
        </div>   
    </div>
</div>
</div>
)
}