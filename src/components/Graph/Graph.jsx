import React, { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart'

const Graph = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue("--text-color");
        const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");

        const borderColorPrimary = "#FD1F9B"
        const borderColorSecondary = "#017EFA"
        const colorBodyTool = "#606273"
        const colorX = "#8E8E8E";


        const data = {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            datasets: [
                {
                    label: "High paid reach",
                    data: [110, 95, 148, 121, 104, 146, 121, 157, 115, 129, 163, 140],
                    fill: false,
                    borderColor: borderColorPrimary,
                    pointRadius: [5, 5, 5, 5, 5, 10, 5, 5, 5, 5, 5, 5],
                    pointBackgroundColor: (context) => {
                        const index = context.dataIndex;
                        if (index === 5) {
                            return "#fff";
                        }
                        return borderColorPrimary;
                    },
                    pointBorderWidth: 4,
                },
                {
                    label: "Med organic reach",
                    data: [50, 60, 55, 45, 70, 72, 80, 70, 40, 65, 60, 70],
                    fill: false,
                    borderColor: borderColorSecondary,
                    pointRadius: [5, 5, 5, 5, 5, 10, 5, 5, 5, 5, 5, 5],
                    pointBackgroundColor: (context) => {
                        const index = context.dataIndex;
                        if (index === 5) {
                            return "#fff";
                        }
                        return borderColorSecondary;
                    },
                    pointBorderWidth: 4,
                },
            ],
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            interaction: {
                intersect: false,
                mode: "index",
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    yAlign: "top",
                    xAlign: "center",
                    bodyAlign: "center",
                    caretSize: 0,

                    displayColors: false,
                    backgroundColor: "white",
                    bodyColor: colorBodyTool,
                    callbacks: {
                        title: () => "",
                        label: (context) => {
                            const label = context.dataset.label;
                            const value = context.parsed.y
                            return `${value}K : ${label}`;
                        },
                    },
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                    ticks: {
                        color: colorX, // Appliquer la couleur colorX aux libellés des axes X
                        font: {
                            family: "Gilroy",
                            weight: "400",
                            size: "14px",
                        }
                    },
                },

                y: {
                    min: 0,
                    max: 200,
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary,
                        stepSize: 50,
                        callback: function (value) {
                            return value + "K";
                        },
                        padding: 33,
                    },
                    grid: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                },
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    );
};

export default Graph;