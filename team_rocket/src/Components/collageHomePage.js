import "../style/theam.css";
import Footer from "./footer.js";
import { useParams ,useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {getCollageData} from "./api/collage"

export default (props) => {

  const {id}= useParams();
  const navigate=useNavigate()
  useEffect(()=>{
    lodedata()
  },[]) 
   
  const [data,setData]=useState({
    logo:"",
    found:"",
    vision:"",
    mission:"",
    accridetaion:"",
    Cname:""
  })
  const [image,setImage]=useState({
    iamge1:"",
    iamge2:"",
    iamge3:"",
    iamge4:"",
    iamge5:"",
    iamge6:"",
  })
  const [Title,setTitle]=useState({
    title1:"",
    title2:"",
    title3:"",
    title4:"",
    title5:"",
    title6:"",
  })
  const [x,setX]=useState({
    achievement:"",
    infradiscription:""
  })
 
   const lodedata = async()=>{
  
        const content=await getCollageData({id:id});
        console.log(content.data)
        setData({logo:content.data.logo,Cname:content.data.Cname,mission:content.data.mission,vision:content.data.vision,accridetaion:content.data.accridetaion,found:content.data.found})
        
        setImage({iamge1:content.data.collage_info.achiArr[0].photo,
          iamge2:content.data.collage_info.achiArr[1].photo,
          iamge3:content.data.collage_info.achiArr[2].photo,
          iamge3:content.data.collage_info.infraArr[0].photo,
          iamge4:content.data.collage_info.infraArr[1].photo,
          iamge5:content.data.collage_info.infraArr[2].photo,
        })
        setTitle({iamge1:content.data.collage_info.achiArr[0].title,
          iamge2:content.data.collage_info.achiArr[1].title,
          iamge3:content.data.collage_info.achiArr[2].title,
          iamge3:content.data.collage_info.infraArr[0].title,
          iamge4:content.data.collage_info.infraArr[1].title,
          iamge5:content.data.collage_info.infraArr[2].title,
        })
        setX( {infradiscription:content.data.collage_info.infradiscription,achievement:content.data.collage_info.achievement})

      }

   const handleLogin=(e)=>{

    console.log(data)
        if(e.target.name=="Plogin"){
          console.log("plogin>>>>")
            navigate(`/collage/${id}/plogin`)
        }
        else{
          navigate(`/collage/${id}/tlogin`)
        }
   }

  return (
    


    <>
      <div className=" container-fluid px-5">
        <div className="text-blue container-fluid bg-blue d-flex p-5  mt-4 ">
          <div className=" col-4 align-middle text-center  d-flex align-items-center ">
            <img
              className="rounded-circle p-5 img-cover"
              src={`http://localhost:8000/public/profilePic/${data.logo}`}
              alt="img is not found"
              style={{height:"18rem" , width:"22rem"}}
            />
          </div>
          <div className=" col-8   ">
            <div className="bg-white rounded-4 p-4 ">
              <h1 className="fw-bold">
                {data.Cname}
              </h1>

              <div className="fs-4"> 
                <p name="found">Founded : {data.found} </p>
                <p name="vision">Vision :{data.vision}.</p>
                <p name="mision">Mision :{data.mission}.</p>
                <p name="accidation">Accridetaion :{data.accridetaion}</p>
              </div>

              <div className="mt-5 text-end">
                <button
                  type="button"
                  name="Plogin"
                  onClick={handleLogin}
                  class="btn  text-white bg-blue fw-bold"
                >
                  {" "}
                  Principal Login
                </button>
                <button
                  type="button"
                  name="Tlogin"
                  onClick={handleLogin}
                  class="btn ms-3 text-white bg-blue fw-bold"
                  data-tooltip="Copy that link"
                >
                  {" "}
                  Teacher Login
                </button>
              </div>
            </div>
          </div>
        </div>
     <p className="mt-3" > <h3 className="text-black" >Copy like for this website:</h3> <a className="text-primary" data-tooltip="Copy that link" href={`http://localhost:3000/collage/${id}`}> http://localhost:3000/collage/{id} </a></p>
        <div className="text-center mt-3 py-5">
          <h1 className="text-blue fw-bold">Welcome to Our College</h1>
         
          <h2 className="text-blue">A college with a difference!!</h2>
        </div>
        <div>
        <div className="d-flex my-4 gap-3  rounded-3">
          <div id="carouselExampleCaptions" class="carousel slide col-6 p-3 ">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner rounded-3">
              <div class="carousel-item active">
                <img
                  src={`http://localhost:8000/public/profilePic/${image.iamge1}`}
                  class="d-block w-100 img-cover" style={{height:"25rem" , width:"20rem"}}
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>{Title.title1}</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={`http://localhost:8000/public/profilePic/${image.iamge2}`}
                  class="d-block w-100 img-cover" style={{height:"25rem" , width:"20rem"}}
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>{Title.title2}</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={`http://localhost:8000/public/profilePic/${image.iamge3}`}
                  class="d-block w-100 img-cover" style={{height:"25rem" , width:"20rem"}}
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>{Title.title3}</h5>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div className="col-6 p-5">
            <h2 className="text-blue">College Infrasturecture Details</h2>
            <p className="text-bla fs-5 " name="college-info">
             {x.infradiscription}
            </p>
          </div>
        </div>
</div>

    <div>
        <div className="d-flex my-5 gap-3  rounded-3">
          <div className="col-6 p-5">
            <h2 className="text-blue">College Achivements</h2>
            <p className="text-bla fs-5" name="achive-info">
                         {x.achievement}
            </p>
          </div>

          <div id="carouselExampleCaptions1" class="carousel slide col-6 p-3 ">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions1"
                data-bs-slide-to=""
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions1"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions1"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner rounded-3">
              <div class="carousel-item active " >
              <img
                  src={`http://localhost:8000/public/profilePic/${image.iamge4}`}
                  class="d-block w-100 img-cover" style={{height:"28rem" , width:"20rem"}}
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>{Title.title4}</h5>
                </div>
              </div>
              <div class="carousel-item">
              <img
                  src={`http://localhost:8000/public/profilePic/${image.iamge5}`}
                  class="d-block w-100 img-cover" style={{height:"28rem" , width:"20rem"}}
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>{Title.title5}</h5>
                </div>
              </div>
              <div class="carousel-item">
              <img
                  src={`http://localhost:8000/public/profilePic/${image.iamge6}`}
                  class="d-block w-100 img-cover" style={{height:"28rem" , width:"20rem"}}
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>{Title.title6}</h5>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
