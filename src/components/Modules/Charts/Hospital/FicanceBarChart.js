'use client'
import React from "react";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const InsuranceChart = ({ title }) => {
    const series = [
        {
            name: "درصد",
            data: [42, 28, 18, 52],
        },
    ];

    const options = {
        chart: {
            type: "bar",
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "50%",
                endingShape: "rounded",
                borderRadius: 8,
                distributed: true, // 🔑 اینجا اضافه کن
            },
        },
        title: {
            text: title,
            align: "center",
            style: {
                color: "var(--colTextA)",
                fontSize: "14px",
                fontFamily: "Yekan",
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            style: {
                fontSize: "14px",
            },
        },
        xaxis: {
            // categories: ["تأمین اجتماعی", "بیمه سلامت", "تکمیلی", "آزاد"],
            categories: ["" , "", "", ""],
            labels: {
                rotate: -15,
                style: { fontSize: "14px" },
            },
        },
        yaxis: {
            max: 100,
            labels: {
                formatter: function (val) {
                    return val + "%";
                },
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%";
                },
            },
        },
        colors: ["#1E40AF", "#059669", "#D97706", "#DC2626"], // هر میله یه رنگ
    };

    return <Chart options={options} series={series} type="bar" height={"100%"} />;
};

export default InsuranceChart;
