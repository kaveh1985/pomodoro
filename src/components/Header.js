import React, { useEffect, useState } from "react";
import "../styles/Header.css";

function Header({ header, bgColor }) {
  const [colorSelected, setColorSelected] = useState("");

  useEffect(() => {
    if (bgColor === "#2F5D62") {
      setColorSelected("#4E7579");
    } if (bgColor === "#61764B") {
      setColorSelected("#798A66");
    } if (bgColor === "#BA4949") {
      setColorSelected("#C46464");
    }
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



// function Header({ header, containerColorSelected }) {
//   useEffect(() => {
//     const colorMapping = {
//       "#2F5D62": "#4E7579",
//       "#61764B": "#798A66",
//       "#BA4949": "#C46464",
//     };
//     const colorSelected = colorMapping[containerColorSelected] || "";

//     document.documentElement.style.setProperty('--color-selected', colorSelected);
//   }, [containerColorSelected]);

//   return (
//     <div className="Header">
//       <h3>{header ? header : "Please select a todo from the list"}</h3>
//     </div>
//   );
// }

// export default Header;