import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import  Home from "./Components/home"
import  Login from "./Components/login"
import  SsinUp from "./Components/sSingUp"
import  CsinUp from "./Components/cSingUp"
import './App.css'
import  NavBar from "./Components/navbar"
import  Vedios from "./Components/vedio"

function App() {
  return (
           <Router>
                <Routes>
                  <Route  path="/" element={<Home/>}/>
                  <Route  path="/login" element={<Login/>}/>
                  <Route  path="/Ssingup" element={< SsinUp/>}/>
                  <Route  path="/Csingup" element={< CsinUp/>}/>
                  <Route  path="/tutorial/:id" element={< NavBar/>}>
                      <Route  path="class/:id" element={< NavBar/>}/>
                      <Route  path="class/:id" element={< NavBar/>}/>
                  </Route>
                  <Route  path="/tutorial/:id/vedios/:subId" element={<Vedios/>}/>
                </Routes>
              
           </Router>
  );
}
export default App;
