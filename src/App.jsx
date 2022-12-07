import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Profile from './pages/Profile'
import DigitalMarketing from './components/DigitalMarketing'
import Design from './components/Design'

function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} >
          <Route path='marketing' element={<DigitalMarketing/>}/>
          <Route path='design' element={<Design/>}/>
        </Route>
        <Route path='/profile/:name' element={<Profile/>} />
        <Route path='/about' element={<About/>} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
