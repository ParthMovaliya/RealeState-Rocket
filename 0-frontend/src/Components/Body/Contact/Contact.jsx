import React from 'react'
import "./contact.css"
import { Form, Input, message } from "antd"
import TextArea from 'antd/es/input/TextArea'
import { GoMail } from "react-icons/go"
import { FiPhoneCall } from "react-icons/fi"
import logo from "../../Images/final-hd.png"
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../../redux/features/sendSlice'
import axios from 'axios'
import { motion } from "framer-motion"
import { } from "../../motion";

const Contact = () => {
    const dispatch = useDispatch();
    const onFinishHandler = async (values) => {
        dispatch(showLoading());
        try {
            const res = await axios.post("api/v1/contact", values);
            dispatch(hideLoading());
            if (res.data.success) {
                message.success(res.data.message);
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error("Somethig Went Wrong");
        }
    }
    return (
        <>
            <motion.div className='page-title'
                // initial={{ width: 0 }}
                // animate={{ width: "100%" }}
                // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
                initial={{}}
                animate={{}}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            ><p>CONTACT US</p></motion.div>
            <motion.div className='contact-page'
                initial={{}}
                animate={{}}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
                <motion.div className="steps-heading"
                >Get in Touch With Real-Estate Rocket</motion.div>
                <div className="contact-info">
                    <motion.div className="contact-info-left"
                        initial={{ opacity: 1, x: -300 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
                        exit={{ opacity: 0, x: -300, transition: { duration: 0.3 } }}
                    >
                        <p className="contact-form-title">LET'S GET STARTED!</p>
                        <Form onFinish={onFinishHandler} layout="vertical" className='contact-form'>
                            <Form.Item label="Your Name" name="name" className='Item' rules={[
                                {
                                    required: true,
                                    message: 'Missing Name',
                                },
                            ]}>
                                <Input type="text" required placeholder='Name' className='Input' />
                            </Form.Item>
                            <Form.Item label="Your Email" name="eame" className='Item' rules={[
                                {
                                    required: true,
                                    message: 'Missing Email',
                                },
                            ]}>
                                <Input type="email" required placeholder='Property Address' className='Input' />
                            </Form.Item>
                            <Form.Item label="Phone No." name="phoneNumber" className='Item' rules={[
                                {
                                    required: true,
                                    message: 'Missing Phone Number',
                                },
                            ]}>
                                <Input type="number" required placeholder='Phone Number' className='Input' />
                            </Form.Item>
                            <Form.Item label="Message" name="message" className='Item' rules={[
                                {
                                    required: true,
                                    message: 'Missing Message',
                                },
                            ]}>
                                <TextArea rows={4} className="TextArea" placeholder='Your Message' />
                            </Form.Item>
                            <div className="contact-button-container">
                                <button type="submit" className='contact-button'>SUBMIT</button>
                            </div>
                        </Form>
                    </motion.div>
                    <motion.div className="contact-info-right"
                        initial={{ opacity: 1, x: 300 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
                        exit={{ opacity: 0, x: 300, transition: { duration: 0.3 } }}
                    // viewport={{ once: false }}
                    >
                        <p>CONTACT US</p>

                        <div className="contact-info-right-text">
                            <div className="contact-info-type">
                                <div className="contact-info-icon">
                                    <FiPhoneCall />
                                </div>
                                <div className="contact-info-text">786.250.1110</div>
                            </div>
                            <div className="contact-info-type">
                                <div className="contact-info-icon">
                                    <FiPhoneCall />
                                </div>
                                <div className="contact-info-text">786.471.7409</div>

                            </div>
                            <div className="contact-info-type">
                                <div className="contact-info-icon">
                                    <GoMail />
                                </div>
                                <div className="contact-info-text">info@therealestaterocket.com</div>
                            </div>
                        </div>

                        <div className="contact-info-logo">
                            <img src={logo} alt='RealeState Rocket' className='contact-logo' />
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </>
    )
}

export default Contact