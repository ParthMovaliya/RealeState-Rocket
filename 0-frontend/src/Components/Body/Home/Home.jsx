import React from 'react'
import "./home.css"
import { Form, Input } from "antd"
import { motion } from "framer-motion"

const Home = () => {
    const onFinishHandler = (values) => {
        console.log(values)
    }
    return (
        <>
            {/* <div className='page-title'><p>HOME</p></div> */}
            <motion.div className='home'
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
            >
                <div className="home-front">
                    <div className="head-front-left">
                        <p className="head-main-title">
                            SELL YOUR HOUSE FAST ATLANTA, GA & SURROUNDING AREAS
                        </p>
                        <p className="head-sub-title">
                            We'll handle all necessary repairs. We Buy Houses in "As Is" Condition. Get an all CASH offer now!
                        </p>
                        <p className="head-sub-title">
                            We close in as little as 14 days. No closing cost. No realtors. No hassles.
                        </p>
                        <p className="head-sub-last">
                            JUST FILL OUT THIS SIMPLE FORM
                        </p>
                    </div>
                    <div className="head-front-right">
                        <div className="top-contact">
                            <div className="top-contact-info">
                                <div className="top-contact-text">CALL/TEXT US NOW</div>
                                <div className="top-contact-numbers">
                                    <div className="top-contact-number">7862501110</div>
                                    <div className="top-contact-number">7864717409</div>
                                </div>
                            </div>
                        </div>
                        <div className="top-container-right-form">
                            <p className="head-form-title">GET A CASH OFFER ON YOUR HOUSE</p>
                            <Form onFinish={onFinishHandler} layout="vertical" >
                                <Form.Item name="firstName">
                                    <Input type="text" required placeholder='Name' />
                                </Form.Item>
                                <Form.Item name="firstName">
                                    <Input type="text" required placeholder='Property Address' />
                                </Form.Item>
                                <Form.Item name="firstName">
                                    <Input type="text" required placeholder='Phone Number' />
                                </Form.Item>
                                <Form.Item name="firstName">
                                    <Input type="text" required placeholder='Email' />
                                </Form.Item>
                                <div className="">
                                    <button type="submit">Get a Cash Offer!</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Home