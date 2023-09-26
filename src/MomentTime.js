import React, {useState,useEffect } from "react";
import moment from 'moment';

export default function Clock(props) {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current time every second
      setCurrentTime(moment());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
        }, []);

    return (
        <div>
            <span>{currentTime.format(props.date)}</span><br />          
            <span>{currentTime.format(props.time)}</span>
        </div>
        
    );

}
// {currentTime.format('h:mm:ss A')}