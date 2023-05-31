import React, {Fragment, useState} from "react";
import Header from "./components/Header.js";
import Clock from "./components/Timer.js";
import Menu from "./components/Menu.js";
import Todo from "./components/Todo.js";
import "./styles/App.css"


function App({style}) {
    
      const [assignment, setAssignment] = useState('');

      const handleTask = (item) => {
        setAssignment(item);
      };
    // Ass the App is not aware of the state in toDo component and it only receives item form it and
    // save it in its own var so it can not send the updated item to the Header component and that is 
    // why we created this function in order to let the App know that something changed in the Todo_
    //component
      const handleUpdateHeader = (item) => {
        if (assignment === item) {
          setAssignment('');
        }
      };


      const styleBody = {
        backgroundColor: '#BA4949',
        minHeight: '100vh',
      };
      
      return (
        <div>
          <div style={styleBody}>
            <div className='container'>
              <Header header={assignment} />
              <Menu />
              <Clock />
              <Todo assignment={handleTask} handleUpdateHeader={handleUpdateHeader} />
            </div>
          </div>
        </div>
      );
      
    }      

export default App;


