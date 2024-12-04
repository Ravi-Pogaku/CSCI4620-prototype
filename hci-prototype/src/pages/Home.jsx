<<<<<<< HEAD
import ScrollableContainer from '../components/ScrollableContainer';
import StatusBar from '../components/StatusBar';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';


function Home() {
=======
import React, { useState, useEffect } from 'react';
import ScrollableContainer from '../components/ScrollableContainer';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());


  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);


    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

>>>>>>> origin/nimra

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      {/* ScrollableContainer */}
      <ScrollableContainer
        style={{
          backgroundColor: '#121212',
          color: '#ffffff',
          width: '550px', // Adjust the size as needed
          height: '550px', // Ensures 1:1 ratio
          padding: '20px',
          borderRadius: '10%', // Circular smartwatch display
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
          overflow: 'auto',
          position: 'relative', // Allow positioning of the bar inside
        }}
        className="overflow-hidden"
      >
<<<<<<< HEAD
        
        <StatusBar />

        {/* Grid for home screen icons */}
        <div
          className="d-flex flex-wrap align-items-center justify-content-center"
          style={{ gap: '2px' }}
        >
              <div
  style={{
    height: 75,
    width: 75,
    cursor: "pointer", // Makes it clear the div is clickable
  }}
  className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
  onClick={() => (window.location.href = '/AIAssistant.jsx')} // Redirect to the desired page
>
  <img
    src="./ai_assistant.png"
    alt="AI Icon"
    style={{
      height: "100%",
      width: "100%",
      objectFit: "cover",
      borderRadius: "100%",
    }}
  />
</div>


          <div
            style={{ height: 75, width: 75 }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
            
          >
            <i class="bi bi-alexa fs-2"></i>
          </div>

          <div
            style={{             
               height: 75,
               width: 75,
               cursor: "pointer"      
              }}
              onClick={() => (window.location.href = '/Workouts.jsx')}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
          >  
            <FontAwesomeIcon icon={faHeartPulse} size="2x" />
          </div>


          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/75"
            alt="Icon 3"
          />
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/75 "
            alt="Icon 4"
          />
          <div
            style={{ height: 75, width: 75 }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
          >
            <i className="bi-alarm fs-2"></i>
          </div>
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/75 "
            alt="Icon 2"
          />
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/75 "
            alt="Icon 3"
          />
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/75"
            alt="Icon 4"
          />
          <div
            style={{ height: 75, width: 75 }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
          >
            <i className="bi-alarm fs-2"></i>
          </div>
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/75"
            alt="Icon 2"
          />
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/75"
            alt="Icon 3"
          />
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/75"
            alt="Icon 4"
          />
        </div>
=======
        {/* Top Bar for Battery Status and Time */}
        <div
          style={{
            backgroundColor: '#1E1E1E',
            color: '#ffffff',
            width: '100%', // Match container width
            padding: '10px',
            borderTopLeftRadius: '10%',
            borderTopRightRadius: '10%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '18px',
            //position: 'sticky', // Sticky inside the container
            top: 0, // Stick to the top of the scrollable area
            zIndex: 10, // Ensure it's above other content
          }}
        >
          <div>
            <i className="bi-battery-half" style={{ marginRight: '5px' }}></i>
            75% {/* Static or replace with dynamic battery level */}
          </div>
          <div>{time}</div> {/* Dynamic time */}
        </div>


        {/* Grid for home screen icons */}
        <div
          className="d-flex flex-wrap align-items-center justify-content-center"
          style={{ gap: '2px', marginTop: '20px' }} // Add space below the top bar
        >
     <div
  style={{
    height: 150,
    width: 150,
    cursor: "pointer", // Makes it clear the div is clickable
  }}
  className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
  onClick={() => (window.location.href = '/AIAssistant.jsx')} // Redirect to the desired page
>
  <img
    src="./ai_assistant.png"
    alt="AI Assistant Icon"
    style={{
      height: "100%",
      width: "100%",
      objectFit: "cover",
      borderRadius: "100%",
    }}
  />
</div>



          <img
    src='public\fitness_tracker.png'
    alt="Fitness Tracker Icon"
    style={{
      height: "29%",
      width: "29%",
      objectFit: "cover", // Ensures image fills the circle without distortion
      borderRadius: "100%", // Makes the image circular
    }}
  />


          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/150"
            alt="Icon 3"
          />
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/150 "
            alt="Icon 4"
          />
          <div
            style={{ height: 150, width: 150 }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
          >
            <i className="bi-alarm fs-2"></i>
          </div>
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/150 "
            alt="Icon 2"
          />
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/150 "
            alt="Icon 3"
          />
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/150"
            alt="Icon 4"
          />
          <div
            style={{ height: 150, width: 150 }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
          >
            <i className="bi-alarm fs-2"></i>
          </div>
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/150"
            alt="Icon 2"
          />
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/150"
            alt="Icon 3"
          />
          <img
            className="rounded-circle p-1"
            src="https://via.placeholder.com/150"
            alt="Icon 4"
          />
        </div>
>>>>>>> origin/nimra
      </ScrollableContainer>
    </div>
  );
}


export default Home;
