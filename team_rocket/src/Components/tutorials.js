import React, { useState } from "react";
import "../style/tutorial.css";
import "../style/theam.css";
import { useEffect } from "react";
import { getContent ,getContentOfsector} from "./api/content";
import { useNavigate } from "react-router-dom";
import Footer from "./footer.js"

export default (props) => {
  useEffect(() => {
    lodeData();
  }, []);

  useEffect( () => {
    lodeData();
 },[props.search])

  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const navigate= useNavigate()

  const lodeData = async () => {
    
    if(props.sector=="bank"||props.sector=="agriculture"){
      console.log("Sector section ==>"+props.sector)
        if(props.search===""){
        console.log("empty")
        const content = await getContentOfsector();
        console.log(content.data[0].sector[0].content)
        if(props.sector=="agriculture"){
             setData(content.data[0].sector[0].content)
        }
        else{
          setData(content.data[0].sector[1].content)
        }
        }else{
          console.log("Not empty")
          console.log(props.search)
          for (let index = 0; index <tempData.length ; index++) {
          if(tempData[index].subjet==props.search){
             setData([tempData[index]])
          }
         }  
        }
    }
    
    else{
    if(props.search===""){
      const content = await getContent();
      console.log(content.data[0].content)
      setData(content.data[0].content);
      setTempData(content.data[0].content)
    }
    else{
       console.log("Not empty")
       console.log(props.search)
       for (let index = 0; index <tempData.length ; index++) {
       if(tempData[index].subjet==props.search){
          setData([tempData[index]])
       }
      }
    }
  }
  };

  const handleClick=(e)=>{
     console.log(e.target.name)
     navigate(`vedios/${e.target.name}`)
  }

  return (
    <>
      <div className="tutorial">
        {data.map((ele) => 
               (
            <div key={ele._id} className="t-card d-flex flex-column justify-content-center align-items-center gap-3 py-3">
              <div className="t-card-item d-flex align-self-center  justify-content-center">
                <img src="/img/java.webp" alt="" />
              </div>
              <div  className="text-center" >
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
