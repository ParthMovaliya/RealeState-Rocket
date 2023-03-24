import React from 'react'
import { Col, Form, Input, message, Row, Select } from "antd"
import TextArea from 'antd/es/input/TextArea'
import axios from "axios"
import { useDispatch } from "react-redux"
import { showLoading, hideLoading } from '../../../redux/features/sendSlice'
import { motion } from "framer-motion"
import "./getCashOffer.css"

const GetCashOffer = () => {
    const dispatch = useDispatch();
    const onFinishHandler = async (values) => {
        console.log(values)
        dispatch(showLoading());
        try {
            const res = await axios.post("/api/v1/get-a-cash-offer", values);
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
                initial={{}}
                animate={{}}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            ><p>GET A CASH OFFER</p></motion.div>
            <motion.div className='getCashOffer'
                initial={{}}
                animate={{}}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
                <motion.div className="steps-heading"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                >Let's Get Started</motion.div>
                <motion.div className="asd"
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                    <Form onFinish={onFinishHandler} layout="vertical" className='Form'>
                        <p className="form-inside-information-label">CONTACT INFORMATION</p>
                        <Row gutter={40}>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="First Name" name="firstName"
                                    className='Item'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing First Name',
                                        },
                                    ]}>
                                    <Input type="text" required className='Input' placeholder='First Name' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Last Name" name="lastName" className='Item' rules={[
                                    {
                                        required: true,
                                        message: 'Missing Last Name',
                                    },
                                ]}>
                                    <Input type="text" required className='Input' placeholder='Last Name' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Phone Number" name="phoneNumber" className='Item' rules={[
                                    {
                                        required: true,
                                        message: 'Missing Phone Number',
                                    },
                                ]}>
                                    <Input type="text" required className='Input' placeholder='Phone Number' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Email Address" name="email" className='Item' rules={[
                                    {
                                        required: true,
                                        message: 'Missing Email Address',
                                    },
                                ]}>
                                    <Input type="email" required className='Input' placeholder='Email Address' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Street Address" name="street" className='Item' rules={[
                                    {
                                        required: true,
                                        message: 'Missing Street Address',
                                    },
                                ]}>
                                    <Input type="text" required className='Input' placeholder='Street Address' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="City" name="city" className='Item' rules={[
                                    {
                                        required: true,
                                        message: 'Missing City',
                                    },
                                ]}>
                                    <Input type="text" required className='Input' placeholder='City' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="State" name="state" className='Item' rules={[
                                    {
                                        required: true,
                                        message: 'Missing State',
                                    },
                                ]}>
                                    <Input type="text" required className='Input' placeholder='State' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Zip Code" name="zipCode" className='Item' rules={[
                                    {
                                        required: true,
                                        message: 'Missing Zip Code',
                                    },
                                ]}>
                                    <Input type="number" required className='Input' placeholder='Zip Code' />
                                </Form.Item>
                            </Col>
                        </Row >
                        <p className="form-inside-information-label">PROPERTY INFORMATION</p>
                        <Row gutter={20}>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Type of Property" name="propertyType" className='Item' rules={[
                                    {
                                        required: true,
                                        message: 'Missing Type of Property',
                                    },
                                ]}>
                                    <Select required className='Select' placeholder='--Select--' >
                                        <Select.Option value="Single Family">Single Family</Select.Option>
                                        <Select.Option value="Duplex">Duplex</Select.Option>
                                        <Select.Option value="Quadplex">Quadplex</Select.Option>
                                        <Select.Option value="Triplex">Triplex</Select.Option>
                                        <Select.Option value="Condo">Condo</Select.Option>
                                        <Select.Option value="Townhouse">Townhouse</Select.Option>
                                        <Select.Option value="Other">Other</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Number of Bathrooms" name="numberOfBathrooms" className='Item' rules={[
                                    {
                                        required: true,
                                        message: 'Missing Number of Bathrooms',
                                    },
                                ]}>
                                    <Select required className='Select' placeholder='--Select--' >
                                        <Select.Option value="1">1</Select.Option>
                                        <Select.Option value="1.5">1.5</Select.Option>
                                        <Select.Option value="2">2</Select.Option>
                                        <Select.Option value="2.5">2.5</Select.Option>
                                        <Select.Option value="3">3</Select.Option>
                                        <Select.Option value="3.5">3.5</Select.Option>
                                        <Select.Option value="4">4</Select.Option>
                                        <Select.Option value="4.5">4.5</Select.Option>
                                        <Select.Option value="5">5+</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Number of Bedrooms" name="numberOfBedrooms" className='Item' rules={[
                                    {
                                        required: true,
                                        message: 'Missing Number of Bedrooms',
                                    },
                                ]}>
                                    <Select required className='Select' placeholder='--Select--' >
                                        <Select.Option value="1">1</Select.Option>
                                        <Select.Option value="2">2</Select.Option>
                                        <Select.Option value="3">3</Select.Option>
                                        <Select.Option value="4">4</Select.Option>
                                        <Select.Option value="5">5</Select.Option>
                                        <Select.Option value="6">6</Select.Option>
                                        <Select.Option value="7">7</Select.Option>
                                        <Select.Option value="8">8</Select.Option>
                                        <Select.Option value="9">9</Select.Option>
                                        <Select.Option value="10">10</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Occupancy" name="occupancy" className='Item' rules={[
                                    {
                                        required: true,
                                        message: 'Missing Occupancy',
                                    },
                                ]}>
                                    <Select required className='Select' placeholder='Occupancy' >
                                        <Select.Option value="Vacant">Vacant</Select.Option>
                                        <Select.Option value="Rented">Rented</Select.Option>
                                        <Select.Option value="I live in it">I live in it</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Approx SQ. Footage" name="approxSQFootafe" className='Item property-area' rules={[
                                    {
                                        required: true,
                                        message: 'Missing Approx SQ. Footage',
                                    },
                                ]}>
                                    <Input type="number" required className='Input' placeholder='Approx SQ. Footage' />
                                </Form.Item>
                            </Col>
                        </Row >
                        <p className="form-inside-information-label">ADDITIONAL INFORMATION</p>
                        <Row gutter={40}>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Why are you selling?" name="whySelling" className='Item'>
                                    <TextArea rows={4} className="TextArea" placeholder='Why are you selling?' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="What repairs are needed?" name="repairsNeeded" className='Item'>
                                    <TextArea rows={4} className="TextArea" placeholder='What repairs are needed?' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Form.Item label="Other Relevant Notes" name="otherNotes" className='Item'>
                                    <TextArea rows={4} className="TextArea" placeholder='Other Relevant Notes' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <div className="get-a-cash-offer-button-container">
                            <button type='submit' className="button-82-pushable " >
                                <span className="button-82-shadow"></span>
                                <span className="button-82-edge"></span>
                                <span className="button-82-front text">
                                    GET A CASH OFFER
                                </span>
                            </button>
                        </div>
                    </Form >
                </motion.div>
            </motion.div >
        </>
    )
}

export default GetCashOffer;