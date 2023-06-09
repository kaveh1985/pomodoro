import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Edit from './Edit';
import Button from './elements/Button'
import "../styles/Todo.css";



const Todo = ({ handleDeleteHeader, ulBackground, handleDisplay }) => {

  const [task, setTask] = useState('');
  const [lists, setLists] = useState([]);
  const [btnBgColor, setBtnBgColor] = useState('#CD7B7B');


  const handleSubmit = (event) => {
    const uniqueId = uuidv4();
      event.preventDefault();
          if(!task) return;
          setLists((prevLists) => [...prevLists, {id: uniqueId, item: task}]);
          setTask('');
   };

  useEffect(() => {
    const backgroundColors = {
      '#C46464': '#CD7B7B',
      '#798A66': '#8D9B7D',
      '#4E7579': '#688A8D',
    };
  
    setBtnBgColor(backgroundColors[ulBackground] || '#CD7B7B');
  }, [ulBackground]);
  

  const handleUpdateClick = (id, updatedText) => {
    const updatedList = lists.map((item) => {
      if (item.id === id) {
        return { ...item, item: updatedText };
      }
      return item;
    });
    setLists(updatedList);
  };

  

  const handleChange = (event) => {
    setTask(event.target.value);
  };


  const handleDeleteClick = (list) => {
    handleDeleteHeader(list)
    const updatedItems = lists.filter(({item}) => item !== list);
      setLists(updatedItems)
      
  }


  const styleTodoInput = {
    backgroundColor: ulBackground,
  }
  
  
 const styleInputBtn = {
  backgroundColor: btnBgColor,
  borderColor: btnBgColor,
 }


  return (
    <React.Fragment>
      <div className="todoInput">
        <form onSubmit={handleSubmit}>
          <input style={styleTodoInput} autoComplete='off'
            onChange={handleChange}
            type="text"
            id="enter"
            placeholder="Write your task"
            value={task}
          />
          <Button style={styleInputBtn} text='Create' type="submit" id="clear"/>
        </form>
      </div>
      <Edit ulBackground={ulBackground}  handleUpdate={handleUpdateClick}
         handleDisplay={handleDisplay} items={lists} 
          handleDelete={handleDeleteClick}
       />
    </React.Fragment>
  );
};

export default Todo;

