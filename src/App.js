import React, { useState } from "react";
import Header from "./components/Header.js";
import Menu from "./components/Menu.js";
import Todo from "./components/Todo.js";
import "./styles/App.css";

function App() {
  const [assignment, setAssignment] = useState('');
  const [colorSelected, setColorSelected] = useState(
   {
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

  

  return (
    <div>
      <div style={colorSelected}>
        <div className='container'>
          <Menu header={assignment} bgColor={colorSelected.backgroundColor}/>
          <Todo assignment={handleTask} handleUpdateHeader={handleUpdateHeader} />
        </div>
      </div>
    </div>
  );
}

export default App;



