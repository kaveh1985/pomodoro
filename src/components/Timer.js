import React, { useState, useEffect } from "react";
import Modal from './Modal';
import Button from './elements/Button';
import alarmSound from './elements/sound/Alarm.mp3';
import "../styles/Timer.css";

const Timer = ({ header, timeBgColor, timeAmount, handleTime, timeStartedHandler, defaultTimeStartBtn }) => {
  const [time, setTime] = useState(timeAmount);
  const [showModal, setShowModal] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [displayButtons, setDisplayButtons] = useState(true)

  useEffect(() => {

  let interval = null;
      if (timerStarted) {
        interval = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime === 0) {
              clearInterval(interval);
              playAlarmSound(); // Call the function to play the alarm sound
              return prevTime;
            } else {
              return prevTime - 1;
            }
          });
        }, 1000);
      }

      return () => {
        clearInterval(interval);
      };
    }, [timerStarted, time]);



    
    useEffect(() => {
      if(time === 0) {
         handleTime(time)
      }
    }, [time, handleTime])
    



const handleButtonClick = () => {
    if (header) {
      setDisplayButtons(false)
      setTime(timeAmount);
      setTimerStarted(true);
      timeStartedHandler(true)
    } else {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 5000);
    }
  };


  useEffect(() => {
    setTimerStarted(false);
    setTime(timeAmount);
    if(defaultTimeStartBtn) {
       setDisplayButtons(true)
    }
  }, [timeAmount, defaultTimeStartBtn]);


  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const styleTimer = {
    backgroundColor: timeBgColor,
  };


  const handlePauseButton = () => {
    setTime((minutes*60)+seconds)
    setTimerStarted(!timerStarted)
  }


  const handleRepeatButton = () => {
       setDisplayButtons(true)
       setTimerStarted(false)
       setTime(timeAmount)
  }


  const playAlarmSound = () => {
    const audio = new Audio(alarmSound);
    audio.play();
  };



  const style = {
    width: "160px",
    height: '55px',
    borderRadius: '10px',
    borderColor: timeBgColor,
    fontSize: "20px",
    color: timeBgColor,
  };


  return (
    <div style={styleTimer} className="Timer">
      <p>Current time:</p>
      {showModal && (<Modal />)}
      <p id="time">
        {`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`}
      </p>
       
      { displayButtons? (<Button onClick={handleButtonClick} style={style} text={"Let's go"} />)
        :
        <>
            <Button onClick={handlePauseButton} style={style} text="Pause"/>
            <Button onClick={handleRepeatButton} style={style} text="Again"/>
        </> 
        }
    </div>
  );
};


export default Timer;



