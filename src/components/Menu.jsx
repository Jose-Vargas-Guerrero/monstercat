import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import './Menu.css'





function Menu() {
    const [hide, setHide] = useState(true)
    
    const handleHide =() => {
        setHide(!hide)
    }


  return (
    <>
      <i onClick={handleHide} class="fa-solid fa-bars"></i>
      <Dropdown handlehide={handleHide} state={hide}/>
    </>
  );
}

export default Menu;
