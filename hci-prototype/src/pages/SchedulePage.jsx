import React from 'react';
import ScrollableContainer from '../components/ScrollableContainer';
import StatusBar from '../components/StatusBar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Card from 'react-bootstrap/Card';
import { useState, useRef } from 'react';
import NavBar from '../components/NavBar';

function SchedulePage() {
  // state to determine which messages to show
  const [clicked, setClicked] = useState(0);

  return (
    <ScrollableContainer
      style={{
        backgroundColor: '#1c0239', 
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
      

      {/* User asking AI Assistant for today's schedule */}
      <Card
        className="bg-primary mb-2"
        onClick={() => {
          setClicked(1)
        }}
      >
        <Card.Body className='text-light'>
          <Card.Text>
            User: Hey, show me today's schedule. <br/>
            {(clicked < 1) ? "(Click this to speak it.)" : ""}
          </Card.Text>
        </Card.Body>
      </Card>

      {/* AI Assistant showing todays schedules */}
      <Card
        className="bg-secondary"
        hidden={clicked < 1}
      >
        <Card.Body className='text-light'>
          <Card.Text>
            <i className="bi bi-robot fs-2"></i> Assistant: <br/>
            Of course, here is today's schedule.
          </Card.Text>
        </Card.Body>
      </Card>

      <div style={{ textAlign: 'center' }} hidden={clicked < 1} >
        <img
          src="/schedule2.png"
          alt="Today's Schedule"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </div>

      {/* AI Assistant asks if it should optimize your schedule */}
      <Card
        className="bg-secondary mb-2"
        hidden={clicked < 1}
      >
        <Card.Body className='text-light'>
          <Card.Text>
            <i className="bi bi-robot fs-2"></i> Assistant: <br/>
            Would you like me to suggest improvements to your schedule?
          </Card.Text>
        </Card.Body>
      </Card>

      {/* User says Yes */}
      <Card
        className="bg-primary mb-2"
        onClick={() => {
          setClicked(2)
        }}
        hidden={clicked < 1}
      >
        <Card.Body className='text-light'>
          <Card.Text>
            User: Yes, thanks. <br/>
            {(clicked < 2) ? "(Click this to speak it.)" : ""}
          </Card.Text>
        </Card.Body>
      </Card>

      {/* AI shows improved schedule */}
      <Card
        className="bg-secondary"
        hidden={clicked < 2}
      >
        <Card.Body className='text-light'>
          <Card.Text>
            <i className="bi bi-robot fs-2"></i> Assistant: <br/>
            I've made some changes and included time for relaxation. Should I apply these changes?
          </Card.Text>
        </Card.Body>
      </Card>

      <div style={{ textAlign: 'center' }} className='mb-2' hidden={clicked < 2}>
        <img
          src="/improved_schedule.PNG"
          alt="Today's Improved Schedule"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </div>
      
      {/* User accepts changes to schedule */}
      <Card
        className="bg-primary mb-2"
        onClick={() => setClicked(3)}
        hidden={clicked < 2}
      >
        <Card.Body className='text-light'>
          <Card.Text>
            User: Yes, that looks good. <br/>
            {(clicked < 3) ? "(Click this to speak it.)" : ""}
          </Card.Text>
        </Card.Body>
      </Card>

      {/* AI confirms changes to schedule */}
      <Card
        className="bg-secondary"
        hidden={clicked < 3}
      >
        <Card.Body className='text-light'>
          <Card.Text>
            <i className="bi bi-robot fs-2"></i> Assistant: <br/>
            I've updated your schedule. Let me know if you need anything else. I hope you have a great day! :)
          </Card.Text>
        </Card.Body>
      </Card>
    </ScrollableContainer>
  );
}

export default SchedulePage;
