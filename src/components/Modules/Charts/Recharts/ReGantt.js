import React from "react";
import Chart from "react-apexcharts";

const series = [
    {
        name: "اتاق عمل ۱",
        data: [
            { x: "آپاندکتومی", y: [9, 11], status: "در حال انجام" },
            { x: "لاپاراسکوپی", y: [11.5, 13], status: "آماده‌سازی" },
        ],
    },
    {
        name: "اتاق عمل ۲",
        data: [
            { x: "جراحی قلب", y: [10, 14], status: "آماده‌سازی" },
            { x: "کاتتریزاسیون", y: [14.5, 16], status: "در حال انجام" },
        ],
    },
    {
        name: "اتاق عمل ۳",
        data: [
            { x: "تعویض زانو", y: [11, 13], status: "با تأخیر" },
            { x: "آرتروسکوپی", y: [13.5, 15], status: "در حال انجام" },
        ],
    },
];

const statusColors = {
    "در حال انجام": "#22c55e",  // سبز
    "آماده‌سازی": "#facc15",     // زرد
    "با تأخیر": "#ef4444",      // قرمز
};

const options = {
    legend: {
        show: true,
        fontFamily: 'Yekan',
    },
    chart: {
        type: "rangeBar",
        toolbar: { show: false },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'center', // نمایش اسم داخل نوار
            },
            distributed: false,
            barHeight: '50%',
        },
    },
    xaxis: {
        type: "numeric",
        min: 0,
        max: 24,
        title: { text: "ساعت روز" },
    },
    yaxis: {
        title: { text: "اتاق‌های عمل" },
    },
    tooltip: {
        y: {
            formatter: (val, opts) => {
                const point = opts?.w?.config?.series[opts.seriesIndex]?.data[opts.dataPointIndex];
                if (!point) return "";
                return `${point.x}: ${val[0]}:00 - ${val[1]}:00 | وضعیت: ${point.status}`;
            },
        },
    },
    dataLabels: {
        enabled: true,
        formatter: (val) => val.x, // اسم جراحی روی Bar
        style: { fontSize: "12px", colors: ["#000"] },
    },
    colors: series.flatMap(s => s.data.map(d => statusColors[d.status])),
};

export default function SurgeryGanttFa() {
    return <Chart options={options} series={series} type="rangeBar" height={'100%'} />;
}
