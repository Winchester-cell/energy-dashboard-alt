import React from "react";
import Chart from "react-apexcharts";

const InsuranceChart = ({title}) => {
    const series = [
        {
            name: "درصد",
            data: [42, 28, 18, 12], // داده‌های شما
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
            },
        },
        title: {
            text: title,
            align: 'center',
            style: {
                color: 'var(--colTextA)',
                fontSize: '14px',
                fontFamily: 'Yekan'
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
            categories: ["تأمین اجتماعی", "بیمه سلامت", "تکمیلی", "آزاد"],
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
        colors: ["#1E40AF"], // می‌تونید رنگ دلخواه بدید
    };

    return <Chart options={options} series={series} type="bar" height={'100%'} />;
};

export default InsuranceChart;
