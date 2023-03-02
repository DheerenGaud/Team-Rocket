
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../style/teachers.css"
import {getCollageData} from "../Components/api/collage"
export default function Teachers() {


    useEffect(()=>{
        lodeStudent();
    },[])
     const [teacher,setTeacher]=useState([])
      const {id }=useParams()
     const lodeStudent= async()=>{
        const data = await getCollageData({id:id})
        console.log(data.data.teachers)
        setTeacher(data.data.teachers) 
     }



    return (
        <div className='bg-white  h-100'>
            <div className="h1 font-weight-bold text-blue py-3 px-2  uppercase">Teachers</div>
            <div className="container mt-3 d-flex  gap-4 flex-wrap">

                {
                    teacher.map((element,i)=>(
                <div className="card p-3" key={i}>
                    <div className="d-flex gap-2 align-items-center">
                        <div className="image h-100">
                            <img   src={`http://localhost:8000/public/profilePic/${element.profilePic}`} className="rounded img-cover" style={{height:"10rem",width:"9rem"}} alt=''  />
                        </div>
                      <div className="ml-3 w-100">
                            <h4 className="mb-0 mt-0 text-blue"> <span>{element.name}</span> </h4>
                           
                            <div className="p-2 mt-2 bg-blue d-flex justify-content-between rounded text-white stats">
                                <div className="d-flex flex-column ">
                                    <span   className="articles fs-4 text-blue">{element.sub}</span>
                                    <span className="number1 text-blue">{element.age}</span>
                                </div>
                               
                                {/* <div className="d-flex flex-column">
                                    <span className="rating text-blue">Rating</span>
                                    <span className="number3 text-blue">8.9</span>
                                </div> */}
                            </div>
                            <div className="button mt-2 d-flex flex-row align-items-center gap-3">
                                <button className="btn btn-sm btn-outline-primary w-100">Add Subjects</button>
                                {/* <button className="btn btn-sm bg-blue text-white w-100 ml-2"></button> */}
                            </div>
                        </div>
                    </div>
                </div> 

                    ))

                }


            </div>
        </div>
    )
}