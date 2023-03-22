import React from 'react'
import "./howItWorks.css"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import img1 from "../../Images/1_call.png"
import img2 from "../../Images/2_chat.png"
import img3 from "../../Images/3_money.png"
import img4 from "../../Images/4_pay.png"
import img5 from "../../Images/5_file.png"

const HowItWorks = () => {
    return (
        <>
            <motion.div className='page-title'
                initial={{}}
                animate={{}}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            ><p>HOW IT WORKS</p></motion.div>
            <motion.div className="how-it-works-page"
                initial={{}}
                animate={{}}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
                <motion.div className="steps-heading"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                >Sell Your House Following These Easy Steps</motion.div>
                <motion.div className="how-it-works-steps"
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                    <div className="how-work-step">
                        <div className="how-work-step-iamge">
                            <img src={img1} alt="First_Step" />
                        </div>
                        <div className="how-work-step-information">
                            <div className="how-it-works-right">
                                <div className="how-it-work-arrow">---:</div>
                                <div className="how-it-work-step-info">
                                    <div className="how-work-step-name">STEP 1</div>
                                    <div className="how-work-step-info">
                                        The first step in selling your house is to contact us with no obligation by Call/Text our office at 786.250.1110/786.471.7409 or by filling out
                                        <Link className='how-it-works-link' to="/get-a-cash-offer"> our online form</Link> .
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="how-work-step">
                        <div className="how-work-step-iamge">
                            <img src={img2} alt="First_Step" />
                        </div>
                        <div className="how-work-step-information">
                            <div className="how-it-works-right">
                                <div className="how-it-work-arrow">---:</div>
                                <div className="how-it-work-step-info">
                                    <div className="how-work-step-name">STEP 2</div>
                                    <div className="how-work-step-info">
                                        Tell us where your house is located, the features and amenities of the house, and any faults or repairs that may be needed on the house. We buy houses in As-Is condition so there is no need to fix anything or clean out the house. In some cases we may schedule a time to visit the property to make a better assessment prior to making an offer.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="how-work-step">
                        <div className="how-work-step-iamge">
                            <img src={img4} alt="First_Step" />
                        </div>
                        <div className="how-work-step-information">
                            <div className="how-it-works-right">
                                <div className="how-it-work-arrow">---:</div>
                                <div className="how-it-work-step-info">
                                    <div className="how-work-step-name">STEP 3</div>
                                    <div className="how-work-step-info">
                                        Once we have all of the information related to the property and its condition, you will receive a no obligation offer.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="how-work-step">
                        <div className="how-work-step-iamge">
                            <img src={img5} alt="First_Step" />
                        </div>
                        <div className="how-work-step-information">
                            <div className="how-it-works-right">
                                <div className="how-it-work-arrow">---:</div>
                                <div className="how-it-work-step-info">
                                    <div className="how-work-step-name">STEP 4</div>
                                    <div className="how-work-step-info">
                                        Once you accept our offer we will conveniently send you a contract. We can submit contracts via fax, email, or priority mail. Once you receive the contract send it back to us within 3-5 business days.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="how-work-step">
                        <div className="how-work-step-iamge">
                            <img src={img3} alt="First_Step" />
                        </div>
                        <div className="how-work-step-information">
                            <div className="how-it-works-right">
                                <div className="how-it-work-arrow">---:</div>
                                <div className="how-it-work-step-info">
                                    <div className="how-work-step-name">STEP 5</div>
                                    <div className="how-work-step-info">
                                        Once the contract is received back to us we’ll schedule a closing date. If you live locally you’ll just have to sign some paperwork and collect your cash on the day of closing. If you live out of town, the closing documents will be sent to you via overnight delivery. Remember all of our offers are cash and we can close in a little as 14 days.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default HowItWorks