import React, { useState } from "react";
import Menu from "./components/Menu.js";
import "./styles/App.css";

function App() {
  // const [assignment, setAssignment] = useState('');
  const [colorBackground, setColorBackground] = useState('#BA4949')
  const style =  {
            minHeight: '100vh',
            backgroundColor: colorBackground ,
            transition: 'background-color 1s',
           };
 

  // const handleTask = (item) => {
  //   setAssignment(item);
  // };

  // This method is passed to the Menu and get back here save it and then its value
  // sent to the header through menu component to update its current value!
  // const handleUpdateHeader = (item) => {
  //   if (assignment === item) {
  //     setAssignment('');
  //   }
  // };

  const pageBgColor = (color) => {
         setColorBackground(color)
  }



  return (
    <div>
      <div style={style}>
        <div className='container'>
          <Menu pageBgColor={pageBgColor}/>
        </div>
      </div>
    </div>
  );
}

export default App;



