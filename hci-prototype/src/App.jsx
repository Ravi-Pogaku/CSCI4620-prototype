import {Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import AIAssistant from './pages/AIAssistant'
import SchedulePage from './pages/SchedulePage.jsx'
import MapPage from './pages/MapPage.jsx'
import TimePage from './pages/TimePage.jsx';



function App() {
  return (
    <div className='d-flex justify-content-center vw-100'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Workouts.jsx' element={<Workouts />} />
        <Route path='/AIAssistant.jsx' element={<AIAssistant />} />
        <Route path='/SchedulePage.jsx' element={<SchedulePage />} />
        <Route path='/MapPage.jsx' element={<MapPage />} />
        <Route path='/TimePage.jsx' element={<TimePage />} />
      </Routes>
    </div>
  )
}

export default App