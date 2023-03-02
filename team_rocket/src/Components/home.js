import { useSelect } from "@mui/base"
import { Button } from "@mui/material"
import {Link,useNavigate} from "react-router-dom"
import "../style/home.css"
import "../style/theam.css"
import Footer from "./footer.js"
export default () => {
 
  const navigate=useNavigate();

  const handleClick = (e)=>{
   navigate(`/${e.target.name}/BALogin`)
  }
    
     return(
       <>




<div>
  <nav class="navbar bg-light   position-fixed w-100"  >
    <div class="container-fluid d-flex justify-content-between align-items-center">
        <div>
            <a href="index.html">
                <img src="/img/teamlogo.jpg" alt="" style={{width: '5rem',}}/>
            </a>
        </div>
        <div class=" ">
        <ul class="navbar nav border-0 shadow-0   ">
            <li class="nav-item px-2">
                <a href="#home"
                 class="nav-link text-dark links" >Home</a>
            </li>
              
            <li class="nav-item px-2">
                <a class="nav-link text-dark  links " href="#info"  >About As</a>
            </li>
            <li class="nav-item px-2">
                <a class="nav-link text-dark links " href="#login" >Domains</a>
            </li>
            <li class="nav-item px-2">
                <a class="nav-link text-dark links " href="#contact" >Contact</a>
            </li>
          
        </ul>
    </div>
    </div>
</nav>

</div>



<div class="  mt-5">
  <div class="container" id="home">
  <div class=" row header w-100 justify-content-md-center align-items-md-center Homepage">
    <div class="col-12 col-lg-6  d-none d-md-block">
      <h4> Move Fast</h4>
      <h3>Break Things</h3>
      <h1 class="display-1 fw-semibold text-blue">Learn More</h1>
      <p class="border-start border-3 border-primary col-11 col-lg-8 px-3"> 
        <p>You can able to access various courses</p>
        <p>Provide the Technical knowledge about Agriculture.</p>
        <p>Makes aware about the online Bank Frauds.</p>
        <p>Manage your school website.</p>

       </p>
      <button routerLink="/contact" class="btn bg-blue rounded-0 text-white mt-3">Contact</button>
    </div>

    <div class="col-12 col-lg-6 position-relative terminal-div  ">
      <div class="pattern-div" >
      <div class="pattern1"></div>
      <div class="pattern3"></div>
      <div class="pattern2"></div>
    </div>
    <div class="overflow-hidden">

    <div class="terminal rounded-4 ">

          <div class=" d-flex justify-content-start align-items-center p-2 border-bottom border-2">
            <div class="bg-danger terminal-btn"></div>
            <div class="bg-warning terminal-btn ms-2"></div>
            <div class="bg-success terminal-btn ms-2"></div>
          </div>
          <div class="terminal-content p-3 " >
            <p class="terminal-line1">Team Rocket <b> Welcome To Our PlatForm</b></p>
            <p class="terminal-line2"> Have a Quetion  in your mind?  </p>
            <p class="terminal-line3">Move Fast Breck Think </p>
            <p class="terminal-line4">Online study</p>
            <p class="terminal-line4">Agricuture</p>
            <p class="terminal-line4">Banking</p>
            <p class="terminal-line4">School Management</p>
            
      
        </div>
        </div>
      <div class="Bank rounded d-flex justify-content-center align-items-center">
        <i class="bi bi-bank fs-1 text-white "></i>
      </div>
      <div class="Education rounded d-flex justify-content-center align-items-center">
       
        <i class="fa-sharp fa-solid fa-school fs-1 text-white"></i>
      </div>
      <div class="agriculture d-none rounded d-md-flex justify-content-center align-items-center">
        <i class="fa-solid fa-tractor fs-1 text-white"></i>
      </div>

    </div>
    </div>

    <div class="col-12 d-md-none text-center mb-5 w-100">
      <p>We Create</p>
      <h3 class="">Websites For</h3>
      <h1 class="display-1 display-font my-2 fw-bolder text-blue">Professionals</h1>
      <p class="text-xs">Accurate data, a customer-centric approach, and privacy by design make AppsFlyer the attribution platform of choice for the world’s leading brands</p>
      <button class="w-100 btn bg-blue text-white my-3">Contact</button>
    </div>


</div>
</div>



<div id="info" class="margin-between pt-4" >
<div class="count my-3  p-lg-5 p-3 mt-5 mb-5">
  <div class="container" >
    <div class="row d-flex justify-content-center">
      <div class="col-5 col-md-2 p-2 mx-5 rounded text-blue border-blue count-card text-center ">
       
        <p><i class="bi bi-clock-fill fs-3"></i></p>
        <p class="mt-1 fs-3 fw-bold">60000+</p>
        <h4 class="fs-3  fw-bold">Hour content</h4>
      </div>
      <div class="col-5 col-md-2 p-2 mx-5 rounded border-blue   text-blue   count-card text-center">
       <p><i class="bi bi-people-fill fs-3"></i></p>
        <p class="mt-1 fs-3  fw-bold ">20000+</p>
        <h4 class="fs-3 fw-bold ">Student</h4>
      </div>
      
      <div class="col-5 col-md-2 p-2 mx-5 rounded  border-blue text-blue  count-card text-center ">
       
        <p><i class="bi bi-globe-central-south-asia fs-3"></i></p>
        <p class="mt-1 fs-3 fw-bold ">87+</p>
        <h4 class="fs-3 fw-bold text-blue">Teachers</h4>
      </div>
    </div>
  </div>
</div>



<div class=" d-flex justify-content-center mt-5 pt-5" >

  <div class="text-center col-5  pt-5" >
   <h1 class="fw-bold  text-black" style={{fontSize:'4rem'}}>Our Motive</h1>
   <p className="fs-4">is to make aware all the rural people about the education and the bank frauds which are going in today's world along with the new agriculture technology to increase yeild of crops.</p>
  </div>

 </div> 
</div>









  <div class="d-flex gap-5 justify-content-center margin-between pt-5 mt-5" id="login" >
   
    <div class=" mx-5 mt-5" style={{width: '18rem',}}>
      <img src="img/img1.jpg" class="card-img-top rounded" alt="..."/>
      <div class="card-body text-center mt-2">
        <h2 class="card-title text-black fw-bold">Education</h2>
        <p class="card-text mt-2 text-black">Click on the below button to avail free courses through you can upgrade your skills to next level</p>

        <Link to="/login" class="btn bg-blue text-white mt-2">Click Here</Link>
      </div>
    </div>
    <div class=" mx-5 mt-5" style={{width: '18rem' ,}}>
      <img src="/img/agri2.jpg"  class="card-img-top rounded" alt="..."/>
      <div class="card-body text-center mt-2">
        <h2 class="card-title text-black fw-bold">Agriculture</h2>
        <p class="card-text mt-2 text-black">Click on the below button to avail new technology about agriculture and to develop knowledge of crops.</p>
        {/* <Link to="/BALogin" class="btn bg-blue text-white mt-2">Go somewhere</Link> */}
        <button name="agriculture" class="btn bg-blue text-white mt-2" onClick={handleClick}>Click Here</button>
      </div>
    </div>
    <div class=" mx-5 mt-5" style={{width: '18rem' , height:'5rem'}}>
      <img src="/img/bank5.jpg"  style={{ height:'12rem'}} class="card-img-top rounded" alt="..."/>
      <div class="card-body text-center mt-2">
        <h2 class="card-title text-black fw-bold">Bank</h2>
        <p class="card-text mt-2 text-black">Click on the below to button to avail the videos which are based on online frauds and new rules of banks</p>
        {/* <Link to="/BALogin" class="btn bg-blue text-white mt-2">Go somewhere</Link> */}
        <button name="bank" class="btn bg-blue text-white mt-2" onClick={handleClick}>Click Here</button>
      </div>
    </div>
   
  </div>
  
  <div class="d-flex  bg-blue margin-between" >
  <div class="col-6 d-flex justify-content-center align-items-center mt-5 " >
        <div class="  " >  <img class="our-focus" src="/img/ourfo.jpg" style={{width: '25rem', height:'25rem'}} alt=""/></div>
            
  </div>
  <div class="col-6   " id="contact" style={{marginTop:'120px'}}>

    <h2 class="text-white fs-1 fw-bold">Our Focus</h2>
    <div class=" d-flex gap-3 align-items-center my-5 " >
      <div><i class="fa-solid fa-award fs-1 bg-white p-3 rounded-circle text-blue "></i> </div>
      <div class="text-white fw-semibold"><h4>Online Degree</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos veritatis, delectus quaerat </p>
      </div>
    </div>
    <div class=" d-flex gap-3 align-items-center my-5 " >
      <div><i class="fa-solid fa-file-audio fs-1 bg-white p-3 rounded-circle text-blue"></i> </div>
      <div class="text-white fw-semibold"><h4>Short courses</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos veritatis, delectus quaerat </p>
      </div>
    </div>
    <div class=" d-flex gap-3 align-items-center my-5 " >
      <div><i class="bi bi-person-circle fs-2 bg-white p-3 rounded-circle text-blue"></i> </div>
      <div class="text-white fw-semibold" ><h4>Expert Traning</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos veritatis, delectus quaerat </p>
      </div>
    </div>

  </div>
  
</div>


<div className="container  " >             
      <div className="d-flex gap-3 mt-3 " >
             <div className="col-6 d-flex justify-content-center flex-column   rounded-4 p-5 " > 
             <h1 className="fw-bold text-black" >Education</h1>
                   <p className="text-black fs-5">Education not only develop individual personality it basically strengthens the country power.
It helps country in both terms i.e it increase the literacy rate of country and also we can able to find some brilliant after giving them ample amount of education .</p>
             </div>
             <div className="col-6 text-center  d-flex justify-content-center  align-items-center" > 
                    <img src="/img/edu11.webp" className="rounded-4 p-1" alt="" />
             </div>
        </div>
             
      <div className="d-flex gap-3 mt-3" >
             <div className="col-6 text-center  d-flex justify-content-center  align-items-center" > 
                    <img src="/img/agri1.webp" className="rounded-4 p-1" alt="" />
             </div>
             <div className="col-6 d-flex justify-content-center flex-column    rounded-4 p-5" > 
                   
                   <h1 className="fw-bold text-black" >Agriculture</h1>
                   <p className="text-black fs-5"> Due to the rise in the population of the country, the shortage of food can affect our country.
To avoid this we are focusing on new agriculture techniques through which rural farmers can able to learn new agriculture techniques which will help them to cultivate crops at a faster rate without compromising the quality .</p>
             </div>
        </div>
             
      <div className="d-flex gap-3 mt-3" >
             <div className="col-6 d-flex justify-content-center flex-column   rounded-4 p-5 " > 
             <h1  className="fw-bold text-black" >Banking</h1>
                   <p className="text-black fs-5" >Nowadays the percentage of bank fraud occurring in our country is so high.
And to make aware and literate about this fraud, the website will help rural people.
And through this website, they will get notified about the latest govt schemes.</p>
             </div>
             <div className="col-6 text-center  d-flex justify-content-center  align-items-center p-5 " > 
                    <img src="/img/bankimg.jpg" className="rounded-4 p-1" alt="" />
             </div>
        </div>
    </div>
 
     


<Footer/>


 
</div>








       </>
     )
}
