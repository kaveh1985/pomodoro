import { useState } from 'react';
import { RxLightningBolt } from 'react-icons/rx';
import { GiPopcorn } from 'react-icons/gi';
import { GiBrain } from 'react-icons/gi';
import '../styles/Menu.css';


const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeItem, setActiveItem] = useState(true);

  const handleClick = (item) => {
    setActiveItem(false)
    setSelectedItem(item);
  };

  const liStyle= {
     marginLeft: "5px"
  }


  return (
    <div className="menu">
      <ul>
        <li id="first-option"
          style={{ backgroundColor: selectedItem === 'Item 1' ? '#c27e7e' : '' }}
          onClick={() => handleClick('Item 1')}
        >
          <RxLightningBolt size={18}/>
          <span>Long Pause</span>
        </li>
        <li id="second-option"
          style={{ backgroundColor: selectedItem === 'Item 2' ? '#c27e7e' : '' }}
          onClick={() => handleClick('Item 2')}
        >
          <GiPopcorn size={18}/>
          <span>Short Pause</span>
        </li>
        <li id={activeItem ? "third-option": null}
          style={{ backgroundColor: selectedItem === 'Item 3' ? '#c27e7e' : '' }}
          onClick={() => handleClick('Item 3')}
        >
          <GiBrain size={18} />
         <span>Focus</span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
