import React from 'react'
import Home from './Components/Body/Home/Home'
import GetCashOffer from './Components/Body/GetCashOffer/GetCashOffer'
import HowItWorks from "./Components/Body/HowItWorks/HowItWorks"
import Questions from "./Components/Body/Questions/Questions"
import About from "./Components/Body/About/About"
import Testimonials from "./Components/Body/Testimonials/Testimonials"
import Contact from "./Components/Body/Contact/Contact"
import HomeRepairEvolution from './Components/Body/HomeRepairEvolution/HomeRepairEvolution'

import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

const AnimateRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/get-a-cash-offer' element={<GetCashOffer />} />
                <Route path='/home-repair-evolution' element={<HomeRepairEvolution />} />
                <Route path='/how-it-works' element={<HowItWorks />} />
                <Route path='/questions' element={<Questions />} />
                <Route path='/about' element={<About />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimateRoutes