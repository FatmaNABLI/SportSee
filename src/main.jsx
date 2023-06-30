import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
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
        <Route path="/:idUser" element ={<Home/>} />
        </Routes>
      </Router>
    <SideBar/>
  </React.StrictMode>,
)
