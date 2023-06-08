import { useState } from 'react';
import { RxLightningBolt } from 'react-icons/rx';
import { GiPopcorn } from 'react-icons/gi';
import { GiBrain } from 'react-icons/gi';
import style from '../styles/Menu.module.css';
import Timer from './Timer';
import Header from './Header';


const Menu = ({ bgColor, header}) => {
  const mapControl =  [
    { menu: 'Long Pause', icon: <RxLightningBolt size={18} />},
    { menu: 'Short Pause', icon: <GiPopcorn size={18} />},
    { menu: 'Focus', icon: <GiBrain size={18} />},
  ];


  const defaultActiveItem = mapControl[2];
  const [activeItem, setActiveItem] = useState(defaultActiveItem);
  const [liColorShifter, setliColorShifter] = useState('#CD7B7B');
  const [ulBackground, setUlBackGroundColor] = useState("#C46464");
  const [timeSetter, setTimeSetter] = useState(1500);


  const handleTimeSelector = (value) => {
    setActiveItem(value);
  };

  const handleItemClick = (value) => {
     if (value === 'Focus') {
      setTimeSetter(1500);
      setUlBackGroundColor("#C46464")
      setliColorShifter('#CD7B7B');
    } if (value === 'Short Pause') {
      setTimeSetter(300);
      setliColorShifter('#8D9B7D');
      setUlBackGroundColor("#798A66")
    } if (value === 'Long Pause') {
      setTimeSetter(900);
      setliColorShifter('#688A8D');
      setUlBackGroundColor("#4E7579")
    }
       handleTimeSelector(value);
  };
  

  return (
    <div>
      <Header bgColor={bgColor} header={header}/>
        <div className={style.container}>
          <ul style={{ backgroundColor: ulBackground }} className={style.menu}>
            {mapControl.map((value, index) => (
              <li
                key={index}
                style={{ backgroundColor: activeItem === value.menu ? liColorShifter : '' }}
                onClick={() => handleItemClick(value.menu)}
              >
                {value.icon}
                <span> {value.menu} </span>
              </li>
            ))}
          </ul>
          <div>
          <Timer header={header} timeBgColor={"red"} timeAmount={timeSetter}/>
          </div>
        </div>
    </div>
  );
};

export default Menu;




// const Menu = ({ bgColorMode, timeAmount }) => {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [activeItem, setActiveItem] = useState(true);
//   const [activeColor, setActiveColor] = useState('');

//   const handleClick = (item, color) => {
//     timeAmount(item)
//     setActiveItem(false);
//     setSelectedItem(item);
//     bgColorMode(color);
//     setActiveColor(color);
//   };

//   const styleMenu = {
//     backgroundColor: '#C46464',
//   };

//   const getItemStyle = (item) => {
//     return {
//       backgroundColor: selectedItem === item ? activeColor : '',
//     };
//   };

//   return (
//     <div style={styleMenu} className="menu">
//       <ul>
//         <li
//           id="first-option"
//           style={getItemStyle('Item 1')}
//           onClick={() => handleClick('Item 1', '#2F5D62')}
//         >
//           <RxLightningBolt size={18} />
//           <span>Long Pause</span>
//         </li>
//         <li
//           id="second-option"
//           style={getItemStyle('Item 2')}
//           onClick={() => handleClick('Item 2', '#61764B')}
//         >
//           <GiPopcorn size={18} />
//           <span>Short Pause</span>
//         </li>
//         <li
//           className="third-option"
//           id={activeItem ? 'active' : null}
//           style={getItemStyle('Item 3')}
//           onClick={() => handleClick('Item 3', '#BA4949')}
//         >
//           <GiBrain size={18} />
//           <span>Focus</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Menu;