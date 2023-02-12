import React, { useState } from "react";
import "../style/tutorial.css";
import "../style/theam.css";
import { useEffect } from "react";
import { getContent ,getOneContent} from "./api/content";
import { useNavigate } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer.js"

export default (props) => {
  useEffect(() => {
    lodeData();
  }, []);

//   useEffect( () => {
//     lodeData();
//  },[props.search])

  const [data, setData] = useState([]);
  const navigate= useNavigate()

  const lodeData = async () => {
    // if(props.search===""){
    const content = await getContent();
    setData(content.data[0].content);
    // }
    // else{
    //     navigate(`class/${props.search}`)
    //  const v2= await getOneContent(props.search);
    // }
  };

  const handleClick=(e)=>{
     console.log(e.target.name)
     navigate(`vedios/${e.target.name}`)
  }

  return (
    <>
      <div className="tutorial">
        {data.map((ele,index) => 
               (
            <div key={ele._id} className="t-card d-flex flex-column justify-content-center align-items-center gap-3 py-3">
              <div className="t-card-item d-flex align-self-center  justify-content-center">
                <img src="/img/java.webp" alt="" />
              </div>
              <div>
                <h2>{ele.subjet}</h2>
              </div>
              <div>
                <button name={ele._id} onClick={handleClick}>start watching</button>
              </div>
            </div>
          )
        )}
      </div>
      <Footer/>
    </>
  );
};
