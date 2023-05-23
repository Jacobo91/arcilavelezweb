import './App.css'
import Navbar from '../components/Navbar'
import Home from '../pages/home/Home'
import Penal from '../pages/penal/Penal'
import Familia from '../pages/familia/Familia'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <main>
      <Navbar />
      <Routes>
        <Route  path='/'  element={<Home />} />
        <Route  path='/inicio'  element={<Home />} />
        <Route path='/penal'  element={<Penal />} />
        <Route path='/familia'  element={<Familia />} />
      </Routes>
    </main>
  )
}

export default App
