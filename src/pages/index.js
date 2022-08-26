import React, {useState} from "react";
import ResFooter from "../components/ResFooter";
import ResNavbar from "../components/ResNavbar";
import ResSidebar from "../components/ResSidebar";
import Services from "../components/ResServices";
import {useEffect} from 'react';


function ResHome() {
  const [isOpen, setIsOpen] = useState(false);


    const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ResSidebar isOpen={isOpen} toggle={toggle} />
      <ResNavbar toggle={toggle} />
      <Services />
      <ResFooter />
    </>
  );
}

export default ResHome;