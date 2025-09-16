import React from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { toPersianDigits } from "@/utils/formaters/toPersianDigits";
import i18n from "@/i18n";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart = ({ shadow, labelSize, categories, series, title, yMin, yMax, colors = ["#008ffb", "#00e396"] }) => {

    const { t } = useTranslation()

    const options = {
        title: {
            text: title,
            align: "center",
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: 'Yekan',
                color: 'var(--colTextA)'
            }
        },
        chart: {
            type: "area",
            toolbar: { show: false },
            zoom: { enabled: false },
            fontFamily: 'Yekan',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 500 // سرعت حرکت خط، میلی‌ثانیه
                }
            },
        },
        xaxis: {
            type: 'category',
            categories: categories,
            title: {
                // text: t('month'),
                style: {
                    color: ["var(--colTextA)"],
                    fontSize: `${labelSize}px`,
                },
            },
            labels: {
                formatter: function (value) {
                    return toPersianDigits(value);
                }
            },
        },
        yaxis: {
            min: yMin ? yMin : 0,
            ...(yMax !== undefined && { max: yMax }),
            labels: {
                formatter: function (value) {
                    return toPersianDigits(value);
                }
            },
            title: {
                style: {
                    color: ["var(--colTextA)"],
                    fontSize: `${labelSize}px`,
                },
            },
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        dataLabels: {
            formatter: function (val) {
                return toPersianDigits(String(val));
            },
            enabled: false,
        },
        colors, // Colors for the two lines
        grid: {
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return toPersianDigits(String(val));
                }
            },
            style: {
                fontFamily: 'Yekan',
                fontSize: '13px',
            },
            cssClass: i18n.language === 'fa' ? 'rtl' : ''
        }
    };

    return (
        <div
            className={`w-[100%] h-full rounded-2xl  ${shadow ? "shadow-lg" : ""
                }`}
        >
            <ApexChart options={options} series={series} type="area" height={'100%'} />
        </div>
    );
};

export default AreaChart;