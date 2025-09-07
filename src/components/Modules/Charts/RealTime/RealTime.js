'use client'
import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'react-apexcharts';

export default function RealtimeChart() {
    const [data, setData] = useState(generateInitialData());
    const XAXISRANGE = 1000 * 60 * 10; // مثلا 10 دقیقه

    function generateInitialData() {
        const now = new Date().getTime();
        let series = [];
        for (let i = 0; i < 20; i++) {
            series.push({
                x: now + i * 1000,
                y: Math.floor(Math.random() * 80) + 10
            });
        }
        return series;
    }

    function getNewPoint() {
        const last = data[data.length - 1];
        const nextX = last ? last.x + 1000 : new Date().getTime();
        const nextY = Math.floor(Math.random() * 80) + 10;
        return { x: nextX, y: nextY };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setData((prev) => [...prev.slice(-19), getNewPoint()]);
        }, 1000);

        return () => clearInterval(interval);
    }, [data]);

    const options = {
        chart: {
            id: 'realtime',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: { speed: 1000 }
            },
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        xaxis: { type: 'datetime', range: XAXISRANGE },
        yaxis: { max: 100 },
        stroke: { curve: 'smooth' },
        dataLabels: { enabled: false },
        markers: { size: 0 },
        title: { text: 'Dynamic Updating Chart', align: 'left' },
        legend: { show: false }
    };

    return (
        <div className='w-full'>
            {data.length > 0 && (
                <ApexCharts
                    options={options}
                    series={[{ data }]}
                    type="line"
                    height={350}
                />
            )}
        </div>
    );
}
