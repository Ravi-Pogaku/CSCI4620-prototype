import {Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Workouts from './pages/Workouts'


function App() {
  return (
    <div className='d-flex justify-content-center vw-100'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workouts' element={<Workouts />} />
      </Routes>
    </div>
  )
}

export default App
