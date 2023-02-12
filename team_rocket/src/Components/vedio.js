import {  Download, Instagram, YouTube,  } from '@mui/icons-material'
import { Button, Paper } from '@mui/material';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import "../style/theam.css"
import {getVedios} from "./api/content"
// import Navbar from './Navbar'

export default  ()=> {
  
    useEffect(()=>{
       lodeContent();
    },[])
    
    const [data,setdata]=useState([])
    const {subId}= useParams();

    const lodeContent= async()=>{
       console.log("subId=> "+subId)
       const content=await getVedios(subId);

       console.log(content.data[0].content)
      
      // console.log(subId) 
      
      for (let i = 0; i < content.data.content[0].length; i++) {
        console.log("lllllll"+content.data.content[i]._id)
        if(content.data.content[i]._id===subId){
          setdata(content.data.content[i].data)
        }
      }
      
      console.log("===========")
      console.log(data)

    }

   const [mylink,setmylink]=useState(1);
    const  Appbar=[
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
        {name:'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi#1'},
      ]  
      const link=[
       {name:'https://www.youtube.com/embed/ER9SspLe4Hg'},
       {name:'https://www.youtube.com/embed/CABs284dEpQ'},
       {name:'https://www.youtube.com/embed/EHTWMpD6S_0'},
       {name:'https://www.youtube.com/embed/pe5ulXojRO8'},
       {name:'https://www.youtube.com/embed/5-V0-y1iP3Q'},
       {name:'https://www.youtube.com/embed/Gl-vOU7ZU9A'},
       {name:'https://www.youtube.com/embed/c9yLh_Uw_7A'},
       {name:'https://www.youtube.com/embed/ER9SspLe4Hg'},
       {name:'https://www.youtube.com/embed/CABs284dEpQ' },
       {name:'https://www.youtube.com/embed/EHTWMpD6S_0'},
       {name:'https://www.youtube.com/embed/pe5ulXojRO8'},
       {name:'https://www.youtube.com/embed/5-V0-y1iP3Q'},
       {name:'https://www.youtube.com/embed/Gl-vOU7ZU9A'},
       {name:'https://www.youtube.com/embed/c9yLh_Uw_7A'},
    ]
      let count=0;
  return (
    <div> 

         <div className="container-fluid main  col-12 bg-white d-flex py-2 px-5 gap-3">
               <div className="left  col-8 py-5  justify-content-center  ">
                <div className='rounded-3'>
                 <iframe className='rounded-3 p-2'  width="950" height="600"  src={link[mylink-1].name} title="YouTube video player" frameborder="12" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
               </div>
               <div className="right border-top col-4 fs-2 text-black font-serif py-3 px-3 bg-white overflow-y-scroll gap-2   d-flex flex-column" style={{height:'90vh'}} data-bs-smooth-scroll="true">
               <div className="home bg-white px-1 h-14  mx-3 my-1 rounded-4 text-l   d-flex   flex-row gap-1 " >
                    <h3 className='text-black text-l  font-serif'>Abcd </h3> 
                </div>
               {
            Appbar.map((data,i)=>
            <Paper elevation={3}>
                     <div className="home bg-white px-1 h-14  mx-3 my-1 rounded-4 text-l   d-flex   flex-row gap-1 " >
                    <Button sx={{py:2}} onClick={()=>{  count=i+1; setmylink(count); }} color='secondary'><YouTube/> <h3 className='text-black text-l  font-serif'>{data.name}</h3><Download/></Button> 
                </div>
            </Paper>
                )
            }
               </div>
         </div>
    </div>
  )
}