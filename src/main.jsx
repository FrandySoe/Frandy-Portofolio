import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'

import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Loader/>
    <div className="container px-4 mx-auto">
      <Navbar/>
      <App />
      <Footer></Footer>
    </div>
    
  </StrictMode>,
)
