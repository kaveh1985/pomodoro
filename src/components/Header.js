import React, { useEffect, useState } from "react";
import "../styles/Header.css";

function Header({ header, containerColorSelected }) {
  const [colorSelected, setColorSelected] = useState("");

  useEffect(() => {
    if (containerColorSelected === "#2F5D62") {
      setColorSelected("#4E7579");
    } else if (containerColorSelected === "#61764B") {
      setColorSelected("#798A66");
    } else if (containerColorSelected === "#BA4949") {
      setColorSelected("#C46464");
    }
  }, [containerColorSelected]);


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
