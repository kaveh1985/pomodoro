import React,{ useState, } from 'react';
import './EditForm.css';


const EditForm = ({ list, onUpdate }) => {
  const [item, setItem] = useState(list);
 
    const onSubmitHandler = (event) => {
      event.preventDefault()
       onUpdate(item)

    }

const onChangeHandler = (event) => {
      setItem(event.target.value)
}


      return (
           <div>
              <form onSubmit={onSubmitHandler}>
                <input onChange={onChangeHandler} defaultValue={item} placeholder="edit here"/>
                <button>X</button>
              </form>
           </div>
        )
}

export default EditForm;
