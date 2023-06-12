import React, { useState } from "react";
import Menu from "./components/Menu.js";
import "./styles/App.css";

function App() {
  const [colorBackground, setColorBackground] = useState('#BA4949')
  const style =  {
            minHeight: '100vh',
            backgroundColor: colorBackground ,
            transition: 'background-color 1s',
           };


  const pageBgColor = (color) => {
         setColorBackground(color)
  }



  return (
    <div className="myDiv" style={style}>
        <div className='container'>
          <Menu pageBgColor={pageBgColor}/>
        </div>
    </div>
  );
}

export default App;



