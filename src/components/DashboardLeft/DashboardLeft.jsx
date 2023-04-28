import React from 'react'
import './DashboardLeft.css'
import ScheduleContent from '../ScheduleContent/ScheduleContent'
import TopChannel from '../TopChannel/TopChannel'
import Widget from '../Widget/Widget'

const DashboardLeft = () => {
    return (
        <div className='dashboard_left'>
            <div className='dashboard_left_welcolm'>
                <h2>Dashboard</h2>
                <p>Welcome back, Erza Miller !</p>
            </div>
            <div className='widgets'>
                <Widget title="Schedule Content">
                    <ScheduleContent
                        day={18}
                        month={"Jul"}
                        title={"Write 5 microblog articles on Instagram"}
                        category={"Office / Marketing"}
                        percent={"72%"}
                    />

                    <ScheduleContent
                        day={24}
                        month={"Jul"}
                        title={"Publish 20 post on Dribbbles"}
                        category={"Office / Marketing"}
                        percent={"14%"}
                    />
                    <ScheduleContent
                        day={18}
                        month={"Jul"}
                        title={"Drafting Material for Travel Campaign"}
                        category={"Drafting"}
                        percent={"43%"}
                    />
                </Widget>
                <Widget title="Top Channels" >
                    <TopChannel />
                </Widget>

            </div>
        </div>
    )
}

export default DashboardLeft