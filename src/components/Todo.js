import React, { useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Edit from './Edit';
import Button from './elements/Button'
import "../styles/Todo.css";



const Todo = ({ assignment, handleUpdateHeader, ulBackground }) => {

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
      if(ulBackground === '#C46464') {
        setBtnBgColor('#CD7B7B')
      } 
      if(ulBackground === '#798A66') {
        setBtnBgColor('#8D9B7D')
      }   if(ulBackground === '#4E7579') {
        setBtnBgColor('#688A8D')
      } 
   }, [ulBackground])



  const handleChange = (event) => {
    setTask(event.target.value);
  };


  const handleDeleteClick = (list) => {
    handleUpdateHeader(list)
    const updatedItems = lists.filter(({item}) => item !== list);
      setLists(updatedItems)
  }


  const styleTodo = {
    backgroundColor: ulBackground,
  }
  
  
 const styleEdit = {
  backgroundColor: btnBgColor,
  borderColor: ulBackground,
 }


  return (
    <React.Fragment>
      <div className="buttonIn">
        <form onSubmit={handleSubmit}>
          <input style={styleTodo} autoComplete='off'
            onChange={handleChange}
            type="text"
            id="enter"
            placeholder="Please write your todo and then select..."
            value={task}
          />
          <Button style={styleEdit} text='Create' type="submit" id="clear"/>
        </form>
      </div>
      <Edit items={lists} assignment={assignment} handleDelete={handleDeleteClick}/>
    </React.Fragment>
  );
};

export default Todo;

