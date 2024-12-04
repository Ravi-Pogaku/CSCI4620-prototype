import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap-icons/font/bootstrap-icons.css';
import StatusBar from '../components/StatusBar';
import ScrollableContainer from '../components/ScrollableContainer';
import { Calendar, Clock, TreeFill} from 'react-bootstrap-icons';

function AIAssistant() {
  const navigate = useNavigate(); // Initialize navigate

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
      {/* Plain Black Square */}
      <ScrollableContainer
        style={{
          backgroundColor: '#1c0239', // Black background
          color: '#ffffff',
          width: '300px', // Adjust the size as needed
          height: '300px', // Ensures 1:1 ratio
          padding: '20px',
          borderRadius: '10%', // Circular smartwatch display
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
          overflow: 'hidden', // Disable scrolling for now (can adjust as needed)
        }}
        className="overflow-hidden d-flex flex-column justify-content-between"
      >
        

        <div style={{ padding: '10px', marginTop: '-10px' }}>
          {/* Header */}
          <p style={{ fontSize: '16px', marginBottom: '10px', textAlign: 'center' }}>
          <strong>Hey there, what can I help you with today?</strong>
          </p>

          {/* Button 1: Show today's schedule */}
          <button
            style={{
              backgroundColor: '#d4edda',
              color: '#1c0239', // Grey text color
              border: 'none',
              borderRadius: '10px',
              padding: '10px',
              width: '100%',
              marginTop: '10px',
              cursor: 'pointer', // Makes it clear the div is clickable
            }}
            onClick={() => navigate('/SchedulePage')} // Correct route path
          >
            <Calendar size={24} />
            <span style={{ marginLeft: '10px' }}>Show today's schedule</span>
          </button>

          {/* Button 2: Show some nearby parks */}
          <button
            style={{
              backgroundColor: '#bddffa', // Pastel blue
              color: '#1c0239', // Grey text
              border: 'none',
              borderRadius: '10px',
              padding: '10px',
              width: '100%',
              marginTop: '10px',
              cursor: 'pointer' // Makes it clear the div is clickable
            }}
            onClick={() => navigate('/MapPage')} // Correct route path
          >
            <TreeFill size={24} />
            <span style={{ marginLeft: '10px' }}>Show some nearby parks</span>
          </button>

          {/* Button 3: Suggest some time strategies */}
          <button
            style={{
              backgroundColor: '#e5d6ff',
              color: '#1c0239',
              border: 'none',
              borderRadius: '8px', // Slightly smaller radius
              padding: '6px 8px', // Smaller padding
              width: '100%',
              marginTop: '8px',
              fontSize: '14px', // Smaller font size for text
            }}
            onClick={() => navigate('/TimePage')} // Correct route path
          >
            <Clock size={18} /> {/* Smaller icon */}
            <span style={{ marginLeft: '8px' }}>
              Suggest some time management strategies
            </span>
          </button>
        </div>
      </ScrollableContainer>
    </div>
  );
}

export default AIAssistant;
