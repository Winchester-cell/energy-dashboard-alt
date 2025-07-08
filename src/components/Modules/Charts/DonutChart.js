'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import { toPersianDigits } from '@/utils/toPersianDigit';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DonutChart = () => {

    const { t, i18n } = useTranslation()


    const data = [70, 30];

    const labels = [
        t('areaChart.peopleIn'), t('areaChart.peopleOut')
    ]

    const colors = ["#008ffb", "#00e396"]

    const options = {

        chart: {
            fontFamily: 'Yekan',
            type: 'donut',
        },
        colors,
        labels,

        plotOptions: {
            pie: {
                donut: {
                    size: "60%"
                },
                dataLabels: {
                    offset: 0,
                },
            },
        },
        stroke: {
            show: true,
            width: 3,
            colors: ['var(--colCard)'],
        },
        title: {
            text: t('donutChart.title'),
            align: 'center',
            style: {
                color: 'var(--colTextA)',
                fontSize: '14px',
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                const percent = val.toFixed(1) + '%';
                const persianValue = toPersianDigits(percent)
                return persianValue
            },
            style: {
                fontFamily: 'Yekan',
                fontSize: '10px',
                colors: ['#fff'],
            },
            dropShadow: {
                enabled: false,
            },
            offsetY: 0,
            offsetX: 0,
            textAnchor: 'middle',
        },
        tooltip: {
            y: {
                formatter: (val) => toPersianDigits(val) ,
            },
            style: {
                //   fontSize: '22px',
                fontFamily: 'Yekan',
            },
            cssClass: i18n.language === 'fa' ? 'rtl' : ''
        },
        legend: {
            position: 'bottom',
            fontFamily: 'Yekan',
        },
    };


    return (
        <div className="w-full h-full">
            <ApexChart key={i18n.language} options={options} series={data} type="donut" height={'100%'} />
        </div>
    );
};

export default DonutChart;