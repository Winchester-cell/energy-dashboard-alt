'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import { toPersianDigits } from '@/utils/formaters/toPersianDigits';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DonutChartss = () => {
    const { t, i18n } = useTranslation();

    // عنوان ثابت "آمار تردد"
    const title = 'آمار تردد';

    // لیبل‌ها برای مرد، زن، بچه، سالمند
    const labels = [
        'مرد',
        'زن',
        'بچه',
        'سالمند',
    ];

    const colors = ["#008ffb", "#00e396", "#feb019", "#ff4560"];

    // مقدار رندوم برای هر دسته بین 10 تا 100
    const [data, setData] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const randomData = Array(4)
            .fill(0)
            .map(() => Math.floor(Math.random() * 91) + 10);
        setData(randomData);
    }, []); // فقط یکبار هنگام لود

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
            text: title,
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
                const persianValue = toPersianDigits(percent);
                return persianValue;
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
                formatter: (val) => toPersianDigits(val),
            },
            style: {
                fontFamily: 'Yekan',
            },
            cssClass: i18n.language === 'fa' ? 'rtl' : ''
        },
        legend: {
            show: true,
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

export default DonutChartss;
