
import React from 'react'
import "../style/tutorial.css"
import "../style/theam.css"
import { useEffect } from 'react'
import {getContent} from './api/content'
import NavBar from "./navbar"

export default () =>{

    useEffect(()=>{
        lodeData()
    },[])

    const lodeData = async()=>{
      const content= await getContent();
      console.log(content.data)
    }
    
  return (

    <>
    
     <NavBar/>

    <div className="tutorial">       
        <div className="t-card d-flex flex-column justify-content-center align-items-center gap-3 py-3">
            <div className="t-card-item d-flex align-self-center  justify-content-center">
                <img src='/img/java.webp' alt=""/>
              
            </div>
            <div>
                <h2 >C Language</h2>
            </div>
            <div>
                <button >start watching</button>
            </div>
        </div>
        <div className="t-card d-flex flex-column justify-content-center align-items-center gap-3 py-3">
            <div className="t-card-item d-flex align-self-center  justify-content-center">
            <img src='/img/java.webp' alt=""/>
            </div>
            <div>
                <h2 >C++ Tutorial</h2>
            </div>
            <div>
                <button >start watching</button>
            </div>
        </div>
        <div className="t-card d-flex flex-column justify-content-center align-items-center gap-3 py-3">
            <div className="t-card-item d-flex align-self-center  justify-content-center">
            <img src='/img/java.webp' alt=""/>
            </div>
            <div>
                <h2 >C++ Tutorial</h2>
            </div>
            <div>
                <button >start watching</button>
            </div>
        </div>
        <div className="t-card d-flex flex-column justify-content-center align-items-center gap-3 py-3">
            <div className="t-card-item d-flex align-self-center  justify-content-center">
            <img src='/img/java.webp' alt=""/>
            </div>
            <div>
                <h2 >C++ Tutorial</h2>
            </div>
            <div>
                <button >start watching</button>
            </div>
        </div>
        <div className="t-card d-flex flex-column justify-content-center align-items-center gap-3 py-3">
            <div className="t-card-item d-flex align-self-center  justify-content-center">
            <img src='/img/java.webp' alt=""/>
            </div>
            <div>
                <h2 >C++ Tutorial</h2>
            </div>
            <div>
                <button >start watching</button>
            </div>
        </div>
        <div className="t-card d-flex flex-column justify-content-center align-items-center gap-3 py-3">
            <div className="t-card-item d-flex align-self-center  justify-content-center">
            <img src='/img/java.webp' alt=""/>
            </div>
            <div>
                <h2 >C++ Tutorial</h2>
            </div>
            <div>
                <button >start watching</button>
            </div>
        </div>
    </div>
    </>
  )
}