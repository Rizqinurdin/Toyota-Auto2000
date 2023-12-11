import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './component/ScrollToTop.jsx';
import { BrowserRouter } from "react-router-dom"

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
