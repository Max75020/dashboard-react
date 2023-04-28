import React from 'react'
import "./Widget.css"
import { Link } from 'react-router-dom'
import { ChevronRight } from "../../theme/Icons";

const Widget = ({ title, link, children }) => {
    return (
        <div className='widget'>
            <div className="widget_up">
                <h2>{title}</h2>
                <div className="widget_up_link">
                    <Link to={link}>
                        See Detail
                        <ChevronRight />
                    </Link>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Widget