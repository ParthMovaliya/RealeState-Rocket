import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react'

import "./App.css"
import Home from './Components/Body/Home/Home'
import GetCashOffer from './Components/Body/GetCashOffer/GetCashOffer'
import Header from "./Components/Header/Header"
import HowItWorks from "./Components/Body/HowItWorks/HowItWorks"
import Buyers from "./Components/Body/Buyers/Buyers"
import Landers from "./Components/Body/Landers/Landers"
import PastSales from "./Components/Body/PastSales/PastSales"
import Questions from "./Components/Body/Questions/Questions"
import About from "./Components/Body/About/About"
import Testimonials from "./Components/Body/Testimonials/Testimonials"
import Contact from "./Components/Body/Contact/Contact"

const App = () => {

  return (
    <div>
      <Router>
        <Header>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/get-a-cash-offer' element={<GetCashOffer />} />
            <Route path='/how-it-works' element={<HowItWorks />} />
            <Route path='/buyers' element={<Buyers />} />
            <Route path='/landers' element={<Landers />} />
            <Route path='/past-sales' element={<PastSales />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/about' element={<About />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Header>
      </Router>
    </div>
  )
}

export default App