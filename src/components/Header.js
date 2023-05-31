import { useEffect, useState } from "react";
import "../styles/Header.css";

function Header({ header }) {
  const [headerText, setHeaderText] = useState(header);

  useEffect(() => {
    setHeaderText(header);
  }, [header]);


  const styleHeader = {
    backgroundColor: '#C46464',
  }


  return (
    <div  style={styleHeader} className="Header">
      <h3>{headerText ? headerText : "Please select a todo from the list"}</h3>
    </div>
  );
}

export default Header;
