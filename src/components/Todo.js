import React, { useState} from 'react';
import Edit from './Edit';
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
          <Button  text='Create' type="submit" id="clear"/>
        </form>
      </div>
      <Edit items={lists} />
    </React.Fragment>
  );
};

export default Todo;

