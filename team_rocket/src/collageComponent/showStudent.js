
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getCollageData} from "../Components/api/collage"
import "../style/student.css"


export default function Student() {
     
    useEffect(()=>{
        lodeStudent();
    },[])
     const [student,setStudent]=useState([])
      const {id }=useParams()
     const lodeStudent= async()=>{
        const data = await getCollageData({id:id})
        console.log(data.data.students)
        setStudent(data.data.students) 
     }

  return (
    <>
      <div className="container rounded  bg-white py-5 pe-5">
    <div className="h2 font-weight-bold">Students</div>
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    {/* <th scope="col">Date</th> */}
                    <th scope="col">Email</th>
                    <th scope="col">Standard</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
           student.map((element,i)=>(
                   <>  
                <tr className="bg-light-blue fs-5 pt-2 ">
                    <td className="pt-2"> <img src={`http://localhost:8000/public/profilePic/${element.img}`} className="rounded-circle img-cover" style={{height:"4rem",width:"4rem"}} alt=""/>
                        <div className="pl-lg-5 pl-md-3 pl-1 name ps-4">{element.name}</div>
                    </td>
                    <td className="pt-3">{element.email}</td>
                    <td className="pt-3">{element.std}th</td>
                    <td className="pt-3"><span className="fa fa-check pl-3"></span></td>
                    <td className="pt-3"><span className="fa fa-ellipsis-v btn"></span></td>
                </tr>
                <tr id="spacing-row">
                    <td></td>
                </tr>
                       
                    </>
                    ))
                }
            </tbody>
        </table>
    </div>
</div>
</>
  )
}