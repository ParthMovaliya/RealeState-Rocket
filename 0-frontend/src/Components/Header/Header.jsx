// import React from 'react'
// import "./header.css"

// const Header = () => {
//     return (
//         <div className='header'>Header</div>
//     )
// }

// export default Header

// import "./header.css"
// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// function Header() {
//     const navRef = useRef();

//     const showNavbar = () => {
//         navRef.current.classList.toggle(
//             "responsive_nav"
//         );
//     };

//     return (
//         <header>
//             <h3>LOGO</h3>
//             <nav ref={navRef}>
//                 <a href="/">Home</a>
//                 <a href="/GetCashOffer">My work</a>
//                 <a href="/#">Blog</a>
//                 <a href="/#">About me</a>
//                 <button
//                     className="nav-btn nav-close-btn"
//                     onClick={showNavbar}>
//                     <FaTimes />
//                 </button>
//             </nav>
//             <button
//                 className="nav-btn"
//                 onClick={showNavbar}>
//                 <FaBars />
//             </button>
//         </header>
//     );
// }

// export default Header;

import React, { useState } from 'react'
import "./header.css"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../Images/final-hd.png"
import { headerData } from '../../Data/headerData'
import { BiChevronsUp } from "react-icons/bi"

const Header = ({ children }) => {

    const [isOpen, setOpen] = useState(false);
    const changeOpen = () => setOpen(!isOpen);
    const location = useLocation();

    return (
        <div>
            <nav>
                <div className='lines' onClick={changeOpen}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className='navbar_content'>
                    {/* className={isOpen ? 'reTitle title' : "title"} */}
                    <NavLink className='title' to="/" key="logo">
                        <img src={logo} alt='RealeState Rocket' className='logo' />
                    </NavLink>
                    <div className={isOpen ? 'open hamburger' : 'hamburger'}>
                        {
                            headerData.map((link) => {
                                const isActive = location.pathname === link.to
                                return (
                                    <>
                                        <NavLink className="navLink " to={link.to} key={link.key} onClick={changeOpen}>
                                            <div className={`hoverClr ${isActive && "active"}`}>{link.div}</div>
                                            <div className={`${isActive ? "indicator" : "hidden-indicator"}`} ><BiChevronsUp /></div>
                                        </NavLink>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </nav >
            <div className='child'>
                <main className="main">{children}</main>
            </div>
        </div >
    )
}

export default Header