import { useEffect, useState, useCallback } from 'react';
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
  const [timeToZero, setTimeToZero] = useState('')


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



  const handleTimeSelector = useCallback(
    (value) => {
        setActiveItem(value); 
      },[]) 


  const timeStartedHandler = (getTimeBoolean) => {
      setTimeBoolean(getTimeBoolean)
  }


  const handleTimeToZero = (getTime) => {
      setTimeToZero(getTime)
  }


  const handleItemClick = useCallback(
    (value) => {
      if (value === 'Focus') {
        setTimeSetter(1500);
        setUlBackGroundColor('#C46464');
        pageBgColor('#BA4949');
        setliColorShifter('#CD7B7B');
      } else if (value === 'Short Pause') {
        setTimeSetter(5);
        pageBgColor('#61764B');
        setliColorShifter('#8D9B7D');
        setUlBackGroundColor('#798A66');
      } else if (value === 'Long Pause') {
        setTimeSetter(900);
        pageBgColor('#2F5D62');
        setliColorShifter('#688A8D');
        setUlBackGroundColor('#4E7579');
      }

      handleTimeSelector(value);
    },
    [pageBgColor, handleTimeSelector]
  );



  useEffect(() => {
    if (!timeToZero) {
      const interval = setInterval(() => {
        handleItemClick('Focus');
        setTimeToZero(true);
        clearInterval(interval);
      }, 3000);
      
    }
  }, [handleItemClick, timeToZero, timeSetter]);
   





  return (
    <div>
      <Header booleanTime={checkTimeBoolean} bgColor={ulBackground} 
               header={displayToHeader} timer={timeSetter}
            />
       
{/* menu parts */}
        <div className={styles.container}>
          <ul style={{ backgroundColor: ulBackground }} className={styles.menu}>
            {mapControl.map((value, index) => {
                 if (timeToZero === 0 && value.icon === defaultActiveItem.icon) {
                  return (
                    <li
                    key={index}
                    style={{ backgroundColor: activeItem === value.menu ? liColorShifter : '' }}
                  >
                    {value.icon}
                    <span> {value.menu} </span>
                  </li>
                  );
                  }
              return (
                <li
                  key={index}
                  style={{ backgroundColor: activeItem === value.menu ? liColorShifter : '' }}
                  onClick={() => handleItemClick(value.menu)}
                >
                  {value.icon}
                  <span> {value.menu} </span>
                </li>
              )
            })}
          </ul>
          <div>
  {/* menu parts */}

          <Timer handleTime={handleTimeToZero} 
             timeStartedHandler={timeStartedHandler} header={displayToHeader}
                 timeBgColor={ulBackground} timeAmount={timeSetter}
             />
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


