
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    // Hide the navigation buttons on the home screen
    const hideButtons = ['/', '/home', '/workouts/start-workout'].includes(location.pathname);

    return (
        <div
            style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                width: '100%', // Match container width
                height: '30px', // Fixed height for bottom bar
                // padding: '10px',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-between', // Evenly space buttons
                alignItems: 'center',
                fontSize: '18px',
                position: 'sticky', // Sticky inside the container
                bottom: 0, // Stick to the top of the scrollable area
                zIndex: 10, // Ensure it's above other content
                // pointerEvents: 'none', // Allow clicks to pass through
            }}
        >
            {/* Back Button */}
            {!hideButtons && [
            <i 
                key="back"
                className="bi bi-arrow-left-circle-fill"
                onClick={() => navigate(-1)}
            ></i>,
            
            <i 
                key="home"
                className="bi bi-house-fill"
                onClick={() => navigate('/home')}
            ></i>
            ]}
            
        </div>
    );
}

export default NavBar;