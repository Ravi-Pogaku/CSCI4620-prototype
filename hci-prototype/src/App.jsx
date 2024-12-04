import {Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import AIAssistant from './pages/AIAssistant'
import SchedulePage from './pages/SchedulePage.jsx'
import MapPage from './pages/MapPage.jsx'
import TimePage from './pages/TimePage.jsx';



function App() {
  const currentPath = window.location.pathname; // Get the current URL path

  const renderPage = () => {
    switch (currentPath) {
      case '/AIAssistant.jsx': // If the path is /AIAssistant.jsx, render AIAssistant
        return <AIAssistant />;
      default: // Default to Home for any other path
        return <Home />;
    }
  };

  return (
    <div className='d-flex justify-content-center vw-100'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Workouts' element={<Workouts />} />
        <Route path='/AIAssistant' element={<AIAssistant />} />
        <Route path='/SchedulePage' element={<SchedulePage />} />
        <Route path='/MapPage' element={<MapPage />} />
        <Route path='/TimePage' element={<TimePage />} />
      </Routes>
    </div>
  )
}

export default App
