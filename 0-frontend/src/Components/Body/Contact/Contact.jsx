import React from 'react'
import "./contact.css"
import { Form, Input, message } from "antd"
import TextArea from 'antd/es/input/TextArea'
import { GoMail } from "react-icons/go"
import { FiPhoneCall } from "react-icons/fi"
import logo from "../../Images/final-hd.png"


const Contact = () => {
    const onFinishHandler = (values) => {
        console.log(values)
    }
    return (
        <>
            <div className='page-title'><p>CONTACT US</p></div>
            <div className='contact-page'>
                <div className="steps-heading">Get in Touch With Real-Estate Rocket</div>
                <div className="contact-info">
                    <div className="contact-info-left">
                        <p className="contact-form-title">LET'S GET STARTED!</p>
                        <Form onFinish={onFinishHandler} layout="vertical" >
                            <Form.Item label="Your Name*" name="firstName">
                                <Input type="text" required placeholder='Name' />
                            </Form.Item>
                            <Form.Item label="Your Email*" name="firstName">
                                <Input type="email" required placeholder='Property Address' />
                            </Form.Item>
                            <Form.Item label="Phone No." name="firstName">
                                <Input type="number" required placeholder='Phone Number' />
                            </Form.Item>
                            <Form.Item label="Message" name="firstName">
                                <TextArea rows={4} />
                            </Form.Item>
                            <div className="">
                                <button type="submit">SUBMIT</button>
                            </div>
                        </Form>
                    </div>
                    <div className="contact-info-right">
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
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact