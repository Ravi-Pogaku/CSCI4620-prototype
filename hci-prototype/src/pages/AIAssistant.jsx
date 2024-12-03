import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollableContainer from '../components/ScrollableContainer';

function AIAssistant() {
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
          backgroundColor: '#121212', // Black background
          color: '#ffffff',
          width: '550px', // Adjust the size as needed
          height: '550px', // Ensures 1:1 ratio
          borderRadius: '10%', // Circular smartwatch display
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
          overflow: 'hidden', // Disable scrolling for now (can adjust as needed)
        }}
        className="overflow-hidden"
      >
        {/* No Content */}
      </ScrollableContainer>
    </div>
  );
}

export default AIAssistant;
