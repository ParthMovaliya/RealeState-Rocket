import React from 'react'
import { Col, Form, Input, message, Row, Select } from "antd"
import axios from "axios"
import { useDispatch } from "react-redux"
import { showLoading, hideLoading } from '../../../redux/features/sendSlice'
import "./getCashOffer.css"
import TextArea from 'antd/es/input/TextArea'

const GetCashOffer = () => {
    const dispatch = useDispatch();
    const onFinishHandler = async (values) => {
        console.log(values)
        // dispatch(showLoading());
        // try {
        //     const res = await axios.post("/api/v1/get-a-cash-offer", values);
        //     dispatch(hideLoading());
        //     if (res.data.success) {
        //         message.success(res.data.message);
        //     } else {
        //         message.error(res.data.message);
        //     }
        // } catch (error) {
        //     dispatch(hideLoading());
        //     console.log(error);
        //     message.error("Somethig Went Wrong");
        // }
    }
    return (
        <>
            <div className='page-title'><p>GET A CASH OFFER</p></div>
            <div className='getCashOffer'>
                <div className="steps-heading">Let's Get Started</div>
                <Form onFinish={onFinishHandler} layout="vertical" >
                    <p className="form-inside-information-label">CONTACT INFORMATION</p>
                    <Row gutter={20}>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="First Name" name="firstName" rules={[
                                {
                                    required: true,
                                    message: 'Missing First Name',
                                },
                            ]}>
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Last Name" name="lastName" rules={[
                                {
                                    required: true,
                                    message: 'Missing Last Name',
                                },
                            ]}>
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Phone Number" name="phoneNumber" rules={[
                                {
                                    required: true,
                                    message: 'Missing Phone Number',
                                },
                            ]}>
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Email Address" name="email" rules={[
                                {
                                    required: true,
                                    message: 'Missing Email Address',
                                },
                            ]}>
                                <Input type="email" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Street Address" name="street" rules={[
                                {
                                    required: true,
                                    message: 'Missing Street Address',
                                },
                            ]}>
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="City" name="city" rules={[
                                {
                                    required: true,
                                    message: 'Missing City',
                                },
                            ]}>
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="State" name="state" rules={[
                                {
                                    required: true,
                                    message: 'Missing State',
                                },
                            ]}>
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Zip Code" name="zipCode" rules={[
                                {
                                    required: true,
                                    message: 'Missing Zip Code',
                                },
                            ]}>
                                <Input type="number" required />
                            </Form.Item>
                        </Col>
                    </Row >
                    <p className="form-inside-information-label">PROPERTY INFORMATION</p>
                    <Row gutter={20}>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Type of Property" name="propertyType" rules={[
                                {
                                    required: true,
                                    message: 'Missing Type of Property',
                                },
                            ]}>
                                <Select required>
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
                            <Form.Item label="Number of Bathrooms" name="numberOfBathrooms" rules={[
                                {
                                    required: true,
                                    message: 'Missing Number of Bathrooms',
                                },
                            ]}>
                                <Select required>
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
                            <Form.Item label="Number of Bedrooms" name="numberOfBedrooms" rules={[
                                {
                                    required: true,
                                    message: 'Missing Number of Bedrooms',
                                },
                            ]}>
                                <Select required>
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
                            <Form.Item label="Occupancy" name="occupancy" rules={[
                                {
                                    required: true,
                                    message: 'Missing Occupancy',
                                },
                            ]}>
                                <Select required>
                                    <Select.Option value="Vacant">Vacant</Select.Option>
                                    <Select.Option value="Rented">Rented</Select.Option>
                                    <Select.Option value="I live in it">I live in it</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Approx SQ. Footage" name="approxSQFootafe" rules={[
                                {
                                    required: true,
                                    message: 'Missing Approx SQ. Footage',
                                },
                            ]}>
                                <Input type="number" required />
                            </Form.Item>
                        </Col>
                    </Row >
                    <p className="form-inside-information-label">ADDITIONAL INFORMATION</p>
                    <Row gutter={20}>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Why are you selling?" name="whySelling">
                                <TextArea rows={4} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="What repairs are needed?" name="repairsNeeded">
                                <TextArea rows={4} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Other Relevant Notes" name="otherNotes">
                                <TextArea rows={4} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className="">
                        <button type="submit">Get a Cash Offer</button>
                    </div>
                </Form >
            </div >
        </>
    )
}

export default GetCashOffer;