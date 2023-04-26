import React from 'react'
import StatusPoint from './StatusPoint'
import StatusText from './StatusText'
import './Status.css'

const Status = () => {
    return (
        <div className="status">
            <StatusPoint />
            <StatusText />
        </div>
    )
}

export default Status