import React, { Fragment, useEffect, useState } from "react";
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GiFireSpellCast } from 'react-icons/gi';
import Button from "./elements/Button";
import "../styles/Edit.css";
import EditForm from "./elements/EditForm";


const Edit = ({ items, handleDelete, handleUpdate, handleDisplay, ulBackground }) => {
  const [btnBgColor, setBtnBgColor] = useState('#CD7B7B');
  const [select, setSelect] = useState("select");
  const [openInput, setOpenInput] = useState(false)

  const handleSelectClick = (item) => {
    handleDisplay(item);
  };

const handleOpenInput = () => {
  setOpenInput(!openInput)
}

  useEffect(() => {
    const backgroundColors = {
      '#C46464': '#CD7B7B',
      '#798A66': '#8D9B7D',
      '#4E7579': '#688A8D',
    };

    setBtnBgColor(backgroundColors[ulBackground] || '#CD7B7B');
  }, [ulBackground]);

  const buttonStyle = {
    backgroundColor: btnBgColor,
    color: 'white',
    fontSize: '16px',
    padding: '8px',
    paddingLeft: '15px',
    paddingRight: '15px',
    margin: '4px',
    borderColor: btnBgColor,
    borderRadius: '5px',
  };

  const styleEdit = {
    backgroundColor: ulBackground,
  };

  return (
    <Fragment>
      {items.map(({ id, item }) => (
        <div style={styleEdit} key={id} className="edit">
          <div>
{/* delete button */}
            <Button
              style={buttonStyle}
              className="custom-styles"
              onClick={() => {
                handleDelete(item);
              }}
            >
              <RiDeleteBin6Line />
            </Button>
{/* edit button */}
            <Button onClick={handleOpenInput}
              style={buttonStyle}
              className="custom-styles"
            >
              <FiEdit2 />
            </Button>

{/*Select button  */}
            <Button
              style={buttonStyle}
              className="custom-styles"
              onClick={() => {
                handleSelectClick(item);
                setSelect('Selected');
              }}
            >
              <GiFireSpellCast id="Gifi"/> {select}
            </Button>

            <span className="edit-container">
              {openInput?  <EditForm list={item} onUpdate={(updatedText) => {
                 handleUpdate(id, updatedText)
              }}/>: ""}
               {openInput? " " : item}
               
            </span>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Edit;
