import "../style/theam"
import Footer from "./footer.js"
export default (params) => {
    return (


        <>
         <div className=" container" >

        <div className="text-blue container bg-blue d-flex p-5  mt-4 " >
       
    <div  className=" col-4 align-middle text-center  d-flex align-items-center ">
      <img className="rounded-circle p-5" src=" /img/collegelogo.png" alt=" " />

    </div>
    <div  className=" col-8   ">
         <div className="bg-white rounded-4 p-4 " >
          <h1 className="fw-bold" >Bharati Vidyapeeth College of Engineering</h1>
          <p className="my-2  fs-5 text-bla" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reiciendis tenetur sint, possimus nemo vero maxime atque similique ad laudantium iste harum placeat iure exercitationem non obcaecati temporibus, doloremque sapiente. </p>
   <div className="mt-5 text-end" >
   <button type="button" class="btn  text-white bg-dark fw-bold"> <i class="bi bi-x-circle me-1"></i> Principal Login</button>
   <button type="button" class="btn ms-3 text-white bg-dark fw-bold"> <i class="bi bi-x-circle me-1"></i> Teacher Login</button>
          </div>

         </div>
    </div>
       
   </div   >
     

  

  


<div className="d-flex my-5 gap-3 " >

        <div id="carouselExampleCaptions" class="carousel slide col-6  ">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/img/Bharati.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/img/Bharati.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/img/Bharati.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>





        <div id="carouselExampleCaptions" class="carousel slide col-6 pe-3 ">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/img/Bharati.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/img/Bharati.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/img/Bharati.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>







</div>
<div className="col-9">
    <h2 className="text-blue" >Welcome to</h2>
    <h1 className="text-blue fw-bold" >Bharati Vidyapeeth</h1>
    <h2 className="text-blue" >A college with a difference!!</h2>
    <p className="text-bla fs-5" >Fr. CRIT. has, within a short span of time, established itself as a leading engineering college in Mumbai University. Though its reputation rests mainly on the high quality, value-based technical education that it imparts, it has to its credit a verdant, well-maintained Campus and extensive facilities. Its location in the vicinity of the holy places of various religious denominations underscores its secular credentials and its philosophy of "Vasudhaiva Kuttumbakam". The college prides on being one of few that has accreditation for all five branches.</p>
</div>
</div>
<Footer/>
</>
);
}
