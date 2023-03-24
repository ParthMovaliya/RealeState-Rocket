import React from 'react'
import "./home.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import img1 from "../../Images/1_call.png"
import img2 from "../../Images/2_chat.png"
import img3 from "../../Images/3_money.png"
import img4 from "../../Images/4_pay.png"
import img5 from "../../Images/5_file.png"
import { Col, Row } from "antd"
import { zoomIn } from '../../motion'

const Home = () => {

    return (
        <>
            <motion.div className='home'

                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
                <div className="home-front-container">
                    <motion.div className="head-front-left"
                        initial={{ opacity: 1, x: -300 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
                    >
                        <div className="head-main-title">
                            SELL YOUR HOUSE FAST MIAMI, FLORIDA & SURROUNDING AREAS
                        </div>
                        <div className="head-sub-title">
                            We'll handle all necessary repairs. We Buy Houses in "As Is" Condition. Get an all CASH offer now!
                        </div>
                        <div className="head-sub-title">
                            We close in as little as 14 days. No closing cost. No realtors. No hassles.
                        </div>
                        <div className="head-sub-last">
                            JUST FILL OUT THIS SIMPLE FORM
                        </div>
                    </motion.div>
                    <motion.div className="head-front-right"
                        initial={{ opacity: 1, x: 300 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
                    >
                        <div className="top-contact">
                            <div className="top-contact-info">
                                <div className="top-contact-text">CALL/TEXT US NOW</div>
                                <div className="top-contact-numbers">
                                    <div className="top-contact-number">7862501110/7864717409</div>
                                </div>
                            </div>
                        </div>
                        <div className="top-container-right-form">
                            <p className="head-form-title">GET A CASH OFFER ON YOUR HOUSE</p>
                            <div className="home-page-decoration">
                                <Link to="/get-a-cash-offer" className="button-82-pushable">
                                    <span className="button-82-shadow"></span>
                                    <span className="button-82-edge"></span>
                                    <span className="button-82-front text">
                                        GET A CASH OFFER
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* </div> */}

                {/* ================================================== */}
                <motion.div className="home-sell-easy-steps-container-for-motion"
                >
                    <motion.div className="home-container-title"
                        variants={zoomIn("spring", 0, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >Sell Your House Fast in a Few Easy Steps</motion.div>

                    <Row className="sell-steps-container">

                        <Col xs={24} md={8} lg={6} className="home-sell-step">
                            <motion.div className=""
                                variants={zoomIn("spring", 0, 0.5)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <div className="home-sell-step-img">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="home-sell-step-info">
                                    Call/Text Us at 7862501110/7864717409
                                </div>
                            </motion.div>
                        </Col>
                        <Col xs={24} md={8} lg={6} className="home-sell-step">
                            <motion.div className=""
                                variants={zoomIn("spring", 0, 0.5)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <div className="home-sell-step-img">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="home-sell-step-info">
                                    Tell Us About your House
                                </div>
                            </motion.div>
                        </Col>
                        <Col xs={24} md={8} lg={6} className="home-sell-step">
                            <motion.div className=""
                                variants={zoomIn("spring", 0, 0.5)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <div className="home-sell-step-img">
                                    <img src={img4} alt="" />
                                </div>
                                <div className="home-sell-step-info">
                                    Get an instant Offer
                                </div>
                            </motion.div>
                        </Col>
                        <Col xs={24} md={8} lg={6} className="home-sell-step">
                            <motion.div className=""
                                variants={zoomIn("spring", 0, 0.5)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <div className="home-sell-step-img">
                                    <img src={img5} alt="" />
                                </div>
                                <div className="home-sell-step-info">
                                    Sign & return your sale contract*
                                </div>
                            </motion.div>
                        </Col>
                        <Col xs={24} md={8} lg={6} className="home-sell-step">
                            <motion.div className=""
                                variants={zoomIn("spring", 0, 0.5)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <div className="home-sell-step-img">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="home-sell-step-info">
                                    Close and quickly get your Cash
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                    <div className="sell-house-container-button">
                        <Link to="/get-a-cash-offer" className="button-82-pushable " >
                            <span className="button-82-shadow"></span>
                            <span className="button-82-edge"></span>
                            <span className="button-82-front text">
                                GET A CASH OFFER
                            </span>
                        </Link>
                    </div>
                </motion.div>
                {/* ================================================== */}
                <div className="home-container-alternative">
                    <motion.div className="home-container-title-alternative"
                        variants={zoomIn("spring", 0, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >Do You Need To Sell Your House?</motion.div>
                    <motion.div className="sell-house-testimonial"
                        variants={zoomIn("spring", 0, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}>
                        <div className="sell-house-testi-left">
                            <p>
                                We buy houses in Atlanta, Ga and all across the state of Georgia and surrounding areas in “As Is” condition, with no closing cost or realtor commissions, quickly and easily. Are you tired of managing your rental property? Unable to pay for the repairs on your ugly house? Going through a divorce or separation? Facing Bankruptcy, job loss, or having health issues? Or do you just need extra cash fast? Sell your house to Property Jet Real Estate Solutions.
                            </p>
                            <p style={{ fontWeight: 800 }}>
                                Sell us your house Atlanta, GA
                            </p>
                            <p>
                                No matter what the situation you’re going through we can help. We help owners every day with their unwanted properties or vacant house. Even if you live out of town we can still help.
                            </p>
                        </div>
                        <div className="sell-house-testi-right">dfgajksdfgajshdfg</div>
                    </motion.div>
                    <motion.div className="home-container-title-alternative"
                        variants={zoomIn("spring", 0, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >Here are some of the most common Reasons to Sell:</motion.div>
                    <motion.div className="some-reason-container"
                        variants={zoomIn("spring", 0, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <div className="reson-type">Vacant House</div>
                        <div className="reson-type">Divorce or Separation</div>
                        <div className="reson-type">Unable to Sell</div>
                        <div className="reson-type">Making 2 House Payments</div>
                        <div className="reson-type">House Needs Repairs</div>
                        <div className="reson-type">Relocating</div>
                        <div className="reson-type">Behind On Payments</div>
                        <div className="reson-type">Have Bad Tenants</div>
                        <div className="reson-type">Liens</div>
                        <div className="reson-type">Estate Sale</div>
                        <div className="reson-type">Owe Back Taxes</div>
                        <div className="reson-type">Listing Expired</div>
                        <div className="reson-type">Fire Damage</div>
                        <div className="reson-type">Structural Issues</div>
                        <div className="reson-type">Lost Your Job</div>
                        <div className="reson-type">Need Cash Now</div>
                        <div className="reson-type">Down Sizing</div>
                        <div className="reson-type">Inheritance</div>
                        <div className="reson-type">Health Problems</div>
                    </motion.div>
                    <motion.div className="home-container-title-alternative"
                        variants={zoomIn("spring", 0, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >Sell Your House in As Little as 14 Days!</motion.div>
                    <motion.div className="home-page-last-container"
                        variants={zoomIn("spring", 0, 0.5)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <p>
                            By the way, you’re not obligated to sell your home to us if we make you an offer, and we don’t charge any fees, ever. Our process is fast, easy, and won’t cost you a thing. So what do you have to lose? Give us a Call/Text at 7862501110/ 7864717409 or submit your information through our simple form to get a fair cash offer in minutes!
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default Home