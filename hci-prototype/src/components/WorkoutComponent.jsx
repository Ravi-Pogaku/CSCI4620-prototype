import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/workout.css'

export default function WorkoutComponent ({workoutName, duration, icon}) {
    const navigate = useNavigate();

    const [isPressed, setIsPressed] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // we pressed on the card and we are not dragging
    const handleMouseDown = () => { 
        setIsPressed(true);
        setIsDragging(false);
    };

    // we are moving the mouse 
    // if we are pressing the card, we are dragging it
    const handleMouseMove = () => {
        if (isPressed) {
            setIsDragging(true);
            setIsPressed(false);
        }
    };

    // we released the mouse button
    // if we are not dragging, we are not pressing the card anymore
    const handleMouseUp = () => {
        if (!isDragging) {
            setIsPressed(false);
        } 
    };

    // if we clicked on the card and we are not dragging, navigate to the workout page
    const handleClick = () => {
        if (!isDragging) {
            navigate('/workouts/start-workout', {state: {workoutName, duration}});
        }
    }

    return (
        <Card className={`d-flex align-items-center justify-content-between p-2 vw-80 ${isPressed ? 'pressed' : ''}`}
        style={{
            backgroundColor: '#3F6634',
            color: '#ffffff',
            height: '70px',
            marginLeft: '10px',
            marginRight: '10px',
            marginBottom: '2px',
            // borderRadius: '10%', 
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} 
            onClick={handleClick}
        >
            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={icon} size="2x" />
                <div className="ms-2">
                    <h6 className="mb-0">{workoutName}</h6>
                    <p className="mb-0">
                        <small>Duration: {duration} minutes</small>
                    </p>
                </div>
            </div>
        </Card>

    );
};
