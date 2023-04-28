import React, { useState, useEffect } from 'react'
import "./TopChannel.css"
import { ArrowStatsPercents } from '../../theme/Icons'

const TopChannel = () => {
    const [socialNetworks, setSocialNetworks] = useState([
        {
            name: "Facebook",
            visitor: 233,
            color: "#017EFA",
        },
        {
            name: "Instagram",
            visitor: 200,
            color: "#FD1F9B",
        },
        {
            name: "Linkedin",
            visitor: 123,
            color: "#007AB5",
        },
        {
            name: "Youtube",
            visitor: 87,
            color: "#FF0000",
        },
    ]);

    useEffect(() => {
        let totalVisitor = 0;
        socialNetworks.forEach((element) => {
            totalVisitor += element.visitor;
        });
        const stateUpdate = [...socialNetworks];
        socialNetworks.forEach((element, i) => {
            stateUpdate[i].percent = Math.round(element.visitor / (totalVisitor / 100));
        });
        setSocialNetworks(stateUpdate);
    }, []);
    return (
        <div className='top_channels'>
            <div className="visites">
                <div className="visites_nombres">
                    120K
                </div>
                <div className="visites_stats">
                    <div className="stats_arrow">
                        <ArrowStatsPercents />
                    </div>
                    <div className="stats_percents">
                        12%
                    </div>
                    <div className="stats_visit_text">
                        visit
                    </div>
                </div>
            </div>
            <div className="visites_bar">
                {socialNetworks.map((el, i) => (
                    <div
                        key={i}
                        className={"visites_bar_part"}
                        style={{ background: el.color, width: el.percent + "%" }}
                    />
                ))}
            </div>
        </div>
    )
}

export default TopChannel