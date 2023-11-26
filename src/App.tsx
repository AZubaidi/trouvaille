import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { useState } from 'react'
import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import Points from './pages/Points/Points'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwtToken, setJwtToken] = useState(null);
  const props = {
    setIsLoggedIn: setIsLoggedIn,
    setJwtToken: setJwtToken,
  }

  return (
    <>
    <Header
        setIsLoggedIn={setIsLoggedIn}
        setJwtToken={setJwtToken}
    />
      <Routes>
        <Route
          path = '/'
          element = { Homepage() }
        />
        <Route
          path = '/points'
          element = { Points() }
        />
      </Routes>
    </>
  )
}

export default App
