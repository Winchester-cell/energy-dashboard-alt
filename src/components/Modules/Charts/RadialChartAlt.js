'use client'
import React from "react";
import dynamic from 'next/dynamic';
import { useTranslation } from "react-i18next";
import { toPersianDigits } from "@/utils/formaters/toPersianDigits";
import { color } from "framer-motion";
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CircularProgressAlt = ({ title, value, color }) => {

    const { t, i18n } = useTranslation()

    const options = {

        title: {
            text: title,
            show:false ,
            align: 'center',
            style: {
                color: 'var(--colTextA)',
                fontSize: '0px',
            },
        },

        chart: {
            fontFamily: 'Yekan',
            height: 280,
            type: "radialBar",
        },

        colors: ["#20E647"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "50%",
                    background: "none"
                },
                track: {
                    background: '#878787',
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.25,
                    }
                },
                dataLabels: {

                    name: {
                        show: false,
                        offsetY: -10,
                        color: "var(--colTextA)",
                        fontSize: "13px"
                    },
                    value: {
                        color: "var(--colTextA)",
                        fontSize: "14px",
                        show: true,
                        formatter: function (val) {
                            return `${toPersianDigits(val)}%`;
                        },
                    }
                }
            }
        },
        fill: {
            type: "solid",       // به جای "gradient"
            colors: color  // رنگ ثابت موردنظر
        },
        stroke: {
            lineCap: "round"
        },
    };
    const series = [value];

    return (
        <div className="w-full h-full">
            <ApexChart options={options} series={series} type="radialBar" height={'100%'} key={i18n.language} />
        </div>
    );
};

export default CircularProgressAlt;
