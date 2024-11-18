import React from "react";
import Herosection from "../component/Herosection";
import It_solution_service from "../component/It_solution_service";
import Managment from "../component/Managment";
import Our_service from "../component/Our_service";
import Happy_customer from "../component/Happy_customer";
import Clients from "../component/Clients";
import Contacts from "../component/Contacts";
import { AppContext } from "../component/context";

function Home() {

  return (
    <>
        <Herosection />
      
      <It_solution_service />
      <Managment />
      <Our_service />
      <Happy_customer />
      <Clients />

      <Contacts />
    </>
  );
}

export default Home;
