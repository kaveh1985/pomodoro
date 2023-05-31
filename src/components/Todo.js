import React, { useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Edit from './Edit';
import Button from './elements/Button'
import "../styles/Todo.css";



const Todo = ({assignment, handleUpdateHeader}) => {

  const [task, setTask] = useState('');
  const [lists, setLists] = useState([]);

  const handleSubmit = (event) => {
    const uniqueId = uuidv4();
    event.preventDefault();
        
        if(!task) return;
        setLists((prevLists) => [...prevLists, {id: uniqueId, item: task}]);
        setTask('');

  };


  const handleChange = (event) => {
    setTask(event.target.value);
  };


  const handleDeleteClick = (list) => {
    handleUpdateHeader(list)
    const updatedItems = lists.filter(({item}) => item !== list);
      setLists(updatedItems)
     

  }

  const styleTodo = {
    backgroundColor: '#C46464',
  }
  

  return (
    <React.Fragment>
      <div className="buttonIn">
        <form onSubmit={handleSubmit}>
          <input style={styleTodo} autoComplete='off'
            onChange={handleChange}
            type="text"
            id="enter"
            placeholder="Write your todo list please..."
            value={task}
          />
          <Button  text='Create' type="submit" id="clear"/>
        </form>
      </div>
      <Edit items={lists} assignment={assignment} handleDelete={handleDeleteClick}/>
    </React.Fragment>
  );
};

export default Todo;

