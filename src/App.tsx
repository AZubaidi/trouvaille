import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { useEffect, useState } from 'react'
import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import Points from './pages/Points/Points'
import axios from 'axios'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Pins from './pages/Pins/Pins'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwtToken, setJwtToken] = useState<string>();
  const [favorites, setFavorites] = useState<number[]>([]);

  const addFavorite = (pointId : number) => {
    if (!isLoggedIn) return alert('Please login to add pins.');
    if (favorites.includes(pointId)) return;
     const postFavorite = async() => {
      const options = {
          headers: {
              Authorization:
                  `Bearer ${jwtToken}`,
              accept: "application/json",
          },
      };
      const body = {
        'point_id': pointId,
      }
      const res = await axios.post('http://localhost:8080/api/favorites',body, options)
      const newFav = [...favorites, pointId];
      setFavorites(newFav);
      console.log('favorites: ',favorites);
    }
    postFavorite();
  }

  const deleteFavorite = (pointId : number) => {
    if (!isLoggedIn) return alert('Please login to remove pins.');
    if (!favorites.includes(pointId)) return;
     const deleteFav = async() => {
      const options = {
          headers: {
              Authorization:
                  `Bearer ${jwtToken}`,
              accept: "application/json",
          },
      };
      const body = {
        'point_id': pointId,
      }
      const res = await axios.delete(`http://localhost:8080/api/favorites/${pointId}`, options)
      const newFav = favorites.filter(point => point !== pointId);
      setFavorites(newFav);
      console.log('favorites: ',favorites);
    }
    deleteFav();
  }

  const checkFavorites = (pointId : number) => {
    return favorites.includes(pointId);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      setIsLoggedIn(true);
      setJwtToken(token);
    }
    if (!isLoggedIn) return;
    const getFavorites = async() => {
      const options = {
          headers: {
              Authorization:
                  `Bearer ${jwtToken}`,
              accept: "application/json",
          },
      };
      const res = await axios.get('http://localhost:8080/api/favorites', options);
      const data = res.data;
      const favArray = [];
      for (let i = 0; i < data.length; i++) {
        favArray.push(data[i].point_id);
      }
      setFavorites(favArray);
      console.log(favorites);
    }
    getFavorites();
  }, [])

  return (
    <>
    <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setJwtToken={setJwtToken}
    />
      <Routes>
        <Route
          path = '/'
          element = { Homepage({addFavorite, deleteFavorite, checkFavorites}) }
        />
        <Route
          path = '/points'
          element = { 
            Points({addFavorite, deleteFavorite, checkFavorites})
          }
        />
        <Route
          path = '/pins'
          element = { 
            Pins({isLoggedIn, checkFavorites, addFavorite, deleteFavorite, favorites })
          }
        />
      </Routes>
    </>
  )
}

export default App
