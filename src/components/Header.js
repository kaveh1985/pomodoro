import React, { useEffect, useState, useRef } from "react";
import "../styles/Header.css";

function Header({ header, bgColor, timer, booleanTime }) {
  const [colorSelected, setColorSelected] = useState("");
  const [width, setWidth] = useState(0);
  const [animColor, setAnimColor] = useState("");
  const divRef = useRef(null);
  const time = `${timer}s`;

  useEffect(() => {
    const divWidth = divRef.current ? divRef.current.offsetWidth : 0;
    setWidth(divWidth.toString()); // Convert width to a string using toString()

    let pickAnimColor;
    if (bgColor === "#C46464") {
      pickAnimColor = "#CD7B7B";
    } else if (bgColor === "#798A66") {
      pickAnimColor = "#8D9B7D";
    } else if (bgColor === "#4E7579") {
      pickAnimColor = "#688A8D";
    } else {
      pickAnimColor = "";
    }

    setColorSelected(bgColor);
    setAnimColor(pickAnimColor);
  }, [bgColor]);

  //CSS  PART
  const progressiveDivStyle = {
    zIndex: 999,
    position: "absolute",
    height: "70px",
    backgroundColor: booleanTime ? animColor : "",
    animation: booleanTime ? `progress ${time} linear forwards` : "",
    borderRadius: "5px",
  };

  const keyframesStyle = `
    @keyframes progress {
      0% { width: 0; }
      100% { width: ${width}px; }
    }
  `;

  const styleHeader = {
    position: "relative",
    height: "70px",
    backgroundColor: colorSelected,
    borderRadius: "5px",
    marginBottom: "15px",
  };
  //...

  return (
    <div ref={divRef} style={styleHeader}>
      <style>{keyframesStyle}</style>

      <div style={progressiveDivStyle}></div>
      <div className="h3Container">
        <h3>{header ? header : "Please select a todo from the list"}</h3>
      </div>
    </div>
  );
}

export default Header;
