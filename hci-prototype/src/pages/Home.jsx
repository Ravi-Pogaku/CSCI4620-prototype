import { useNavigate } from 'react-router-dom';

import ScrollableContainer from '../components/ScrollableContainer';
import StatusBar from '../components/StatusBar';
import NavBar from '../components/NavBar';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faChartColumn } from '@fortawesome/free-solid-svg-icons';


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
      <ScrollableContainer
        style={{
          backgroundColor: '#121212',
          color: '#ffffff',
          width: '300px', 
          height: '300px', // Ensures 1:1 ratio
          padding: '20px',
          borderRadius: '10%', // Circular smartwatch display
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
          overflow: 'auto',
          position: 'relative', // Allow positioning of the bar inside
        }}
        className="overflow-hidden d-flex flex-column justify-content-between"
      >
        

        {/* Grid for home screen icons */}
        <div
          className="d-flex flex-wrap align-items-center justify-content-center"
          style={{ gap: '2px' }}
        >
          {/* AI Assistant */}
          <div
            style={{
              height: 75,
              width: 75,
              cursor: "pointer", 
            }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center m-1"
            onClick={() => navigate("/ai-assistant")}
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
          
          {/* Fitness App */}
          <div
            style={{ height: 75, width: 75, cursor: 'pointer' }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center m-1"
            onClick={() => navigate('/workouts')}
          >
            <FontAwesomeIcon icon={faHeartPulse} size="2x" />
          </div>

          <div
            style={{ height: 75, width: 75, cursor: 'pointer' }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center m-1"
            onClick={() => navigate('/activity')}
          >
            <FontAwesomeIcon icon={faChartColumn} size="2x" />
          </div>
        </div>
    
      </ScrollableContainer>
    </div>
  );
}


export default Home;
