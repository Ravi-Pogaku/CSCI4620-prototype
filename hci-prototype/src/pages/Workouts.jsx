import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react';

import Button from 'react-bootstrap/Button';

import StatusBar from '../components/StatusBar';

import {
        faPersonBiking, 
        faPersonRunning, 
        faSwimmer, 
        faPersonWalking,
        faPersonSkating,
        faPersonSnowboarding,
        faPersonSkiing,
        faDumbbell
    } from '@fortawesome/free-solid-svg-icons';

import ScrollableContainer from '../components/ScrollableContainer';
import WorkoutComponent from '../components/WorkoutComponent';

export default function Workouts() {

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
        

        {/* these are the placeholders because this is the only icons i could find easily  */}
        <h5>Workouts</h5>
        <WorkoutComponent workoutName="Walking" duration={20} icon={faPersonWalking} />
        <WorkoutComponent workoutName="Running" duration={30} icon={faPersonRunning} />
        <WorkoutComponent workoutName="Cycling" duration={15} icon={faPersonBiking} />
        <WorkoutComponent workoutName="Weightlifting" duration={60} icon={faDumbbell} />
        <WorkoutComponent workoutName="Swimming" duration={10} icon={faSwimmer} />
        <WorkoutComponent workoutName="Skating" duration={25} icon={faPersonSkating} />
        <WorkoutComponent workoutName="Snowboarding" duration={40} icon={faPersonSnowboarding} />
        <WorkoutComponent workoutName="Skiing" duration={45} icon={faPersonSkiing} />

        <div className="d-flex align-items-center justify-content-center vw-80 pt-2"
            style={
                {
                    marginLeft: '10px',
                    marginRight: '10px', 
                }
            }>
            <Button
                variant="success"
                className='vw-100'
                style={{
                    // width: '150px',
                    height: '70px',
                    borderRadius: '50%',
                    // marginLeft: '75px',
                    // marginRight: '75px',
                }}
            >
                Add Workout
            </Button>
        </div>

    </ScrollableContainer>
    )


}