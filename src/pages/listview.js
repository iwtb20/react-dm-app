import React, {useState} from "react";
import ResFooter from "../components/ResFooter";
import ResNavbar from "../components/ResNavbar";
import ResSidebar from "../components/ResSidebar";
import ListView from "../components/ListView"

function ListViewPage() {
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <ResSidebar isOpen={isOpen} toggle={toggle} />
            <ResNavbar toggle={toggle} />
            <ListView />
            <ResFooter />
        </>
    );
}

export default ListViewPage;