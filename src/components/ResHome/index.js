import React, {useState} from "react";
import ResFooter from "../ResFooter";
import ResNavbar from "../ResNavbar";
import ResSidebar from "../ResSidebar";
import Services from "../ResServices";

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