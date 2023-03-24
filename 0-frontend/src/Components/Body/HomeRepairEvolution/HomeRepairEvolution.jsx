import React from 'react'
import "./homeRepairEvolution.css"
import { Col, Form, Input, message, Row, Select } from "antd"
import TextArea from 'antd/es/input/TextArea'
import axios from "axios"
import { useDispatch } from "react-redux"
import { showLoading, hideLoading } from '../../../redux/features/sendSlice'
import { motion } from "framer-motion"
import { Attic, Basement, Bathrooms, Bedrooms, Den, DiningRoom, Exterior, Fireplace, Garage, Hallways, Kitchen, LivingRoom, Other, Roof, Stairs, Utilities, Yard } from "../../../Data/homeRepairEvaluation"

const HomeRepairEvolution = () => {
    const dispatch = useDispatch();
    const onFinishHandler = async (values) => {
        console.log(values)
        dispatch(showLoading());
        try {
            const res = await axios.post("/api/v1/home-repair-evolution", values);
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
            ><p>HOME REPAIR EVOLUTION</p></motion.div>
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
                    <Form onFinish={onFinishHandler} layout="vertical" className='Form HomeRepair'>
                        <p className="form-inside-information-label">CONTACT INFORMATION</p>
                        <div className="repair-each-page-container">
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
                                    <Form.Item label="Last Name" name="lastName" className='Item'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing Last Name',
                                            },
                                        ]}>
                                        <Input type="text" required className='Input' placeholder='Last Name' />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12} lg={12}>
                                    <Form.Item label="Phone Number" name="phoneNumber" className='Item'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing Phone Number',
                                            },
                                        ]}>
                                        <Input type="text" required className='Input' placeholder='Phone Number' />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12} lg={12}>
                                    <Form.Item label="Email Address" name="email" className='Item'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing Email Address',
                                            },
                                        ]}>
                                        <Input type="email" required className='Input' placeholder='Email Address' />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12} lg={12}>
                                    <Form.Item label="Street Address" name="street" className='Item'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing Street Address',
                                            },
                                        ]}>
                                        <Input type="text" required className='Input' placeholder='Street Address' />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12} lg={12}>
                                    <Form.Item label="City" name="city" className='Item'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing City',
                                            },
                                        ]}>
                                        <Input type="text" required className='Input' placeholder='City' />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12} lg={12}>
                                    <Form.Item label="State" name="state" className='Item'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing State',
                                            },
                                        ]}>
                                        <Input type="text" required className='Input' placeholder='State' />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12} lg={12}>
                                    <Form.Item label="Zip Code" name="zipCode" className='Item'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing Zip Code',
                                            },
                                        ]}>
                                        <Input type="number" required className='Input' placeholder='Zip Code' />
                                    </Form.Item>
                                </Col>
                            </Row >
                        </div>

                        <p className="form-inside-information-label">PROPERTY INFORMATION</p>
                        <Row gutter={20}>
                            <Col xs={24} md={12} lg={12}>
                                <div className="repair-each-page-container">
                                    <p className='form_name_home_repair'>Exterior</p>

                                    {
                                        Exterior.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                // defaultValue="I Don't Have"
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Traffic noise" name="TrafficNoise" className='Item'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing Traffic noise Cheklist!',
                                            },
                                        ]}>
                                        <Select className='Select' required placeholder='--Select--'
                                        >
                                            <Select.Option value="Great">Great</Select.Option>
                                            <Select.Option value="OK">OK</Select.Option>
                                            <Select.Option value="Bad">Bad</Select.Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item label="Are things loose, cracked, damaged, rotted, bug infested?" name="ExteriorNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Are things loose, cracked, damaged, rotted, bug infested?Drainage ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Yard</p>
                                    {
                                        Yard.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Trees, shrubs and lawn dead, dying or bug infested?" name="YardNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Trees, shrubs and lawn dead, dying or bug infested? ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Bathrooms</p>
                                    {
                                        Bathrooms.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                // defaultValue="I Don't Have"
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Fixtures secure? Condition of tiles and calking? Leaks or water pressure issues? Mold? Drawers and cabinets working?" name="BathroomsNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Fixtures secure? Condition of tiles and calking? Leaks or water pressure issues? Mold? Drawers and cabinets working? ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Kitchen </p>
                                    {
                                        Kitchen.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Leaking sink or appliances? Cabinet & drawer condition?" name="KitchenNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Leaking sink or appliances? Cabinet & drawer condition? ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Basement </p>
                                    {
                                        Basement.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Damp, musty or moldy? Beam damage? Bugs?" name="KitchenNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Damp, musty or moldy? Beam damage? Bugs?' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Stairs	 </p>
                                    {
                                        Stairs.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Weak stairs? Railings available and secure?" name="KitchenNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Weak stairs? Railings available and secure? ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Other</p>
                                    {
                                        Other.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Smoke and carbon monoxide detectors in place?" name="KitchenNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Smoke and carbon monoxide detectors in place? ' />
                                    </Form.Item>
                                </div>
                            </Col>

                            <Col xs={24} md={12} lg={12}>
                                <div className="repair-each-page-container">
                                    <p className='form_name_home_repair'>Roof</p>
                                    {
                                        Roof.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="When was it last replaced? Are there encroaching trees?" name="RoofNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='When was it last replaced? Are there encroaching trees? ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Garage </p>
                                    {
                                        Garage.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Is the garage door opener operating properly?" name="GarageNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Is the garage door opener operating properly? ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Fireplace</p>
                                    {
                                        Fireplace.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Any buildup inside? Damage where connected to roof?" name="FireplaceNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Any buildup inside? Damage where connected to roof? ' />
                                    </Form.Item>

                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Bedrooms</p>
                                    {
                                        Bedrooms.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Check ceilings for sloping and/or water damage. Are floors weak in places? Damaged windows or window screens?" name="BedroomsNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Check ceilings for sloping and/or water damage. Are floors weak in places? Damaged windows or window screens? ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Dining Room</p>
                                    {
                                        DiningRoom.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Wall damage? Sloping ceiling? Weak floors? " name="DiningRoomNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Wall damage? Sloping ceiling? Weak floors?  ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-containe touch-repair-containerr">
                                    <p className='form_name_home_repair'>Living Room </p>
                                    {
                                        LivingRoom.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Wall damage? Sloping ceiling? Weak floors?" name="LivingRoomNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Wall damage? Sloping ceiling? Weak floors? ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Den</p>
                                    {
                                        Den.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Wall damage? Sloping ceiling? Weak floors?" name="DenNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Wall damage? Sloping ceiling? Weak floors? ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Attic</p>
                                    {
                                        Attic.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Leaks, water damage, mold? Sufficient insulation?" name="KitchenNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Leaks, water damage, mold? Sufficient insulation? ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Utilities</p>
                                    {
                                        Utilities.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Functioning properly? Are they new or old?" name="KitchenNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Functioning properly? Are they new or old? ' />
                                    </Form.Item>
                                </div>

                                <div className="repair-each-page-container touch-repair-container">
                                    <p className='form_name_home_repair'>Hallways</p>
                                    {
                                        Hallways.map((data) =>
                                            <Form.Item label={data.label} name={data.name} className='Item'
                                                key={data.id}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: `Missing ${data.error} Cheklist!`,
                                                    },
                                                ]}>
                                                <Select className='Select' required placeholder='--Select--' key={data.id + "Select"}
                                                >
                                                    <Select.Option value="Great">Great</Select.Option>
                                                    <Select.Option value="OK">OK</Select.Option>
                                                    <Select.Option value="Bad">Bad</Select.Option>
                                                    <Select.Option value="I Don't Have">I Don't Have</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        )
                                    }
                                    <Form.Item label="Wall damage? Sloping ceiling? Weak floors?" name="KitchenNote" className='Item'>
                                        <TextArea rows={4} className="TextArea" placeholder='Wall damage? Sloping ceiling? Weak floors? ' />
                                    </Form.Item>

                                </div>
                            </Col>

                        </Row >

                        <div className="get-a-cash-offer-button-container">
                            <button type='submit' className="button-82-pushable " >
                                <span className="button-82-shadow"></span>
                                <span className="button-82-edge"></span>
                                <span className="button-82-front text">
                                    SUBMIT FORM
                                </span>
                            </button>
                        </div>
                    </Form >
                </motion.div>
            </motion.div >
        </>
    )
}

export default HomeRepairEvolution