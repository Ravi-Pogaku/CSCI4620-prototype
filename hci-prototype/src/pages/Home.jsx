import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ScrollableContainer from '../components/ScrollableContainer';

function Home() {

  
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
        {/* Grid for home screen icons */}
        <div className="d-flex flex-wrap align-items-center">
          <div
            style={{ height: 75, width: 75 }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
          >
            <i className="bi-alarm fs-2"></i>
          </div>
          <img className="rounded-circle p-1" src="https://via.placeholder.com/75" alt="Icon 2" />
          <img className="rounded-circle p-1" src="https://via.placeholder.com/75" alt="Icon 3" />
          <img className="rounded-circle p-1" src="https://via.placeholder.com/75" alt="Icon 4" />
          <div
            style={{ height: 75, width: 75 }}
            className="bg-secondary rounded-circle d-flex flex-shrink-0 justify-content-center align-items-center"
          >
            <i className="bi-alarm fs-2"></i>
          </div>
          <img className="rounded-circle p-1" src="https://via.placeholder.com/75" alt="Icon 2" />
          <img className="rounded-circle p-1" src="https://via.placeholder.com/75" alt="Icon 3" />
          <img className="rounded-circle p-1" src="https://via.placeholder.com/75" alt="Icon 4" />
        </div>
      </ScrollableContainer>
    );
}

export default Home