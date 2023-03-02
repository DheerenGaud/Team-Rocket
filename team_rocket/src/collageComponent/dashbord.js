import React, { useEffect, useState } from 'react'
import "../style/theam.css"
import { Button } from '@mui/material'
import {NavLink, Outlet, useParams} from "react-router-dom"
import SideBar from "./sideBar"
import {getCollageData} from "../Components/api/collage"
export default function Dashbord() {
    
  const {id}=useParams()
    useEffect(()=>{
         lodedata();
    },[])
    const [colldata,setColldata]=useState({
      img:"",
      Pname:"",
      techacher:[],
      student:[]
    })
    const lodedata= async()=>{
      const data = await getCollageData({id:id})
      setColldata({img:data.data.logo,Pname:data.data.Pname,techacher:data.data.teachers,student:data.data.student})    
    }
  return (
    <div>
      <div className="container-fluid d-flex  w-100">
          <SideBar img={colldata.img} Pname={colldata.Pname}/>
           <div className="dashbord-right col-10 overflow-y-scroll "style={{height:'100vh'}} data-bs-smooth-scroll="true" >
          <Outlet/>
         </div>
      </div>
    </div>
  )
}