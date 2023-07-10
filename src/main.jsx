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
import Empty from './pages/Empty/Empty.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
      <Router>
      <Header/>
        <Routes>
        <Route path="/" element ={<Empty title={"Home"}/>} />
        <Route path="/user/:idUser" element ={<Profil/>} />
        <Route path="/reglages" element ={<Empty title={"Réglages"}/>} />
        <Route path="/communaute" element ={<Empty title={"Communauté"}/>} />
        </Routes>
      </Router>
    <SideBar/>
  </React.StrictMode>,
)
