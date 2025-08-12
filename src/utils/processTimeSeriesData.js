export function processTimeSeriesData(data) {
  // ابتدا لیست ساعت‌ها رو یکتا و مرتب می‌کنیم
  const uniquePeriods = Array.from(
    
    new Set(data.map(item => {
      // استخراج ساعت از period (مثلا "2025-08-11T14:00:00+03:30" -> "14:00")
      return new Date(item.period).toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
    }))
  ).sort((a, b) => {
    // مرتب سازی ساعت‌ها بر اساس زمان (تبدیل به تاریخ و مقایسه)
    return new Date(`1970-01-01T${a}:00`) - new Date(`1970-01-01T${b}:00`);
  });

  // سری داده‌ها برای ورود و خروج
  const countInData = [];
  const countOutData = [];

  uniquePeriods.forEach(period => {
    // پیدا کردن مقدار count_in برای این ساعت
    const inEntry = data.find(
      d => d.metric_key === 'count_in' &&
        new Date(d.period).toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) === period
    );
    countInData.push(inEntry ? inEntry.aggregated_value : 0);

    // پیدا کردن مقدار count_out برای این ساعت
    const outEntry = data.find(
      d => d.metric_key === 'count_out' &&
        new Date(d.period).toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) === period
    );
    countOutData.push(outEntry ? outEntry.aggregated_value : 0);
  });

  return {
    categories: uniquePeriods,
    series: [
      { name: 'افراد وارد شده', data: countInData },
      { name: 'افراد خارج شده', data: countOutData }
    ]
  };
}
