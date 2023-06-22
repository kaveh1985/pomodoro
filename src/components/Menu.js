import { useState } from 'react';
import { RxLightningBolt } from 'react-icons/rx';
import { GiPopcorn } from 'react-icons/gi';
import { GiBrain } from 'react-icons/gi';
import styles from '../styles/Menu.module.css';
import Timer from './Timer';
import Header from './Header';
import Todo from './Todo';


const Menu = ({ pageBgColor}) => {
  const [liColorShifter, setliColorShifter] = useState('#CD7B7B');
  const [ulBackground, setUlBackGroundColor] = useState("#C46464");
  const [timeSetter, setTimeSetter] = useState(1500);
  const [displayToHeader, setDisplayToHeader] = useState('')
  const [checkTimeBoolean, setTimeBoolean] = useState(false)

  const mapControl =  [
    { menu: 'Long Pause', icon: <RxLightningBolt id='Rx' size={18} />},
    { menu: 'Short Pause', icon: <GiPopcorn className='icon' size={18} />},
    { menu: 'Focus', icon: <GiBrain className='icon' size={18} />},
  ];
  const defaultActiveItem = mapControl[2];
  const [activeItem, setActiveItem] = useState(defaultActiveItem.menu);


  const handleDeleteHeader = (header) => {
          if (displayToHeader === header) {
           setDisplayToHeader('');
       }
     };
    


  const handleDisplayTaskToHeader = (item) => {
       setDisplayToHeader(item)
  }



  const handleTimeSelector = (value) => {
    setActiveItem(value);
  };


  const timeStartedHandler = (getTimeBoolean) => {
      setTimeBoolean(getTimeBoolean)
  }



  const handleItemClick = (value) => {
     if (value === 'Focus') {
      setTimeSetter(1500);
      setUlBackGroundColor("#C46464")
      pageBgColor('#BA4949')
      setliColorShifter('#CD7B7B');
    } if (value === 'Short Pause') {
      setTimeSetter(10);
      pageBgColor('#61764B')
      setliColorShifter('#8D9B7D');
      setUlBackGroundColor("#798A66")
    } if (value === 'Long Pause') {
      setTimeSetter(900);
      pageBgColor('#2F5D62')
      setliColorShifter('#688A8D');
      setUlBackGroundColor("#4E7579")
    }

       handleTimeSelector(value);
  };



  return (
    <div>
      <Header booleanTime={checkTimeBoolean} bgColor={ulBackground} header={displayToHeader} timer={timeSetter}/>
        <div className={styles.container}>
          <ul style={{ backgroundColor: ulBackground }} className={styles.menu}>
            {mapControl.map((value, index) => (
              <li
                key={index}
                // className={`${ index === 0 ? styles.firstItem : "" } ${index === value.length - 1 ? styles.lastItem : ""}`}
                style={{ backgroundColor: activeItem === value.menu ? liColorShifter : '' }}
                onClick={() => handleItemClick(value.menu)}
              >
                {value.icon}
                <span> {value.menu} </span>
              </li>
            ))}
          </ul>
          <div>
          <Timer timeStartedHandler={timeStartedHandler} header={displayToHeader} timeBgColor={ulBackground} timeAmount={timeSetter}/>
          </div>
          <div>
          <Todo 
                ulBackground={ulBackground} handleDeleteHeader={handleDeleteHeader}
                handleDisplay={handleDisplayTaskToHeader}
            />
          </div>
        </div>
    </div>
  );
};

export default Menu;


