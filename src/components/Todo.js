import React, { useState} from 'react';
import TodoList from './TodoList';
import Button from './elements/Button'
import "../styles/Todo.css";


const Todo = () => {
  const [task, setTask] = useState('');
  const [lists, setLists] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLists((prevLists) => [...prevLists, task]);
    setTask('');
    console.log('"hi')
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="buttonIn">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            id="enter"
            placeholder="Write your todo list please..."
            value={task}
          />
          <Button type="submit" id="clear">Create</Button>
        </form>
        <Button text="Create"/>
      </div>
      <TodoList items={lists} />
    </React.Fragment>
  );
};

export default Todo;

