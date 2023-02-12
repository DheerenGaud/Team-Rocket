import {Link} from "react-router-dom"
import "../style/home.css"
import "../style/theam.css"
import Footer from "./footer.js"
export default () => {
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
                <a
                 class="nav-link text-dark links" >Home</a>
            </li>
              
            <li class="nav-item px-2">
                <a class="nav-link text-dark  links " href="#second-part"  >Industry</a>
            </li>
            <li class="nav-item px-2">
                <a class="nav-link text-dark links " >Company</a>
            </li>
            <li class="nav-item px-2">
                <a class="nav-link text-dark links " >Contact</a>
            </li>
          
        </ul>
    </div>
    </div>
</nav>

</div>



<div class="  mt-5">



  <div class="container">
  <div class=" row header w-100 justify-content-md-center align-items-md-center Homepage">
    <div class="col-12 col-lg-6  d-none d-md-block">
      <p> Move Fast</p>
      <h4>Break Things</h4>
      <h1 class="display-1 fw-semibold text-blue">Learn More</h1>
      <p class="border-start border-3 border-primary col-11 col-lg-8 px-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis culpa, numquam at voluptates aliquam, ipsa iure exercitationem nemo quisquam asperiores quae dicta illum quam molestias! </p>
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
            <p class="terminal-line1">X-host : <b> Welcome To Our PlatForm</b></p>
            <p class="terminal-line2"> Have a Quetion  in mind?  </p>
            <p class="terminal-line3">Move Fast Breck Think </p>
            <p class="terminal-line4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
      
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



<div id="second-part" class="margin-between" >
<div class="count my-3  p-lg-5 p-3 mt-5 mb-5">
  <div class="container">
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



<div class=" d-flex justify-content-center mt-5">

  <div class="text-center col-5 " >
   <h1 class="fw-bold">Our Motive</h1>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, sunt vel maxime, eos iure a nemo alias voluptatibus iusto aut rem expedita pariatur quasi animi harum adipisci reiciendis maiores molestiae.</p>
  </div>

 </div> 
</div>









  <div class="d-flex gap-5 justify-content-center margin-between" >
   
    <div class=" mx-5" style={{width: '18rem',}}>
      <img src="img/img1.jpg" class="card-img-top rounded" alt="..."/>
      <div class="card-body text-center mt-2">
        <h2 class="card-title">Education</h2>
        <p class="card-text mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/login" class="btn bg-blue text-white mt-2">Go somewhere</Link>
      </div>
    </div>
    <div class=" mx-5" style={{width: '18rem' ,}}>
      <img src="/img/agri2.jpg"  class="card-img-top rounded" alt="..."/>
      <div class="card-body text-center mt-2">
        <h2 class="card-title">Agriculture</h2>
        <p class="card-text mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/login" class="btn bg-blue text-white mt-2">Go somewhere</Link>
      </div>
    </div>
    <div class=" mx-5" style={{width: '18rem' , height:'5rem'}}>
      <img src="/img/bank5.jpg"  style={{ height:'12rem'}} class="card-img-top rounded" alt="..."/>
      <div class="card-body text-center mt-2">
        <h2 class="card-title">Bank</h2>
        <p class="card-text mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/login" class="btn bg-blue text-white mt-2">Go somewhere</Link>
      </div>
    </div>
   
  </div>
  





  <div class="d-flex  bg-blue margin-between" >
  <div class="col-6 d-flex justify-content-center align-items-center mt-5 " >
        <div class="  " >  <img class="our-focus" src="/img/ourfo.jpg" style={{width: '25rem', height:'25rem'}} alt=""/></div>
          


     
     
  </div>
  <div class="col-6 p-5 " >

    <h2 class="text-white fw-bold">Our Focus</h2>
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
             <div className="col-6 d-flex justify-content-center flex-column border  rounded-4 p-5 " > 
             <h1 className="fw-bold" >Education</h1>
                   <p className="text-bla fs-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta, ullam ipsa doloribus accusamus sint nulla quos libero distinctio, numquam modi saepe vero explicabo. Illum incidunt ad ducimus sit? Nam!</p>
             </div>
             <div className="col-6 text-center  d-flex justify-content-center  align-items-center" > 
                    <img src="/img/edu11.webp" alt="" />
             </div>
        </div>
             
      <div className="d-flex gap-3 mt-3" >
             <div className="col-6 text-center  d-flex justify-content-center  align-items-center" > 
                    <img src="/img/agri1.webp" alt="" />
             </div>
             <div className="col-6 d-flex justify-content-center flex-column  border  rounded-4 p-5" > 
                   
                   <h1 className="fw-bold" >Agriculture</h1>
                   <p className="text-bla fs-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta, ullam ipsa doloribus accusamus sint nulla quos libero distinctio, numquam modi saepe vero explicabo. Illum incidunt ad ducimus sit? Nam!</p>
             </div>
        </div>
             
      <div className="d-flex gap-3 mt-3" >
             <div className="col-6 d-flex justify-content-center flex-column border  rounded-4 p-5 " > 
             <h1  className="fw-bold" >Banking</h1>
                   <p className="text-bla fs-5" > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta, ullam ipsa doloribus accusamus sint nulla quos libero distinctio, numquam modi saepe vero explicabo. Illum incidunt ad ducimus sit? Nam!</p>
             </div>
             <div className="col-6 text-center  d-flex justify-content-center  align-items-center " > 
                    <img src="/img/bank1.jpg" alt="" />
             </div>
        </div>
    </div>
 
     


<Footer/>


 
</div>








       </>
     )
}
