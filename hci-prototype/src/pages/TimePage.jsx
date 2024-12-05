import React from 'react';
import ScrollableContainer from '../components/ScrollableContainer';
import StatusBar from '../components/StatusBar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function TimePage() {
  return (
    <ScrollableContainer
      style={{
        backgroundColor: '#1c0239', 
        color: '#ffffff',
        width: '300px', 
        height: '300px', 
        padding: '20px',
        borderRadius: '10%', // Circular smartwatch display
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
        overflow: 'hidden', 
      }}
      className="overflow-hidden d-flex flex-column justify-content-between"
    >
      

      {/* Static image of time management chat */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img
          src="/time.png" 
          alt="Today's Schedule"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </div>
    </ScrollableContainer>
  );
}

export default TimePage;
