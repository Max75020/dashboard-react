import React from 'react'
import "./ScheduleContent.css"


const ScheduleContent = ({ day, month, title, category, percent }) => {
    return (
        <div className='schedule_content'>
            <div className="schedule_content_up">
                <div className="schedule_content_up_calendar">
                    <div className="calendar_month">
                        {month}
                    </div>
                    <div className="calendar_day">
                        {day}
                    </div>
                </div>
                <div className="schedule_content_up_text">
                    <div className="up_text_title">
                        {title}
                    </div>
                    <div className="up_text_category">
                        {category}
                    </div>
                </div>
            </div>
            <div className="schedule_content_down">
                <div className="down_bar">
                    <div className="bar_grey">
                        <div style={{
                            width: percent
                        }} className="bar_blue">
                        </div>
                    </div>
                </div>
                <div className="down_text">
                    <p>{percent} Complete</p>
                </div>
            </div>
            <div className='schedule_content_end'>
            </div>
        </div>
    )
}

export default ScheduleContent