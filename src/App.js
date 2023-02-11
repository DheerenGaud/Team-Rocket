import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import  Home from "./Components/home"
import  Login from "./Components/login"
import  SinUp from "./Components/singup"

function App() {
  return (
           <Router>
                <Routes>
                  <Route  path="/" element={<Home/>}/>
                  <Route  path="/login" element={<Login/>}/>
                  <Route  path="/singup" element={< SinUp/>}/>
                </Routes>
              
           </Router>
  );
}
export default App;
