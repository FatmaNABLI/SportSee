import React from 'react'
import ReactDOM from 'react-dom/client'
import Profil from './pages/Profil/Profil.jsx'
import './index.css'
import Header from './components/header/Header.jsx'
import SideBar from './components/sidebar/SideBar.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header/>
      <Router>
        <Routes>
        <Route path="/:idUser" element ={<Profil/>} />
        </Routes>
      </Router>
    <SideBar/>
  </React.StrictMode>,
)
