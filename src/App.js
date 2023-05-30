import React, {useState} from "react";
import Header from "./components/Header.js";
import Clock from "./components/Timer.js";
import Menu from "./components/Menu.js";
import Todo from "./components/Todo.js";
import "./styles/App.css"


function App() {
    // const [pageColor, setPageColor] = useState(null)
     const [assignement, setAssignment] = useState('')

    const hanldeTask = (item) => {
        setAssignment(item)
    }

    return (
        <div className='container'>
            <Header header={assignement}/>
            <Menu />
            <Clock />
            <Todo assignment={hanldeTask}/>
        </div>
    )
}

export default App;


