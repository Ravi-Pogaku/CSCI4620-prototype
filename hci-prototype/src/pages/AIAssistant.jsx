import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollableContainer from '../components/ScrollableContainer';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';

const aiMessages = [
  "Good Morning! Hope you slept well. How can I help you today?",
  "Should I break it down into smaller tasks and integrate other acivities?",

]

const userMessages = [
  "What's my schedule for today?",
  "Yes",
]

function AIAssistant() {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = []

  // Create a list of message cards
  for (let i = 0; i < aiMessages.length; i++) {
    messages.push(
      <Card 
        key={"ai" + i}
        className='bg-secondary' 
        hidden={i > messageIndex}
      >
        <Card.Body className='text-light'>
          <Card.Text>
              AI: {aiMessages[i]}
          </Card.Text>
        </Card.Body>
      </Card>
    )

    messages.push(
      <Card 
        key={"user" + i}
        className='bg-primary' 
        hidden={i > messageIndex}
        onClick={() => setMessageIndex(i + 1)}
      >
        <Card.Body className='text-light'>
          <Card.Text>
              User: {userMessages[i]} <br/>
              {(i == messageIndex) ? "(Click this to speak it.)"  : ""}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
  

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
          width: '300px', // Adjust the size as needed
          height: '300px', // Ensures 1:1 ratio
          borderRadius: '10%', // Circular smartwatch display
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
          overflow: 'hidden', // Disable scrolling for now (can adjust as needed)
        }}
        className="overflow-hidden"
      >
        <Row className='m-3'>
          <Col>
            {messages}
          </Col>
        </Row>
      </ScrollableContainer>
    </div>
  );
}

export default AIAssistant;
