import "./App.css";

import About from "./Page/About";
import Carers from "./component/Nav/Carers";
import Contact from "./Page/Contact";
import { Route, Routes } from "react-router-dom";
import  Home from'./Page/Home'
import Services from "./Page/Services";
import Projects from "./Page/Projects";


function App() {
  return (
    <Routes>
     
         <Route path="/" exact element={< Home/>} />
         <Route path="/About" element={<About/>} />
         <Route path="/Services" element={<Services/>} />
         <Route path="/Projects" element={ <Projects/>} />
         <Route path="/Carer" element={<Carers/>} />
         <Route path="/Contact" element={<Contact/>} />
        
     </Routes>
     
  );
}

export default App;
