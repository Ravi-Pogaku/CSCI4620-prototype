import {Container, Row, Col, Button} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ScrollableContainer from '../components/ScrollableContainer';

import {
    faCirclePause,
    faCirclePlay,
    faCircleStop,
    faFire,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WorkoutPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const {workoutName, duration} = location.state ? location.state : {workoutName: 'Walking', duration: 20};

    const [caloriesBurned, setCaloriesBurned] = useState(0);

    const [currentDuration, setCurrentDuration] = useState(duration * 60); // in seconds
    const [isActive, setIsActive] = useState(true); // timer paused or not

    useEffect(() => {
        let interval;
        if (isActive) { // only if tiemr not paused
            interval = setInterval(() => {
                setCurrentDuration(prevDuration => prevDuration > 0 ? prevDuration - 1 : 0);
                setCaloriesBurned(prevCalories => prevCalories + 0.1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    // format the time in HH:MM:SS
    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleResume = () => {
        setIsActive(true);
    };

    return (
        <ScrollableContainer
            style={{
                backgroundColor: '#121212',
                color: '#ffffff',
                width: '300px', // Adjust the size as needed
                height: '300px', // Ensures 1:1 ratio
                padding: '20px',
                borderRadius: '10%', // Optional for a circular smartwatch display
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Subtle shadow effect
                overflow: 'auto',
            //   cursor: 'grab', // Indicates that the container can be dragged
            }}
            className="overflow-hidden"
        >  
            <Container>
                <Row>
                    <Col>
                        <h1 style={{color: '#3F6634'}}>{workoutName}</h1>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col style={{width: '155px', flex: '0 0 155px'}}>
                        <h2 style={{color: '#58932D', fontSize: '2.25rem'}}>{formatTime(currentDuration)}</h2>
                    </Col>
                    <Col>
                        <FontAwesomeIcon 
                            style={{color: '#58932D', fontSize: '2.25rem'}}
                            icon={isActive ? faCirclePause : faCirclePlay} 
                            onClick={isActive ? handlePause : handleResume} 
                        />
                    </Col>
                </Row>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col style={{width: '155px', flex: '0 0 155px'}}>
                        <h2 style={{color: '#e25822', fontSize: '2.25rem' ,whiteSpace: 'nowrap'}}>{caloriesBurned.toFixed(0)} Cals</h2>
                    </Col>
                    <Col>
                        <FontAwesomeIcon style={{color: '#e25822', fontSize: '2.25rem'}} icon={faFire} />
                    </Col>
                </Row>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col style={{width: '155px', flex: '0 0 155px'}}>
                        <h2 style={{color: '#e25822', fontSize: '2.25rem' ,whiteSpace: 'nowrap'}}>120 BPM</h2>
                    </Col>
                    <Col>
                        <FontAwesomeIcon style={{color: 'red', fontSize: '2.25rem'}} icon={faHeart} />
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon 
                            style={{color: '#BF565A', fontSize: '3rem'}} 
                            icon={faCircleStop} 
                            onClick={() => navigate('/workouts')}
                        />
                    </Col>
                </Row>
            </Container>
        </ScrollableContainer>
    )    

}