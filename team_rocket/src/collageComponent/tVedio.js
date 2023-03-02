import {  Download, Instagram, YouTube,  } from '@mui/icons-material'
import { Button, Paper ,AppBar ,Menu ,MenuItem } from '@mui/material';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import "../style/theam.css"
import Footer from "../Components/footer"
import {Link} from 'react-router-dom'
import { getContent } from "../Components/api/content";
import {getTeacher} from "../Components/api/collage"
// import Navbar from './Navbar'

export default  ()=> {
  
    useEffect(()=>{
       lodeContent();
    },[])
    
    const [data,setData]=useState([])
    const [subject,setSubject]=useState("")
    const {id,tId}= useParams();
    const [vedio,setVedio]=useState("");
    const [userinfo,setUserinfo]=useState({
      name:"",
      img:""
    })
    
    const lodeContent= async()=>{
        console.log(id)
        const y=await getTeacher({id:id,tId:tId})
        const x=await getContent()
        
        const teacher = y.data.teachers.find((element) => {
          
            return element._id === tId;
        });
        // console.log(x.data[0].content)
          const sub=teacher.sub
         const SubContent= x.data[0].content.find((element)=>{
           return element.subjet==sub
          })

          setSubject(sub)
          setData(SubContent.data)
          console.log(SubContent.data)
          setVedio(SubContent.data[0].vedio)

        //   const SubjectContent = x.data.teachers.find((element) => {
        //     return element._id === tId;
        //   });
          
         

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
      const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handlClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <div> 
     

    <nav class="navbar courses navbar-expand-lg bg-lblue  text-white">
    <div class="container-fluid ">
       {/* <span> <img src={`http://localhost:8000/public/profilePic/${userinfo.img}`} alt="img Not found" /> <h2>{userinfo.name}</h2></span>  */}
       
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <img src="/img/teamlogo.jpg" className='rounded-3' href="#" style={{width:"10rem"}} alt="" />
          </li>
          <li class="nav-item">
          <Link class="nav-link text-white fs-4" href="#">All</Link>
           {/* <Link class="nav-link active text-white fs-4" aria-current="page" to={`/tutorial/${id}/all`}>All</Link> */}
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white fs-4" href="#">Programing</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white fs-4" aria-current="page" href="#">Devlopment</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white fs-4" href="#">Link</Link>
          </li>
         
        </ul>
        {/* <span> <img src={`http://localhost:8000/public/profilePic/${userinfo.img}`} alt="img Not found" /> <h2>{userinfo.name}</h2></span>  */}
        {/* <span> <img src='/img/ourfo.jpg' alt="img Not found" style={{ height:"60px",width:"60px" }}   className="ms-2 rounded-circle"  /> <h2>{userinfo.name}</h2></span>  */}
        <Button id="basic-button"
           variant='text'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handlClick}
      >
       <img style={{ height:"60px",width:"60px" }} data-toggle="modal" data-target="#orangeModalSubscription" className="rounded-circle" src='/img/ourfo.jpg' alt="img Not found" />
      </Button >
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{py:5}}
        >
        <Paper></Paper>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
         
      </div>
      
    </div>
   </nav>

    
         <div className="container-fluid   col-12 bg-white d-flex py-2 px-5 gap-3">
               <div className="left  col-8 py-5  justify-content-center  ">
                <div className='rounded-3 main'>
                 <iframe className='rounded-3 p-2'  width="950" height="600"  src={vedio} title="YouTube video player" frameborder="12" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
             

             {/* ######### */}
            {/* ######### */}
            <div className='mt-5'>
              <h2 className='fw-bold text-black' >About This Content</h2>
              <p className='fs-4'>Programming is a way to talk to computers. A language like Hindi, English or Bengali can be used to talk to a human but for computers we need straightforward instructions.</p>
              <h4 className=' text-black fw-semibold fs-4 mt-2'>Computer is Dumb!</h4>
              <p className='fs-4'>When was the last time you ordered some cereal and got DVDs of Serial?</p>
              <p className='fs-4 mt-2'>Programming is the act of constructing a program, a set of precise instructions telling a computer what to do.</p>
               
               <h3 className='fw-bold text-black mt-4' >What is EcmaScript?</h3>
               <ul className=' text-black fs-5' >
                <li  >- ECMAScript is a standard on which JavaScript is based!</li>
                <li>- It was created to ensure that different documents on JavaScript are actually talking about the same language.</li>
                <li>- JavaScript and ECMAScript can almost always be used interchangeably. JavaScript is very literal in what it allows.</li>
               </ul>   
             </div>
             
              
              <div  className='col-md-10 mt-4' >
          <label id="name-label" className='fs-3 fw-bold text-blue ' for="name">Comment</label>
          <textarea  type="text"  id="name"  placeholder="Enter Comment here..." class="form-control fs-4 " required/>
          </div>
          <div className='mt-3' >
          <button type="button" class="btn btn-primary bg-blue"> Send </button>
          </div>
            
                   {/* ############# */}

               </div>
               <div className="right border-top col-4 fs-2 text-black font-serif py-3 px-3 bg-white overflow-y-scroll gap-2   d-flex flex-column" style={{height:'90vh'}} data-bs-smooth-scroll="true">
               <div className="home bg-white px-1 h-14  mx-3 my-1 rounded-4 text-l   d-flex   flex-row gap-1 " >
                    <h1 className='text-black  font-serif'>{subject}</h1> 
                </div>
               {
            data.map((data,i)=>
            <Paper elevation={3} key={i}>
                     <div className="home bg-white px-1 h-14  mx-3 my-1 rounded-4 text-l   d-flex   flex-row gap-1 " >
                    <Button sx={{py:2}} onClick={()=>{ setVedio(data.vedio)}} color='secondary'><YouTube/><h3 className='text-black text-l  font-serif'>{data.topic}</h3><Download/></Button> 
                </div>
            </Paper>
                )
            }
               </div>
         </div>
         <Footer/>
    </div>
  )
}