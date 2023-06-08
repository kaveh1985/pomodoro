import React, { Fragment } from "react";
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line} from 'react-icons/ri';
import { GiFireSpellCast } from 'react-icons/gi';
import Button from "./elements/Button";
import "../styles/Edit.css";


const Edit = ({ items, assignment, handleDelete }) => {


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
    padding: '8px',
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: '4px',
    borderColor: "#CD7B7B",
    borderRadius: '5px'
  };

  const styleEdit = {
    backgroundColor: '#C46464',
  }

  return (
      <Fragment>
        {items.map(({id, item}) => {
            return  <div style={styleEdit} key={id} className="edit"> 
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
