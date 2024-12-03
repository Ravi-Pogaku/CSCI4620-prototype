import {Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import AIAssistant from './pages/AIAssistant'


function App() {
  return (
    <div className='d-flex justify-content-center vw-100'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workouts' element={<Workouts />} />
        <Route path='/ai-assistant' element={<AIAssistant />} />
      </Routes>
    </div>
  )
}

export default App