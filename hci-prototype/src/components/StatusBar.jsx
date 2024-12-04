import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';



// Top Bar for Battery Status and Time 
export default function StatusBar() {
    const [time, setTime] = useState(new Date().toLocaleTimeString().replace(/:\d+ /, ' '));

    const location = useLocation();

    // Hide the navigation buttons on the home screen
    const hideButtons = ['/workouts/start-workout'].includes(location.pathname);


    useEffect(() => {
      // Update time every second
      const interval = setInterval(() => {
        // remove seconds 
        setTime(new Date().toLocaleTimeString().replace(/:\d+ /, ' '));
      }, 1000);
  
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
  

    return (
        <div
          style={{
            backgroundColor: 'transparent',
            color: '#ffffff',
            width: '100%', // Match container width
            height: '30px', // Fixed height
            // padding: '10px',
            // marginBottom: '20px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '18px',
            position: 'sticky', // Sticky inside the container
            top: 0, // Stick to the top of the scrollable area
            zIndex: 10, // Ensure it's above other content
          }}
        >
          { !hideButtons && [
            <div>
              <i className="bi-battery-half" style={{ marginRight: '5px' }}></i>
              50% 
            </div>,
            <div>{ time }</div>
          ]}
        </div>
    )

}