import React from 'react'
import DashboardLeft from '../components/DashboardLeft/DashboardLeft'
import DashboardRight from '../components/DashboardRight/DashboardRight'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <DashboardLeft />
            <DashboardRight />
        </div>
    )
}

export default Home