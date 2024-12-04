import {Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import AIAssistant from './pages/AIAssistant'
import Lockscreen from './pages/Lockscreen'
import WorkoutPage from './pages/WorkoutPage'
import SchedulePage from './pages/SchedulePage.jsx'
import MapPage from './pages/MapPage.jsx'
import TimePage from './pages/TimePage.jsx';
import ActivityPage from './pages/ActivityPage.jsx'



function App() {
  return (
    <div className='d-flex justify-content-center vw-100'>
      <Routes>
        <Route path='/' element={<Lockscreen />} />
        <Route path='/workouts' element={<Workouts />} />
        <Route path='/ai-assistant' element={<AIAssistant />} />
        <Route path='/home' element={<Home />} />
        <Route path='/workouts/start-workout' element={<WorkoutPage />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/time' element={<TimePage />} />
        <Route path='/schedule' element={<SchedulePage />} />
        <Route path='/activity' element={<ActivityPage />} />
      </Routes>
    </div>
  )
}

export default App
