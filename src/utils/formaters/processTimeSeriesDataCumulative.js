export function processTimeSeriesDataCumulative(data) {
  // استخراج ساعت‌ها به صورت یکتا و مرتب (مثل قبلی)
  const uniquePeriods = Array.from(
    new Set(data.map(item => {
      return new Date(item.period).toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
    }))
  ).sort((a, b) => {
    return new Date(`1970-01-01T${a}:00`) - new Date(`1970-01-01T${b}:00`);
  });

  const countInData = [];
  const countOutData = [];

  let cumulativeIn = 0;
  let cumulativeOut = 0;

  uniquePeriods.forEach(period => {
    // مقدار برای ساعت جاری (count_in)
    const inEntry = data.find(
      d => d.metric_key === 'count_in' &&
        new Date(d.period).toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) === period
    );
    cumulativeIn += inEntry ? inEntry.aggregated_value : 0;
    countInData.push(cumulativeIn);

    // مقدار برای ساعت جاری (count_out)
    const outEntry = data.find(
      d => d.metric_key === 'count_out' &&
        new Date(d.period).toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) === period
    );
    cumulativeOut += outEntry ? outEntry.aggregated_value : 0;
    countOutData.push(cumulativeOut);
  });

  return {
    categories: uniquePeriods,
    series: [
      { name: 'افراد وارد شده (تجمعی)', data: countInData },
      { name: 'افراد خارج شده (تجمعی)', data: countOutData }
    ]
  };
}
