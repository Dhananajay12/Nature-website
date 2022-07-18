import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbars';
import Home from './Components/Home';
import About from "./Components/About";
import Footer from "./Components/Footer";
import Gallary from "./Components/Gallary";
import Contactus from "./Components/Contactus";
import Blog from "./Components/Blog";
function App() {
  return (
    <>
<div style={{ fontFamily: "League Spartan"}}>

      <BrowserRouter>
      <Navbars/>
        <Routes>
    
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/gallary" element={<Gallary />}/>
          <Route path="/contactus" element={<Contactus />}/>
          <Route path="/blog" element={<Blog/>}/>
   

        </Routes>
<Footer></Footer>
    
      </BrowserRouter>

</div>


    </>



  );
}


export default App;
