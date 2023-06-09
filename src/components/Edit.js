import React, { Fragment, useEffect, useState } from "react";
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line} from 'react-icons/ri';
import { GiFireSpellCast } from 'react-icons/gi';
import Button from "./elements/Button";
import "../styles/Edit.css";


const Edit = ({ items, handleDelete, handleDisplay, ulBackground }) => {
  const [btnBgColor, setBtnBgColor] = useState('#CD7B7B');

  const handleSelectClick = (item) => {
    handleDisplay(item)
 }

  const handleEditClick = () => {
   console.log('Edit')
 
  }

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



  const buttonStyle = {
    backgroundColor: btnBgColor,
    color: 'white',
    fontSize: '16px',
    padding: '8px',
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: '4px',
    borderColor: btnBgColor,
    borderRadius: '5px'
  };

  const styleEdit = {
    backgroundColor: ulBackground,
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
