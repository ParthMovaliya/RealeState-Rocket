import React, { useState } from 'react'
import "./header.css"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../Images/final-hd.png"
import { headerData, footerData } from '../../Data/headerData'
import { BiChevronsUp } from "react-icons/bi"

const Header = ({ children }) => {

    const [isOpen, setOpen] = useState(false);
    const changeOpen = () => setOpen(!isOpen);
    const location = useLocation();
    // isOpen
    //     ? (document.body.style.overflow = "hidden")
    //     : (document.body.style.overflow = "auto");
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

            <div className="footer">
                <div className="footer-contact">
                    <div className="left-text"><p>READY TO SELL? GET A NO OBLIGATION CASH OFFER IN MINUTES!</p>
                        {/* <div className="left-text-remain"></div> */}
                    </div>
                    <div className="right-text">
                        <div className="rifgt-call-info">CALL/TEXT US NOW</div>
                        <div className="right-call-number">786.250.1110</div>
                        <div className="right-call-number">786.471.7409</div>
                    </div>
                </div>
                <div className="footer-menu">
                    {
                        footerData.map((link) => {
                            //const isActive = location.pathname === link.to  ${isActive && "active"}
                            return (
                                <>
                                    <NavLink className="navLink-footer" to={link.to} key={link.key} >
                                        <div className="">{link.div}</div>
                                    </NavLink>
                                </>
                            )
                        })
                    }
                </div>
                <div className="copy-right">
                    Copyright © {new Date().getFullYear()} RealeState Rocket
                </div>
            </div>
        </div >
    )
}

export default Header