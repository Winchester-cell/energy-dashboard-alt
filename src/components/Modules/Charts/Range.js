// Range.jsx
import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import { toPersianDigits } from '@/utils/toPersianDigits';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RangeChart = ({ series, categories }) => {

    const { t } = useTranslation()

    const options = {
        title: {
            text: t('donutChart.title'),
            align: 'center',
            style: {
                color: 'var(--colTextA)',
                fontSize: '14px',
            },
        },
        chart: {
            fontFamily: 'Yekan',
            type: 'bar',
            stacked: true,
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'start',
                horizontal: true,
                barHeight: '50%',
            },
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [0],
            formatter: (val) => `${toPersianDigits(val)}`,
            style: {
                colors: ['#fff'],
            },
        },
        xaxis: {
            categories: categories,
            labels: {
                formatter: function (value) {
                    return toPersianDigits(value);
                },
                style: {
                    colors: 'var(--colTextA)',
                    fontFamily: 'Yekan',
                },
            },

        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return toPersianDigits(value);
                }
            },
        },
        colors: [
            ({ dataPointIndex }) => ['#008ffb', '#00e396', '#b91c1c'][dataPointIndex],
        ],
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: (val) => `${toPersianDigits(val)}`,
            },
        },
    };

    return (
        <div className="w-full h-full">
            <ApexChart options={options} series={series} type="bar" height={'100%'} />
        </div>
    );
};

export default RangeChart;