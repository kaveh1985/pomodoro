import React, { useState } from "react";
import Header from "./components/Header.js";
import Clock from "./components/Timer.js";
import Menu from "./components/Menu.js";
import Todo from "./components/Todo.js";
import "./styles/App.css";

function App({ style }) {
  const [assignment, setAssignment] = useState('');
  const [colorSelected, setColorSelected] = useState({
    minHeight: '100vh',
    backgroundColor: '#BA4949',
    transition: 'background-color 1s'
  });

  const handleTask = (item) => {
    setAssignment(item);
  };

  const handleUpdateHeader = (item) => {
    if (assignment === item) {
      setAssignment('');
    }
  };

 
  const colorShiftMode = (selectItem) => {
      setTimeout(() => {
        setColorSelected({ ...colorSelected, backgroundColor: selectItem });
      }, 100);
  };

  

  return (
    <div>
      <div style={colorSelected}>
        <div className='container'>
          <Header header={assignment} containerColorSelected={colorSelected.backgroundColor}/>
          <Menu colorMode={colorShiftMode} containerColorSelected={colorSelected}/>
          <Clock containerColorSelected={colorSelected}/>
          <Todo assignment={handleTask} handleUpdateHeader={handleUpdateHeader}containerColorSelected={colorSelected} />
        </div>
      </div>
    </div>
  );
}

export default App;

