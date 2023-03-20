import React from 'react'
import "./loading.css"
import rocket from "../Images/rocket.gif"
const Loading = () => {
    return (
        <div class="rocket-container">
            <img src={rocket} alt="Sending..." className='rocket' />
            <div className='sending-text'>Message Sending...</div>
        </div>
    )
}

export default Loading