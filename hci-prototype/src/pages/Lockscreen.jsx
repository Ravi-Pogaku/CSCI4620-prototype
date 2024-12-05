import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

import ScrollableContainer from '../components/ScrollableContainer';


export default function Lockscreen() {
  const navigate = useNavigate();

  const [enteredNumbers, setEnteredNumbers] = useState(['_ ', '_ ', '_ ', '_ ']);

  const handleNumberClick = (number) => {
    const newNumbers = [...enteredNumbers];
    const emptyIndex = newNumbers.indexOf('_ ');
    if (emptyIndex !== -1) {
      newNumbers[emptyIndex] = number + ' ';
      setEnteredNumbers(newNumbers);
    }
  }

  const handleDelete = () => { 
    const newNumbers = [...enteredNumbers];
    const index = newNumbers.indexOf('_ ');
    if (index === -1) {
      newNumbers[newNumbers.length - 1] = '_ ';
      setEnteredNumbers(newNumbers);
    } else {
      newNumbers[index - 1] = '_ ';
      setEnteredNumbers(newNumbers);
    }
  }

  // if all numbers are entered, navigate to home
  useEffect(() => {
    if (enteredNumbers.indexOf('_ ') === -1) {
      navigate('/home');
    }
  }, [enteredNumbers]);

  // array of numbers for the keypad
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [null, 0, 'delete']
  ];

  return (
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
        className="overflow-hidden"
      >
      <Container>
        {/* <Row>
          <Col> */}
            <h3>Enter Pin</h3>
            {/* <Container> */}
              <div className="mb-2 mx-1">{enteredNumbers}</div>
              <Container className="">
                {numbers.map((row, rowIndex) => (
                  <Row key={rowIndex}>
                    {row.map((num, colIndex) => (
                      <Col key={colIndex} style={{padding: '2px'}}>
                        {num === 'delete' ? (
                          <Button variant="outline-light" onClick={handleDelete} style={{width:'100%'}}>
                            <FontAwesomeIcon icon={faDeleteLeft} />
                          </Button>
                        ) : num !== null ? (
                          <Button variant="outline-light" onClick={() => handleNumberClick(num)} style={{width:"100%"}}>
                            {num}
                          </Button>
                        ) : null}
                      </Col>
                    ))}
                  </Row>
                ))}
              </Container>
            {/* </Container> */}
          {/* </Col>
        </Row> */}
      </Container>
    </ScrollableContainer>
  );
};

