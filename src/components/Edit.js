import React from "react";
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line} from 'react-icons/ri';
import { GrCheckboxSelected } from "react-icons/gr";
import Button from "./elements/Button";
import "../styles/Edit.css";

const Edit = ({ items }) => {

  const handleButtonClick = () => {
     console.log("HI")
  };


  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '16px',
    // borderRadius: '5px',
    padding: '8px',
    paddingLeft: "15px",
    paddingRight: "15px",
    margin: '4px'
    // Add more custom styles as needed
  };

  return (
    <div className="todo-container">
       <div>
        <Button
          style={buttonStyle}
          className="custom-styles"
          onClick={handleButtonClick}
        >
              <FiEdit2 />
          </Button>
          <Button
            style={buttonStyle}
            className="custom-styles"
            onClick={handleButtonClick}
          >
               <RiDeleteBin6Line />
                </Button>
          <Button
            style={buttonStyle} text={"Selected"}
            className="custom-styles"
            onClick={handleButtonClick}
          >
                 <GrCheckboxSelected />
            </Button> 
       </div>
    </div>
  );
};

export default Edit;