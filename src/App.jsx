// import { useState } from 'react'
import './App.css'
import Nav from './component/Nav'
import Herosection from './component/Herosection'
import It_solution_service from './component/It_solution_service'
import Managment from './component/Managment'
import Our_service from './component/Our_service'
import Happy_customer from './component/Happy_customer'
import Faqs from './component/Faqs'
import Clients from './component/Clients'
import Footer from './component/Footer'
import { useRef } from 'react'

function App() {
  const heroRef = useRef(null);
  const serviceRef = useRef(null);
  const managementRef = useRef(null);
  const clientsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Nav scrollToSection={scrollToSection} refs={{ heroRef, serviceRef, managementRef, clientsRef }} />
      <div ref={heroRef}>
        <Herosection />
      </div>
      <div ref={serviceRef}>
        <It_solution_service />
      </div>
      <div ref={managementRef}>
        <Managment />
      </div>
      <Our_service />
      <Happy_customer />
      <div ref={clientsRef}>
        <Clients />
      </div>
      <Footer scrollToSection={scrollToSection} refs={{ heroRef, serviceRef, managementRef, clientsRef }} />
    </>
  );
}

export default App;