
import "./App.css"
import Team from "./component/Pages/Team";
import About from "./component/Pages/About";
import Contact from "./component/Pages/Contact"
import Blogs from "./component/Pages/Blogs";
import Home from "./component/Pages/Home";
import Services from "./component/Pages/Services";
import Navigation from "./component/navigation";
import { Routes, Route } from "react-router-dom";

function App() {
return (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/about" element={ <About /> } />
      <Route path="/services" element={ <Services /> } />
      <Route path="/team" element={ <Team />} />
      <Route path="/blogs" element={ <Blogs />} />
      <Route path="/contact" element={ <Contact />} />
    </Routes>
    
      
      
    </>
  );
};

export default App
