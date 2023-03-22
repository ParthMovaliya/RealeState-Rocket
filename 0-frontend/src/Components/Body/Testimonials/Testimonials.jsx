import React from 'react'
import "./testimonials.css"
import { motion } from "framer-motion"


const Testimonials = () => {
    return (
        <>
            <motion.div className='page-title'
                initial={{}}
                animate={{}}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            ><p>TESTIMONIALS</p></motion.div>
            <motion.div className="client-testimonials"
                initial={{}}
                animate={{}}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
                <motion.div className="steps-heading"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                >CLIENT REVIEWS</motion.div>
                <div className="testi-1 testis">
                    <motion.div className="testi-1-1 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            "I needed to sell my property quickly and was pleasantly surprised with how fast and easy the process was with RealEstate Rocket. I highly recommend them!"
                        </div>
                        <div className="client-name">- James Smith</div>
                    </motion.div>
                    <motion.div className="testi-1-2 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            "The team at RealEstate Rocket was professional and responsive throughout the entire selling process. I felt confident and comfortable every step of the way."
                        </div>
                        <div className="client-name">- John Johnson</div>
                    </motion.div>
                </div>
                <div className="testi-2 testis">
                    <motion.div className="testi-1-1 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            "I was hesitant about selling my property to a wholesale buyer, but RealEstate Rocket made the process simple and hassle-free. I'm grateful for their help!"
                        </div>
                        <div className="client-name">- Michael Brown</div>
                    </motion.div>
                    <motion.div className="testi-1-2 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            "The offer I received from RealEstate Rocket was fair and competitive. I was able to sell my property quickly and without any complications."
                        </div>
                        <div className="client-name">- Maria Rodriguez</div>
                    </motion.div>
                </div>
                <div className="testi-3 testis">
                    <motion.div className="testi-1-1 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            "The team at RealEstate Rocket went above and beyond to ensure that I received a great price for my property. I would definitely use their services again!"
                        </div>
                        <div className="client-name">- Robert Williams</div>
                    </motion.div>
                    <motion.div className="testi-1-2 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            "I appreciated how transparent and honest the team at RealEstate Rocket was throughout the entire selling process. They made it easy to trust them with my property."
                        </div>
                        <div className="client-name">- David Jones</div>
                    </motion.div>
                </div>
                <div className="testi-4 testis">
                    <motion.div className="testi-1-1 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            "I recently sold my property through Real Estate Rocket and I couldn't be happier with the results. Their team was professional, knowledgeable, and responsive every step of the way. They provided a fair market value price for my property and were able to sell it quickly and efficiently. I would highly recommend Real Estate Rocket to anyone looking to sell their property with ease."
                        </div>
                        <div className="client-name">- Jennifer Garcia</div>
                    </motion.div>
                    <motion.div className="testi-1-2 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            "I had a wonderful experience working with Real Estate Rocket. Their team provided a personalized approach and took the time to understand my unique needs. They offered clear communication and a streamlined process, which made the entire experience stress-free. I would definitely recommend Real Estate Rocket to anyone looking to sell their property hassle-free."
                        </div>
                        <div className="client-name">- William Davis</div>
                    </motion.div>
                </div>
                <div className="testi-5 testis">
                    <motion.div className="testi-1-1 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            •"I was initially hesitant about working with a real estate wholesaler, but Real Estate Rocket completely exceeded my expectations. Their team was knowledgeable and responsive, and they provided a fair market value price for my property. The entire process was efficient and easy, which made me feel confident throughout the entire process. I would highly recommend Real Estate Rocket to anyone looking to sell their property quickly and hassle-free."
                        </div>
                        <div className="client-name">- Jessica Perez</div>
                    </motion.div>
                    <motion.div className="testi-1-2 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            "Real Estate Rocket is the real deal. Their team provided top-notch customer service and a personalized approach that made me feel like a valued customer. They provided a clear timeline for the entire process and were always available to answer any questions I had. I would definitely work with Real Estate Rocket again in the future."
                        </div>
                        <div className="client-name">- Christopher Martinez</div>
                    </motion.div>
                </div>
                <div className="testi-6 testis">
                    <motion.div className="testi-1-1 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            ••"Selling my property with Real Estate Rocket was an absolute breeze. Their team was knowledgeable and responsive, and they provided a fair market value price for my property. They were able to sell my property quickly and efficiently, which exceeded my expectations. I would highly recommend Real Estate Rocket to anyone looking to sell their property with ease."
                        </div>
                        <div className="client-name">- Daniel Hernandez</div>
                    </motion.div>
                    <motion.div className="testi-1-2 inner-testi testi-hvr"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        viewport={{ once: false }}
                    >
                        <div className="client-testi">
                            •"I was blown away by the level of professionalism and expertise that Real Estate Rocket brought to the table. Their team provided clear communication and a streamlined process that made the entire experience stress-free. They offered a fair market value price for my property and were able to sell it quickly and efficiently. I would definitely recommend Real Estate Rocket to anyone looking to sell their property hassle-free."
                        </div>
                        <div className="client-name">- Kimberly Gonzalez</div>
                    </motion.div>
                </div>
                <motion.div className="testi-6 big-inner testi-hvr"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                    viewport={{ once: false }}
                >
                    <div className="client-testi">
                        "I recently had the pleasure of working with the team at Realestate Rocket, and I have to say that I was thoroughly impressed with their level of expertise and professionalism throughout the entire process. As someone who was new to the world of wholesale real estate, I had a lot of questions and concerns about how everything worked, but the team was incredibly patient and helpful in answering all of my questions and addressing my concerns. One thing that really stood out to me was the way that the team approached the marketing and advertising of my property. They used a variety of innovative and creative techniques to reach potential buyers, including social media advertising, targeted email campaigns, and even virtual reality tours of the property. As a result, we were able to generate a lot of interest in the property very quickly, and we ended up getting multiple offers within a matter of days. Another thing that I appreciated about working with the team at Real estate Rocket was their transparency and honesty throughout the entire process. They were always upfront about their fees and the costs associated with selling my property through their platform, and they never tried to pressure me into making any decisions that I wasn't comfortable with. Overall, I would highly recommend Real estate Rocket to anyone who is looking to sell their property quickly and efficiently. The team is knowledgeable, professional, and dedicated to helping their clients achieve their goals. I can't thank them enough for all of their hard work and support throughout this process!"
                    </div>
                    <div className="client-name">- Karen Jackson</div>
                </motion.div>
                <motion.div className="testi-7 big-inner testi-hvr"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                    viewport={{ once: false }}
                >
                    <div className="client-testi">
                        "I recently used Real estate Rocket to sell a property that had been sitting on the market for months with no offers. I was initially hesitant to use a wholesale real estate website, as I had never done so before and wasn't sure what to expect. However, I was pleasantly surprised by the level of service and support that I received from the team at Real estate Rocket. From the very beginning, the team was attentive and responsive to my needs. They took the time to understand my goals and priorities for the sale of the property, and they worked closely with me to develop a customized marketing plan that would attract the right buyers. They were always available to answer my questions and address any concerns that I had, which made the entire process much less stressful and overwhelming. One thing that I really appreciated about working with Real estate Rocket was their attention to detail. They were incredibly thorough in their analysis of the property and the local real estate market, and they provided me with regular updates and feedback throughout the entire process. They also went above and beyond in terms of the marketing and advertising of the property, using a variety of strategies and techniques to generate interest and attract potential buyers. In the end, we were able to sell the property for a great price within a matter of weeks, thanks in large part to the hard work and dedication of the team at Real estate Rocket. I would highly recommend their services to anyone who is looking to sell their property quickly and efficiently, and I can't thank them enough for all of their help and support throughout this process."
                    </div>
                    <div className="client-name">- Steven Anderson</div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Testimonials