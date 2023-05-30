import React, { Fragment, useState } from "react";
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line} from 'react-icons/ri';
import { GiFireSpellCast } from 'react-icons/gi';
import Button from "./elements/Button";
import "../styles/Edit.css";

const Edit = ({ items, assignment, handleDelete }) => {
  const [renderedItems, setRenderedItems] = useState(items);


  const handleSelectClick = (item) => {
     assignment(item)
 }

  const handleEditClick = () => {
   console.log('Edit')
 
  }



  const buttonStyle = {
    backgroundColor: '#CD7B7B',
    color: 'white',
    fontSize: '16px',
    // borderRadius: '5px',
    padding: '8px',
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: '4px',
    borderColor: "#CD7B7B",
    borderRadius: '5px'
    // Add more custom styles as needed
  };

  return (
      <Fragment>
        {items.map(({id, item}) => {
            return  <div  key={id} className="todo-container"> 
                        <div>
                            <Button
                              style={buttonStyle}
                              className="custom-styles"
                              onClick={() => {
                                handleDelete(item)
                              }}
                            >
                                  <RiDeleteBin6Line />
                            </Button>
                            <Button
                              style={buttonStyle}
                              className="custom-styles"
                              onClick={handleEditClick}
                            >
                                <FiEdit2 />
                            </Button>
                            <Button
                              style={buttonStyle}
                              className="custom-styles"
                              onClick={() => {
                                handleSelectClick(item)
                              }}
                            >
                                    <GiFireSpellCast /> Selected
                            </Button> 
                            <span>{item}</span>
                     </div>
                   </div>
          })}
      </Fragment>

  );
};

export default Edit;
