import React, { useEffect, useState } from "react";
import "../styles/Header.css";

function Header({ header, bgColor }) {
  const [colorSelected, setColorSelected] = useState("");

  useEffect(() => {
      setColorSelected(bgColor)
  }, [bgColor]);



  const styleHeader = {
    backgroundColor: colorSelected,
  };

  return (
    <div style={styleHeader} className="Header">
      <h3>{header ? header : "Please select a todo from the list"}</h3>
    </div>
  );
}

export default Header;