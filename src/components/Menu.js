import { useState } from 'react';
import '../styles/Menu.css'


function Menu() {
  const [activeItems, setActiveItems] = useState(null)

  const handleClick = (item) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter((activeItem) => activeItem !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };

    return(
        <nav>
        <div className="menu">
          <ul>
            <li className={activeItems === 'item1' ? 'active' : ''} onClick={() => handleClick('item1')}><a href="#">Focus</a></li>
            <li className={activeItems === 'item1' ? 'active' : ''} onClick={() => handleClick('item1')}><a href="#">Short pause</a></li>
            <li className={activeItems === 'item1' ? 'active' : ''} onClick={() => handleClick('item1')}><a href="#">Long pause</a></li>
          </ul>
        </div>
      </nav>
      )
}

export default Menu;

