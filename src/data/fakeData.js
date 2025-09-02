const topConsumer = [
    { id: 1, name: 'کمپانی فرضی', totalPowerConsume: 500, totalGasConsume: 300, cost: 1200000, },
    { id: 2, name: 'کمپانی فرضی', totalPowerConsume: 200, totalGasConsume: 450, cost: 1300000, },
    { id: 3, name: 'کمپانی فرضی', totalPowerConsume: 150, totalGasConsume: 100, cost: 1500000, },
    { id: 4, name: 'کمپانی فرضی', totalPowerConsume: 330, totalGasConsume: 500, cost: 1400000, },
    { id: 5, name: 'کمپانی فرضی', totalPowerConsume: 155, totalGasConsume: 125, cost: 1600000, },
]


const areas = [
    { id: 1, name: 'area 1', lat: 37.24025, long: 49.53590, status: true },
    { id: 2, name: 'area 1', lat: 37.23943, long: 49.54483, status: true },
    { id: 3, name: 'area 1', lat: 37.23519, long: 49.55006, status: true },
    { id: 4, name: 'area 1', lat: 37.23000, long: 49.54749, status: true },
    { id: 5, name: 'area 1', lat: 37.23683, long: 49.56011, status: true },
]


const noganData = [
    { id: 1, img: '/images/tokhm.jpg', name: 'تخم نوغان', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
    { id: 2, img: '/images/pileh.jpg', name: 'پیله ابریشم', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
]

const summaryData = [
    { id: 1, img: '/images/pileh.jpg', name: 'اخرین سفارشات', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
    { id: 2, img: '/images/tokhm.jpg', name: 'کرم‌های ابریشم در حال پرورش', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
    { id: 3, img: '/images/pileh.jpg', name: 'مزارع فعال', desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
]

const productList = [
    {
        id: 1,
        img: '/images/pileh.jpg',
        name: 'پیله خشک ممتاز',
        desc: 'پیله‌ی خشک با کیفیت بالا برای تولید ابریشم طبیعی، مناسب کارگاه‌های نخ‌ریسی.',
        price: 350_000
    },
    {
        id: 2,
        img: '/images/tokhm.jpg',
        name: 'تخم نوغان اصلاح‌شده',
        desc: 'بسته‌ی ۱۰۰ عددی تخم کرم ابریشم با قدرت بازدهی بالا و مقاومت مناسب.',
        price: 120_000
    },
    {
        id: 3,
        img: '/images/pileh.jpg',
        name: 'پیله تازه خیس',
        desc: 'پیله تازه مناسب برای استخراج مستقیم نخ ابریشم. ارسال سریع با بسته‌بندی بهداشتی.',
        price: 280_000
    },
    {
        id: 4,
        img: '/images/tokhm.jpg',
        name: 'تخم نوغان ارگانیک',
        desc: 'تخم نوغان پرورشی بدون استفاده از مواد شیمیایی، مناسب مزارع ارگانیک.',
        price: 150_000
    },
    {
        id: 5,
        img: '/images/pileh.jpg',
        name: 'پیله رنگ‌شده طبیعی',
        desc: 'پیله‌های رنگ‌شده با رنگ‌های طبیعی برای تولید پارچه‌های هنری یا تزئینی.',
        price: 390_000
    },
    {
        id: 6,
        img: '/images/tokhm.jpg',
        name: 'تخم نوغان صادراتی',
        desc: 'تخم نوغان با کیفیت صادراتی ویژه‌ی پرورش‌دهندگان حرفه‌ای و عمده‌فروشی.',
        price: 200_000
    }
];

const devices = [
    { id: 1, name: "دستگاه شمارش افراد", serial: "SN001", isActive: true },
    { id: 2, name: "دستگاه کنترل دما", serial: "SN002", isActive: false },
    { id: 3, name: "دستگاه تشخیص پلاک خودرو", serial: "SN003", isActive: true },
    { id: 4, name: "دستگاه کنترل تردد", serial: "SN004", isActive: false },
    { id: 5, name: "دستگاه سنجش رطوبت", serial: "SN005", isActive: true },
    { id: 6, name: "دستگاه ثبت زمان ورود", serial: "SN006", isActive: true },
    { id: 7, name: "دستگاه کنترل درب", serial: "SN007", isActive: false },
    { id: 8, name: "دستگاه نظارت تصویری", serial: "SN008", isActive: true },
    { id: 9, name: "دستگاه هشدار آتش‌سوزی", serial: "SN009", isActive: false }
]


const factories = [
    {
        id: 111,
        name: "شهرک صنعتی کاسپین",
        manager: "مهندس علی رضایی",
        children: [
            {
                id: 1,
                name: "صنایع مادر ایرانیان",
                manager: "مهندس محمد احمدی",
                children: [
                    {
                        id: 2,
                        name: "کارخانه فولاد البرز",
                        manager: "مهندس ناصر قادری",
                        children: [
                            {
                                id: 5,
                                name: "زیرمجموعه نورد گرم",
                                manager: "لیلا امینی",
                                children: []
                            },
                            {
                                id: 6,
                                name: "زیرمجموعه نورد سرد",
                                manager: "حسین نجفی",
                                children: []
                            },
                            {
                                id: 7,
                                name: "زیرمجموعه بسته‌بندی فلزات",
                                manager: "مریم کریمی",
                                children: []
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "کارخانه داروسازی پویان",
                        manager: "دکتر سمیه شریفی",
                        children: [
                            {
                                id: 8,
                                name: "زیرمجموعه تولید قرص",
                                manager: "فرشاد رمضانی",
                                children: []
                            },
                            {
                                id: 9,
                                name: "زیرمجموعه تولید شربت",
                                manager: "نگار صفوی",
                                children: []
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "کارخانه نساجی خزر",
                        manager: "مهندس یوسف کاظمی",
                        children: [
                            {
                                id: 10,
                                name: "زیرمجموعه رنگرزی",
                                manager: "شیما نادری",
                                children: []
                            },
                            {
                                id: 11,
                                name: "زیرمجموعه بافندگی",
                                manager: "رضا محسنی",
                                children: [
                                    {
                                        id: 12,
                                        name: "کارگاه بافندگی شماره 1",
                                        manager: "زهرا تقوی",
                                        children: []
                                    },
                                    {
                                        id: 13,
                                        name: "کارگاه بافندگی شماره 2",
                                        manager: "حامد جوادی",
                                        children: []
                                    }
                                ]
                            },
                            {
                                id: 14,
                                name: "زیرمجموعه بسته‌بندی پارچه",
                                manager: "نسرین شفیعی",
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 15,
                name: "کارخانه مستقل آراد پلاست",
                manager: "مهندس رضا حاجی‌پور",
                children: []
            }
        ]
    },
];

const beds = [
  { id: 1, number: "B01", ward: "ICU", occupied: true, patient: { id: 101, name: "علی رضایی", age: 45, gender: "مرد", medicalRecord: "پرونده ۱۰۰۱" } },
  { id: 2, number: "B02", ward: "عمومی", occupied: false, patient: null },
  { id: 3, number: "B03", ward: "ICU", occupied: true, patient: { id: 102, name: "سارا محمدی", age: 32, gender: "زن", medicalRecord: "پرونده ۱۰۰۲" } },
  { id: 4, number: "B04", ward: "عمومی", occupied: false, patient: null },
  { id: 5, number: "B05", ward: "ICU", occupied: true, patient: { id: 103, name: "رضا احمدی", age: 56, gender: "مرد", medicalRecord: "پرونده ۱۰۰۳" } },
  { id: 6, number: "B06", ward: "عمومی", occupied: false, patient: null },
  { id: 7, number: "B07", ward: "ICU", occupied: true, patient: { id: 104, name: "ندا کریمی", age: 28, gender: "زن", medicalRecord: "پرونده ۱۰۰۴" } },
  { id: 8, number: "B08", ward: "عمومی", occupied: false, patient: null },
  { id: 9, number: "B09", ward: "ICU", occupied: true, patient: { id: 105, name: "حسن قربانی", age: 60, gender: "مرد", medicalRecord: "پرونده ۱۰۰۵" } },
  { id: 10, number: "B10", ward: "عمومی", occupied: false, patient: null },
  { id: 11, number: "B11", ward: "ICU", occupied: true, patient: { id: 106, name: "لیلا صادقی", age: 34, gender: "زن", medicalRecord: "پرونده ۱۰۰۶" } },
  { id: 12, number: "B12", ward: "عمومی", occupied: false, patient: null },
  { id: 13, number: "B13", ward: "ICU", occupied: true, patient: { id: 107, name: "مهدی جعفری", age: 50, gender: "مرد", medicalRecord: "پرونده ۱۰۰۷" } },
  { id: 14, number: "B14", ward: "عمومی", occupied: false, patient: null },
  { id: 15, number: "B15", ward: "ICU", occupied: true, patient: { id: 108, name: "فاطمه حسینی", age: 40, gender: "زن", medicalRecord: "پرونده ۱۰۰۸" } },
  { id: 16, number: "B16", ward: "عمومی", occupied: false, patient: null },
  { id: 17, number: "B17", ward: "ICU", occupied: true, patient: { id: 109, name: "سعید کیانی", age: 37, gender: "مرد", medicalRecord: "پرونده ۱۰۰۹" } },
  { id: 18, number: "B18", ward: "عمومی", occupied: false, patient: null },
  { id: 19, number: "B19", ward: "ICU", occupied: true, patient: { id: 110, name: "نیلوفر شیری", age: 29, gender: "زن", medicalRecord: "پرونده ۱۰۱۰" } },
  { id: 20, number: "B20", ward: "عمومی", occupied: false, patient: null }
];

const hospitalSections = [
  { id: 1, secName: 'جراحی قلب', totalBed: 45, occupaidBed: 12 },
  { id: 2, secName: 'جراحی مغز و اعصاب', totalBed: 38, occupaidBed: 21 },
  { id: 3, secName: 'جراحی عمومی', totalBed: 52, occupaidBed: 40 },
  { id: 4, secName: 'ارتوپدی', totalBed: 30, occupaidBed: 18 },
  { id: 5, secName: 'ICU', totalBed: 20, occupaidBed: 15 },
  { id: 6, secName: 'CCU', totalBed: 25, occupaidBed: 9 },
  { id: 7, secName: 'داخلی', totalBed: 48, occupaidBed: 17 },
  { id: 8, secName: 'زنان و زایمان', totalBed: 34, occupaidBed: 22 },
  { id: 9, secName: 'اطفال', totalBed: 28, occupaidBed: 17 },
  { id: 10, secName: 'اورژانس', totalBed: 40, occupaidBed: 35 },
  { id: 11, secName: 'رادیولوژی', totalBed: 15, occupaidBed: 9 }
];

const hospitalDevices = [
  { name: "MRI Scanner", status: "فعال", idleHours: 0 },
  { name: "CT Scanner", status: "در حال تعمیر", idleHours: 4 },
  { name: "X-Ray Machine", status: "فعال", idleHours: 1 },
  { name: "Ultrasound", status: "غیرفعال", idleHours: 6 },
  { name: "ECG Machine", status: "فعال", idleHours: 0 },
  { name: "Ventilator", status: "فعال", idleHours: 0 },
  { name: "Defibrillator", status: "در حال تعمیر", idleHours: 3 },
  { name: "Infusion Pump", status: "غیرفعال", idleHours: 5 },
  { name: "Dialysis Machine", status: "فعال", idleHours: 2 },
  { name: "Patient Monitor", status: "فعال", idleHours: 1 },
];




export { topConsumer, areas, noganData, summaryData, productList, devices, factories , beds , hospitalSections , hospitalDevices}