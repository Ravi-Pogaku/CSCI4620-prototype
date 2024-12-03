import ScrollableContainer from '../components/ScrollableContainer';
import StatusBar from '../components/StatusBar';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

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
          width: '300px', // Adjust the size as needed
          height: '300px', // Ensures 1:1 ratio
          padding: '20px',
          borderRadius: '10%', // Circular smartwatch display
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
          overflow: 'auto',
          position: 'relative', // Allow positioning of the bar inside
        }}
        className="overflow-hidden"
      >
        
        <StatusBar />

        {/* Grid for home screen icons */}
        <div
          className="d-flex flex-wrap align-items-center justify-content-center"
          style={{ gap: '2px' }}
        >
          <div
            style={{ height: 75, width: 75 }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
            onClick={() => (navigate("/ai-assistant"))} // Redirect to the desired page
          >
            <i className="bi bi-alexa fs-2"></i>
          </div>

          <div
            style={{ height: 75, width: 75 }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
            onClick={() => (navigate("/workouts"))}
          >
            <FontAwesomeIcon icon={faHeartPulse} size="2x" />
          </div>


          {/* <img
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
          /> */}
        </div>
      </ScrollableContainer>
    </div>
  );
}


export default Home;
