import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import  Home from "./Components/home"
import  Login from "./Components/login"
import  SsinUp from "./Components/sSingUp"
import  CsinUp from "./Components/cSingUp"
import  Tutorials from "./Components/tutorials"

function App() {
  return (
           <Router>
                <Routes>
                  <Route  path="/" element={<Home/>}/>
                  <Route  path="/login" element={<Login/>}/>
                  <Route  path="/Ssingup" element={< SsinUp/>}/>
                  <Route  path="/Csingup" element={< CsinUp/>}/>
                  <Route  path="/tutorial/:id" element={< Tutorials/>}/>
                </Routes>
              
           </Router>
  );
}
export default App;
