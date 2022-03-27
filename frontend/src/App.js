import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import HallScreen from './screens/HallScreen'
import HallSeats from './components/HallSeats'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/hall/:id' element={<HallScreen />} />
          <Route path='/hall/:id/:movieid' element={<HallSeats />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
