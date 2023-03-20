import React from 'react'
import "./about.css"
import image from "../../Images/house_sold.jpg"
const About = () => {
    return (
        <>
            <div className='page-title'><p>ABOUT US</p></div>
            <div className="steps">
                <div className="steps-heading">About Real-Estate Rocket</div>
                <div className='about-body'>
                    <div className="image-text">
                        <div className="about-iamge">
                            <img src={image} alt="House Sold" />
                        </div>
                        <div className="about-image-right">
                            <p>From its inception, Property Jet Real Estate Solutions has given homeowners the option to sell their home in any circumstance or condition. All of our staff members are specialists in the field of home buying and selling, and our management team has years of industry expertise. Unlike many other businesses, Property Jet Real Estate </p>
                            <p>Solutions provides our sellers with an exact offer and written contract within hours of their initial inquiry, which is convenient and satisfying.</p>
                            <p>We are quite proud of how well-established a bond we have with our sellers. We treat the process of purchasing a property as fundamentally a personal one, so we take the time to learn why you want to sell your home and any challenges you are facing.</p>
                        </div>
                    </div>
                    <p>Our company's objective is to simplify the selling process as much as we can. We will take the time to ensure that you fully comprehend the process and offer you the assurance that selling your house to us is the appropriate decision. We don't just provide you a quick offer and some equipment to get the job done swiftly. For any questions or concerns you might have along the road, our efficient and polite team is available 24 hours a day, 7 days a week. From the very beginning to the very end,</p>
                    <p>Another source of pride for Property Jet Real Estate Solutions is that we don't impose hidden costs; the quote we present is the amount of money you receive. Property Jet Real Estate Solutions does not charge a fee to our sellers and pays the closing costs for the property.</p>
                </div>
            </div>
        </>
    )
}

export default About