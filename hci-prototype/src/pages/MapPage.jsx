import React from 'react';
import ScrollableContainer from '../components/ScrollableContainer';
import StatusBar from '../components/StatusBar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MapPage() {
  return (
    <ScrollableContainer
      style={{
        backgroundColor: '#1c0239', 
        color: '#ffffff',
        width: '300px', 
        height: '300px', // Ensures 1:1 ratio
        padding: '20px',
        borderRadius: '10%', // Circular smartwatch display
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
        overflow: 'hidden', 
      }}
      className="overflow-hidden d-flex flex-column justify-content-between"
    >
      

      {/* Park Image */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img
          src="/parks.png" 
          alt="Map"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </div>
    </ScrollableContainer>
  );
}

export default MapPage;
