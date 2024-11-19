import React from "react";
import Header from "../component/Header";
import  Contacts  from "../component/Contacts";

function GetInTouch() {
  return (
    <>
      <Header title="Contact Us" about="Get in Touch" span="with Us" />
      <Contacts/>
    </>
  );
}

export default GetInTouch;
