import React from 'react'
import './DashboardRight.css'
import Graph from '../Graph/Graph'
import { ArrowDown } from '../../theme/Icons'
const DashboardRight = () => {

    return (
        <div className='dashboard_right'>
            <div className="dash_right_title">
                <h2>Content Reach Summary</h2>
                <div className='dash_right_tile_second'>
                    <h3>Monthly</h3>
                    <ArrowDown />
                </div>
            </div>
            <div className="reach_stats">
            </div>
            <Graph />
        </div>
    )
}

export default DashboardRight