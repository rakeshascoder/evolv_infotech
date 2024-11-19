import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import OurService from "./pages/OurService";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Testimonials from "./pages/Testimonials";
import Clints from './pages/Clints'
import GetInTouch from "./pages/GetInTouch";

function App() {
  
  return (
    <>
      <div className="relative mt-0">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourService" element={<OurService />} />
          <Route path="/clints" element={<Clints />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/getINTouch" element={<GetInTouch/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
