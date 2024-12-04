import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ScrollableContainer from "../components/ScrollableContainer";
import ActivityChart from "../components/ActivityChart";

export default function ActivityPage() {

    const dataCalories = [
        { day: 'M', calories: 400 },
        { day: 'T', calories: 300 },
        { day: 'W', calories: 200 },
        { day: 'T', calories: 278 },
        { day: 'F', calories: 189 },
        { day: 'S', calories: 239 }, 
        { day: 'S', calories: 349 }, 
    ];

    const dataDuration = [
        { day: 'M', duration: 40 },
        { day: 'T', duration: 30 },
        { day: 'W', duration: 20 },
        { day: 'T', duration: 28 },
        { day: 'F', duration: 18 },
        { day: 'S', duration: 23 }, 
        { day: 'S', duration: 34 }, 
    ];

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
                        <h3 style={{color: '#3F6634'}}>Activity Summary</h3>
                    </Col>
                </Row>
                <hr style={{margin:'0px',padding:'0px'}}></hr>
                <Row>
                    <Col>
                        <h4 style={{color: '#e25822'}}>Calories Burned</h4>
                    </Col>
                </Row>
                <Row style={{ width: '285px', height: '200px'}}>
                    <Col style={{marginLeft: '-30px'}}>
                        <ActivityChart data={dataCalories} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 style={{color: '#e25822'}}>Daily Avg: 300 Cals</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 style={{color: '#e25822'}}>Total: 2100 Cals</h5>
                    </Col>
                </Row>
                <hr style={{margin:'0px',padding:'0px'}}></hr>
                <Row>
                    <Col>
                        <h4 style={{color: '#58932D'}}>Duration</h4>
                    </Col>
                </Row>
                <Row style={{ width: '285px', height: '200px'}}>
                    <Col style={{marginLeft: '-30px'}}>
                        <ActivityChart data={dataDuration} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 style={{color: '#58932D'}}>Daily Avg: 28 min</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 style={{color: '#58932D'}}>Total: 196 min</h5>
                    </Col>
                </Row>
            </Container>
        </ScrollableContainer>
    )    
}