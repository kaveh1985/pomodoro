import { useState } from 'react';
import { RxLightningBolt } from 'react-icons/rx';
import { GiPopcorn } from 'react-icons/gi';
import { GiBrain } from 'react-icons/gi';
import '../styles/Menu.css';



const Menu = ({ colorMode }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeItem, setActiveItem] = useState(true);
  const [selectedLeftBorder, setSelectedLeftBorder] = useState(false)
  const [selectedRightBorder, setSelectedRightBorder] = useState(false)
  const [activeColor, setActiveColor] = useState('')

  const handleClick = (item) => {
   
    setActiveItem(false)
    setSelectedItem(item);
    setSelectedLeftBorder((prevSelectedBorder) => !prevSelectedBorder);
    setSelectedRightBorder((prevSelectedBorder) => !prevSelectedBorder);
  };


  const styleMenu = {
    backgroundColor: '#C46464',
  }
  

  return (
    <div style={styleMenu} className="menu">
      <ul>
        <li id="first-option"
           style={{
            backgroundColor: selectedItem === 'Item 1' ? activeColor : '',
            borderBottomLeftRadius: selectedLeftBorder ? '0px' : '5px'
          }}
          onClick={() => {
            handleClick('Item 1')
            colorMode('#2F5D62')
            setActiveColor('#688A8D')
          }}
        >
          <RxLightningBolt size={18}/>
          <span>Long Pause</span>
        </li>
        <li id="second-option"
          style={{ backgroundColor: selectedItem === 'Item 2' ? activeColor : '' }}
          onClick={() => {
            handleClick('Item 2')
            colorMode('#61764B')
            setActiveColor('#8D9C7D')
          }}
        >
          <GiPopcorn size={18}/>
          <span>Short Pause</span>
        </li>
        <li className='third-option' id={activeItem ? "active": null}
          style={{ backgroundColor: selectedItem === 'Item 3' ? activeColor : '',
          borderBottomRightRadius: selectedRightBorder ? '0px' : '5px'
        }}
          onClick={() => {
            handleClick('Item 3')
            colorMode('#BA4949')
            setActiveColor('#CD7B7B')
          }}
        >
          <GiBrain size={18} />
         <span>Focus</span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
