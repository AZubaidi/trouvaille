import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route
          path = '/'
          element = { Homepage() }
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
