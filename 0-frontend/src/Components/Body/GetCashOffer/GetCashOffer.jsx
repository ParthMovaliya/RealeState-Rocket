import "./getCashOffer.css"
import React from 'react'
import { Col, Form, Input, message, Row } from "antd"
import axios from "axios"


const GetCashOffer = () => {
    const onFinishHandler = async (values) => {
        try {
            const res = await axios.post("/api/v1/get-a-cash-offer", values);
            if (res.data.success) {
                message.success(res.data.message);
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            message.error("Somethig Went Wrong");
        }

        // console.log(values);
        // message.success("Message Sent Successful")
    }
    return (
        <>
            <div className='getCashOffer'>
                <Form onFinish={onFinishHandler} layout="vertical" >
                    <Row gutter={20}>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="First Name" name="firstName">
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Last Name" name="lastName">
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Phone Number" name="phoneNumber">
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Email Address" name="email">
                                <Input type="email" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Street Address" name="street">
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="City" name="city">
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="State" name="state">
                                <Input type="text" required />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} lg={12}>
                            <Form.Item label="Zip Code" name="zipCode">
                                <Input type="number" required />
                            </Form.Item>
                        </Col>
                    </Row >
                    <div className="">
                        <button type="submit">Get a Cash Offer</button>
                    </div>
                </Form >
            </div >
        </>
    )
}

export default GetCashOffer;