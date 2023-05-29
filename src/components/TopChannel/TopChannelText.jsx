import React from 'react'
import "./TopChannelText.css"

const TopChannelText = ({ icon, icontext, icontextcolor, visitornumber, visitorpercent }) => {
    return (
        <div className='topchanneltext'>
            <div className='channelnetwork'>
                <div className='imgnetwork'>
                    <img src={icon} alt="" />
                </div>
                <p style={{ color: icontextcolor }} className='textnetwork'>
                    {icontext}
                </p>
            </div>
            <div className='visitornetwork'>
                <p className='visitornumber'>
                    {visitornumber} Visitor
                </p>
                <p className='visitorpercents'>
                    {visitorpercent}%
                </p>
            </div>
        </div>
    )
}

export default TopChannelText