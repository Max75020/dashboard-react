import React, { useState, useEffect } from 'react'
import "./TopChannel.css"
import { ArrowStatsPercents } from '../../theme/Icons'
import TopChannelText from './TopChannelText';

const TopChannel = () => {
    const [socialNetworks, setSocialNetworks] = useState([
        {
            name: "Facebook",
            visitor: 41,
            color: "#017EFA",
        },
        {
            name: "Instagram",
            visitor: 118,
            color: "#FD1F9B",
        },
        {
            name: "Linkedin",
            visitor: 61,
            color: "#007AB5",
        },
        {
            name: "Youtube",
            visitor: 31,
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
            <TopChannelText icon={"../../assets/img/Facebook.svg"} icontext={"Facebook"} icontextcolor={"#017EFA"} visitornumber={"41"} visitorpercent={16} />
            <TopChannelText icon={"../../assets/img/Instagram.svg"} icontext={"Instagram"} icontextcolor={"#FD1F9B"} visitornumber={"118"} visitorpercent={47} />
            <TopChannelText icon={"../../assets/img/LinkedIn.svg"} icontext={"LinkedIn"} icontextcolor={"#007AB5"} visitornumber={"61"} visitorpercent={24} />
            <TopChannelText icon={"../../assets/img/Youtube.svg"} icontext={"Youtube"} icontextcolor={"#FF0000"} visitornumber={"31"} visitorpercent={12} />
        </div>
    )
}

export default TopChannel