import React from "react";
import dynamic from 'next/dynamic';
import { useTranslation } from "react-i18next";
import { toPersianDigits } from "@/utils/toPersianDigits";
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = () => {

    const { t, i18n } = useTranslation()

    const options = {
        chart: {
            fontFamily: 'Yekan',
            id: "basic-bar",
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return toPersianDigits(val);
                }
            },
            style: {
                fontFamily: 'Yekan',
                fontSize: '13px',
            },
            cssClass: i18n.language === 'fa' ? 'rtl' : ''
        },
        plotOptions: {
            bar: {
                borderRadius: 7,
                // borderRadiusApplication: 'end',
                // borderRadiusWhenStacked: 'last',
            }
        },
        xaxis: {
            categories: ["فروردین", "اردیبهشت", "خرداد", "تیر"],
            labels: {
                style: {
                    fontSize: '8px',
                }
            }
        },

        dataLabels: {
            formatter: function (val) {
                return toPersianDigits(val);
            },
            enabled: true,
            style: {
                // fontSize: '14px',
                colors: ['#fff'],
                fontFamily: 'Yekan'
            }
        },
        title: {
            // text: t(deviceDataCardContent.countedVehicleChart.chartTitle.textKey),
            align: "center",
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: 'Yekan',
                color: 'var(--colTextA)'
            }
        },
        colors: ["#008ffb", "#00e396"]
    };

    const series = [
        {
            name: '',
            data: [30, 40, 35 , 25],

        },
        {
            name: '',
            data: [25, 40, 28 , 30], // Data for the second line
        }
    ];

    return (
        <div className="w-full h-full">
            <ApexChart options={options} series={series} type="bar" height={`100%`} />
        </div>
    );
};

export default BarChart;