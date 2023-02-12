import { useState } from "react";
import { Link } from "react-router-dom";
import  Tutorials from "./tutorials"

export default (params) => {
    
  const [search,setSearch]=useState("")
  const [value,setValue]=useState("")
  const  handleHange =(e)=>{
    setSearch(e.target.value);
    // console.log(search)
  }
  const  handleClick =(e)=>{
 
    setValue(search)
    }

  return(
    <>
    <nav class="navbar courses navbar-expand-lg bg-lblue  text-white">
    <div class="container-fluid ">
      <a class="navbar-brand text-white fs-3 " href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active text-white fs-4" aria-current="page" href="#">All</Link>
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
        <form class="d-flex" role="search">
          <input class="form-control me-2" name="search" type="search" value={search} onChange={handleHange} placeholder="eg. 12 " aria-label="Search"/>
          <button class="btn btn-outline-primary text-white fs-5" type="button" onClick={handleClick}>Search</button>
        </form>
      </div>
    </div>
   </nav>
     <Tutorials  search={value}/>
    </>
  );
}
