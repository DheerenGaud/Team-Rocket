import {BrowserRouter as Router,Routes,Route,useParams} from "react-router-dom";
import  Home from "./Components/home"
import  Login from "./Components/login"
import  SsinUp from "./Components/sSingUp"
import  CsinUp from "./Components/cSingUp"
import BALogin from "./Components/bankAgrLogin"
import BaSinup from "./Components/bankAgrSingup"
import './App.css'
import  NavBar from "./Components/navbar"
import  Vedios from "./Components/vedio"
import  Mcq from "./Components/mcq"
import  Collage from "./Components/collageHomePage"
import DashBord from "./collageComponent/dashbord"
import Student from "./collageComponent/showStudent"
import Teacher from "./collageComponent/showteacher"
import AddTeacher from "./collageComponent/addtechers"
import PLogin from "./collageComponent/plogin"
import TLogin from "./collageComponent/tlogin"
import Tsingup from "./collageComponent/Tsingup"
import CollageDetail from "./collageComponent/collageDetail"
import  TVedios from "./collageComponent/tVedio"


function App() {
   const {id}= useParams();

  return (
           <Router>
                <Routes>
                  <Route  path="/" element={<Home/>}/>
                  <Route  path="/mcq" element={<Mcq/>}/>
                  <Route  path="/login" element={<Login/>}/>
                  <Route  path="/:sector/BALogin" element={<BALogin/>}/>
                  <Route  path="/Ssingup" element={< SsinUp/>}/>
                  <Route  path="/:sector/BASingup" element={< BaSinup/>}/>
                  <Route  path="/Csingup" element={< CsinUp/>}/>
                  <Route  path="/tutorial/:id/" element={< NavBar id={id}/>}/>
                  <Route  path="/:sector/:id/" element={< NavBar id={id}/>}/>
                  <Route  path="/tutorial/:id/vedios/:subId" element={<Vedios/>}/>
                  <Route  path="/:sector/:id/vedios/:subId" element={<Vedios/>}/>
                  <Route  path="/collage/:id" element={<Collage/>}/>
                  <Route path="/collage/:id/dashbord" element={<DashBord/>}>
                        <Route  path="" element={<Student/>} />
                        <Route  path="teacher" element={<Teacher/>} />
                        <Route path="addteacher" element={<AddTeacher/>} />
                        <Route path="editCollage" element={<CollageDetail/>} />       
                  </Route>
                  <Route path="/collage/:id/plogin" element={<PLogin/>}/>
                  <Route path="/collage/:id/tlogin" element={<TLogin/>}/>
                  <Route path="/collage/:id/Tsingup" element={<Tsingup/>}/>
                  <Route path="/collage/:id/teacher/:tId" element={<TVedios/>}/>
                </Routes>
              
           </Router>
  );
}
export default App;
