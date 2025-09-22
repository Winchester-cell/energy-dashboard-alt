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


// hospital

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

const emergencyPatient = [
    {
        id: 1,
        name: 'احمد محمدی',
        mainArg: 'درد شدید قفسه سینه',
        age: 45,
        gender: 'مرد',
        status: 'بحرانی',
        onWay: false,
        vitalSigns: { heartbeat: 117, oxy: 96 },
        emergencyTasks: [
            { id: 1, task: 'ECG فوری', isDone: true },
            { id: 2, task: 'آزمایش خون', isDone: false },
            { id: 3, task: 'مشاوره قلب', isDone: false },
        ],
    },
    {
        id: 2,
        name: 'فاطمه احمدی',
        mainArg: 'تب و سردرد شدید',
        age: 31,
        gender: 'زن',
        status: 'فوری',
        onWay: true,
        vitalSigns: { heartbeat: 91, oxy: 96 },
        emergencyTasks: [
            { id: 1, task: 'اندازه گیری تب', isDone: false },
            { id: 2, task: 'آزمایش ادرار', isDone: false },
            { id: 3, task: 'داروی ضد درد', isDone: false },
        ],
    },
    {
        id: 3,
        name: 'علی رضایی',
        mainArg: 'درد شکم',
        age: 20,
        gender: 'مرد',
        status: 'استاندارد',
        onWay: false,
        vitalSigns: { heartbeat: 61, oxy: 98 },
        emergencyTasks: [
            { id: 1, task: 'معاینه شکم', isDone: false },
            { id: 2, task: 'سونوگرافی', isDone: false },
        ],
    },
    {
        id: 4,
        name: 'مریم احمدی',
        mainArg: 'سرگیجه خفیف',
        age: 28,
        gender: 'زن',
        status: 'غیر فوری',
        onWay: false,
        vitalSigns: { heartbeat: 91, oxy: 96 },
        emergencyTasks: [
            { id: 1, task: 'اندازه گیری فشارخون', isDone: false },
            { id: 2, task: 'مشاوره عمومی', isDone: false },
        ],
    },
    {
        id: 5,
        name: 'رضا کریمی',
        mainArg: 'سرفه شدید و تنگی نفس',
        age: 60,
        gender: 'مرد',
        status: 'بحرانی',
        onWay: true,
        vitalSigns: { heartbeat: 132, oxy: 82 },
        emergencyTasks: [
            { id: 1, task: 'اکسیژن تراپی', isDone: false },
            { id: 2, task: 'رادیوگرافی قفسه سینه', isDone: false },
            { id: 3, task: 'مشاوره ریه', isDone: false },
        ],
    },
    {
        id: 6,
        name: 'سارا موسوی',
        mainArg: 'سقوط از ارتفاع',
        age: 35,
        gender: 'زن',
        status: 'فوری',
        onWay: false,
        vitalSigns: { heartbeat: 110, oxy: 94 },
        emergencyTasks: [
            { id: 1, task: 'سی‌تی‌اسکن مغز', isDone: false },
            { id: 2, task: 'عکس‌برداری لگن', isDone: false },
            { id: 3, task: 'بررسی شکستگی', isDone: false },
        ],
    },
    {
        id: 7,
        name: 'محمد جلالی',
        mainArg: 'تصادف رانندگی',
        age: 29,
        gender: 'مرد',
        status: 'فوری',
        onWay: true,
        vitalSigns: { heartbeat: 125, oxy: 90 },
        emergencyTasks: [
            { id: 1, task: 'کنترل خونریزی', isDone: true },
            { id: 2, task: 'سرم‌تراپی', isDone: false },
            { id: 3, task: 'عکس‌برداری ستون فقرات', isDone: false },
        ],
    },
    {
        id: 8,
        name: 'زهرا قاسمی',
        mainArg: 'سردرد میگرنی',
        age: 26,
        gender: 'زن',
        status: 'استاندارد',
        onWay: false,
        vitalSigns: { heartbeat: 78, oxy: 98 },
        emergencyTasks: [
            { id: 1, task: 'داروی ضد میگرن', isDone: false },
            { id: 2, task: 'مشاوره نورولوژی', isDone: false },
        ],
    },
    {
        id: 9,
        name: 'کامران نوری',
        mainArg: 'سوختگی دست',
        age: 40,
        gender: 'مرد',
        status: 'استاندارد',
        onWay: false,
        vitalSigns: { heartbeat: 92, oxy: 97 },
        emergencyTasks: [
            { id: 1, task: 'پانسمان سوختگی', isDone: false },
            { id: 2, task: 'داروی مسکن', isDone: false },
        ],
    },
    {
        id: 10,
        name: 'لیلا یوسفی',
        mainArg: 'حمله آسم',
        age: 19,
        gender: 'زن',
        status: 'بحرانی',
        onWay: true,
        vitalSigns: { heartbeat: 140, oxy: 75 },
        emergencyTasks: [
            { id: 1, task: 'اسپری تنفسی', isDone: true },
            { id: 2, task: 'اکسیژن تراپی', isDone: false },
            { id: 3, task: 'مشاوره ریه', isDone: false },
        ],
    },
    {
        id: 11,
        name: 'حسین شریفی',
        mainArg: 'بیهوشی کوتاه‌مدت',
        age: 52,
        gender: 'مرد',
        status: 'فوری',
        onWay: false,
        vitalSigns: { heartbeat: 102, oxy: 92 },
        emergencyTasks: [
            { id: 1, task: 'کنترل فشارخون', isDone: false },
            { id: 2, task: 'نوار مغز', isDone: false },
        ],
    },
    {
        id: 12,
        name: 'ندا عباسی',
        mainArg: 'حالت تهوع شدید',
        age: 34,
        gender: 'زن',
        status: 'استاندارد',
        onWay: false,
        vitalSigns: { heartbeat: 86, oxy: 99 },
        emergencyTasks: [
            { id: 1, task: 'تزریق سرم', isDone: false },
            { id: 2, task: 'آزمایش خون', isDone: false },
        ],
    },
    {
        id: 13,
        name: 'محمود فرهادی',
        mainArg: 'درد کمر مزمن',
        age: 47,
        gender: 'مرد',
        status: 'غیر فوری',
        onWay: false,
        vitalSigns: { heartbeat: 74, oxy: 98 },
        emergencyTasks: [
            { id: 1, task: 'مشاوره ارتوپدی', isDone: false },
            { id: 2, task: 'داروی ضد درد', isDone: false },
        ],
    },
    {
        id: 14,
        name: 'الهام رستمی',
        mainArg: 'تپش قلب ناگهانی',
        age: 38,
        gender: 'زن',
        status: 'فوری',
        onWay: true,
        vitalSigns: { heartbeat: 150, oxy: 93 },
        emergencyTasks: [
            { id: 1, task: 'ECG فوری', isDone: false },
            { id: 2, task: 'کنترل دارویی', isDone: false },
        ],
    },
];

const wardInfo = {
    name: "اورژانس",
    rooms: [
        {
            roomNumber: 101,
            beds: [
                {
                    bedNumber: 1,
                    patient: {
                        name: "علی رضایی",
                        status: "مستقر"
                    }
                },
                {
                    bedNumber: 2,
                    patient: {
                        name: "سارا احمدی",
                        status: "بحرانی"
                    }
                }
            ]
        },
        {
            roomNumber: 102,
            beds: [
                {
                    bedNumber: 1,
                    patient: {
                        name: "مهدی حسینی",
                        status: "مستقر"
                    }
                },
                {
                    bedNumber: 2,
                    patient: {
                        name: "نیلوفر کریمی",
                        status: "ترخیص شده"
                    }
                }
            ]
        },
        {
            roomNumber: 103,
            beds: [
                {
                    bedNumber: 1,
                    patient: {
                        name: "حسین رحمانی",
                        status: "بحرانی"
                    }
                },
                {
                    bedNumber: 2,
                    patient: {
                        name: "لیلا موسوی",
                        status: "مستقر"
                    }
                }
            ]
        },
        {
            roomNumber: 104,
            beds: [
                {
                    bedNumber: 1,
                    patient: {
                        name: "امیر محمدی",
                        status: "مستقر"
                    }
                },
                {
                    bedNumber: 2,
                    patient: {
                        name: "زهرا عباسی",
                        status: "ترخیص شده"
                    }
                }
            ]
        },
        {
            roomNumber: 105,
            beds: [
                {
                    bedNumber: 1,
                    patient: {
                        name: "رضا کاظمی",
                        status: "بحرانی"
                    }
                },
                {
                    bedNumber: 2,
                    patient: {
                        name: "مهسا صالحی",
                        status: "مستقر"
                    }
                }
            ]
        }
    ]
};

export const alerts = [
    {
        message: "کاهش اکسیژن خون",
        patientName: "علی رضایی",
        bed: "101-1",
        minutesAgo: 5
    },
    {
        message: "نیاز به دارو",
        patientName: "سارا احمدی",
        bed: "101-2",
        minutesAgo: 15
    },
    {
        message: "تب بالا",
        patientName: "مهدی حسینی",
        bed: "102-1",
        minutesAgo: 30
    },
    {
        message: "فشار خون پایین",
        patientName: "نیلوفر کریمی",
        bed: "102-2",
        minutesAgo: 20
    },
    {
        message: "نیاز به مراقبت ویژه",
        patientName: "حسین رحمانی",
        bed: "103-1",
        minutesAgo: 10
    }
];

export const patients = [
  { id: 1, name: "علی رضایی", nationalId: "0012345678", admissionId: 45623, doctor: "دکتر احمدی", ward: "داخلی", admissionDate: "1404/06/01", status: "بستری", age: 45, gender: "مرد" },
  { id: 2, name: "زهرا محمدی", nationalId: "0012345679", admissionId: 75165, doctor: "دکتر کریمی", ward: "جراحی", admissionDate: "1404/06/02", status: "ترخیص", age: 38, gender: "زن" },
  { id: 3, name: "مهدی کاظمی", nationalId: "0012345680", admissionId: 83215, doctor: "دکتر مرادی", ward: "اورژانس", admissionDate: "1404/06/03", status: "بستری", age: 29, gender: "مرد" },
  { id: 4, name: "سارا حسینی", nationalId: "0012345681", admissionId: 39482, doctor: "دکتر رفیعی", ward: "زنان", admissionDate: "1404/06/04", status: "بستری", age: 34, gender: "زن" },
  { id: 5, name: "محمد جعفری", nationalId: "0012345682", admissionId: 61829, doctor: "دکتر قاسمی", ward: "قلب", admissionDate: "1404/06/05", status: "ترخیص", age: 52, gender: "مرد" },
  { id: 6, name: "الهام موسوی", nationalId: "0012345683", admissionId: 28731, doctor: "دکتر نادری", ward: "داخلی", admissionDate: "1404/06/06", status: "بستری", age: 27, gender: "زن" },
  { id: 7, name: "حمید اکبری", nationalId: "0012345684", admissionId: 56390, doctor: "دکتر رحمانی", ward: "جراحی", admissionDate: "1404/06/07", status: "ترخیص", age: 41, gender: "مرد" },
  { id: 8, name: "فاطمه صادقی", nationalId: "0012345685", admissionId: 47826, doctor: "دکتر سلیمی", ward: "اطفال", admissionDate: "1404/06/08", status: "بستری", age: 9, gender: "زن" },
  { id: 9, name: "رضا امیری", nationalId: "0012345686", admissionId: 39517, doctor: "دکتر حیدری", ward: "اورژانس", admissionDate: "1404/06/09", status: "بستری", age: 36, gender: "مرد" },
  { id: 10, name: "نگار شریفی", nationalId: "0012345687", admissionId: 72984, doctor: "دکتر کریمی", ward: "قلب", admissionDate: "1404/06/10", status: "ترخیص", age: 31, gender: "زن" },
  { id: 11, name: "حسین احمدی", nationalId: "0012345688", admissionId: 81642, doctor: "دکتر مرادی", ward: "داخلی", admissionDate: "1404/06/11", status: "بستری", age: 48, gender: "مرد" },
  { id: 12, name: "مریم قربانی", nationalId: "0012345689", admissionId: 47193, doctor: "دکتر رفیعی", ward: "زنان", admissionDate: "1404/06/12", status: "ترخیص", age: 40, gender: "زن" },
  { id: 13, name: "احمد رستمی", nationalId: "0012345690", admissionId: 68425, doctor: "دکتر قاسمی", ward: "اورژانس", admissionDate: "1404/06/13", status: "بستری", age: 33, gender: "مرد" },
  { id: 14, name: "مونا یوسفی", nationalId: "0012345691", admissionId: 53918, doctor: "دکتر نادری", ward: "اطفال", admissionDate: "1404/06/14", status: "بستری", age: 7, gender: "زن" },
  { id: 15, name: "سعید طاهری", nationalId: "0012345692", admissionId: 79834, doctor: "دکتر رحمانی", ward: "قلب", admissionDate: "1404/06/15", status: "ترخیص", age: 55, gender: "مرد" }
];

export const interactions = [
  {
    id: 1,
    time: "13:02",
    patient: "احمد محمدی",
    drugs: "وارفارین + آسپرین",
    risk: "بالا",
    status: "نیاز به بررسی فوری",
    action: "تماس با پزشک"
  },
  {
    id: 2,
    time: "14:20",
    patient: "فاطمه احمدی",
    drugs: "متفورمین + کنتراست یدی",
    risk: "متوسط",
    status: "در حال بررسی",
    action: "بررسی عملکرد کلیه"
  },
  {
    id: 3,
    time: "13:10",
    patient: "علی رضایی",
    drugs: "لیزینوپریل + مکمل پتاسیم",
    risk: "متوسط",
    status: "حل شده",
    action: "نظارت بر پتاسیم سرم"
  },
  {
    id: 4,
    time: "12:30",
    patient: "مریم کریمی",
    drugs: "دیگوکسین + فوروسماید",
    risk: "بالا",
    status: "حل شده",
    action: "تنظیم دوز دیگوکسین"
  },
  {
    id: 5,
    time: "11:45",
    patient: "حسن موسوی",
    drugs: "سیمواستاتین + کلاریترومایسین",
    risk: "بالا",
    status: "حل شده",
    action: "توقف موقت استاتین"
  },
  {
    id: 6,
    time: "10:15",
    patient: "زهرا حسینی",
    drugs: "وارفارین + ایبوپروفن",
    risk: "متوسط",
    status: "حل شده",
    action: "جایگزینی با پاراستامول"
  },
  {
    id: 7,
    time: "09:30",
    patient: "محمد صادقی",
    drugs: "فنی‌توئین + فلوکونازول",
    risk: "پایین",
    status: "حل شده",
    action: "نظارت بر سطح فنی‌توئین"
  }
];


export const drugWorkList = [
  {
    id: 1,
    name: "علی رضایی",
    age: 64,
    ward: "ICU",
    priority: "فوری",
    drug: {
      name: "وارفارین",
      dosage: "۵ میلی‌گرم",
      type: "خوراکی",
    },
    doctor: "دکتر سروش",
    registeredAt: "۲۷ شهریور ۱۴۰۴، ۱۴:۰۰",
    status: "در انتظار تایید",
  },
  {
    id: 2,
    name: "مینا احمدی",
    age: 37,
    ward: "اورژانس",
    priority: "عادی",
    drug: {
      name: "سفتریاکسون",
      dosage: "۱ گرم",
      type: "تزریقی",
    },
    doctor: "دکتر نامداری",
    registeredAt: "۲۸ شهریور ۱۴۰۴، ۱۱:۴۵",
    status: "در انتظار تایید",
  },
  {
    id: 3,
    name: "حسین برزگر",
    age: 52,
    ward: "بخش داخلی",
    priority: "عادی",
    drug: {
      name: "متفورمین",
      dosage: "۵۰۰ میلی‌گرم",
      type: "خوراکی",
    },
    doctor: "دکتر یگانه",
    registeredAt: "۲۸ شهریور ۱۴۰۴، ۱۲:۳۰",
    status: "تایید شده",
  },
  {
    id: 4,
    name: "سارا کریمی",
    age: 45,
    ward: "بخش جراحی",
    priority: "فوری",
    drug: {
      name: "مورفین",
      dosage: "۱۰ میلی‌گرم",
      type: "تزریقی",
    },
    doctor: "دکتر مرادی",
    registeredAt: "۲۸ شهریور ۱۴۰۴، ۱۵:۲۰",
    status: "در انتظار تایید",
  },
  {
    id: 5,
    name: "مجید رفیعی",
    age: 29,
    ward: "بخش عفونی",
    priority: "عادی",
    drug: {
      name: "آزیترومایسین",
      dosage: "۵۰۰ میلی‌گرم",
      type: "خوراکی",
    },
    doctor: "دکتر بهمنی",
    registeredAt: "۲۹ شهریور ۱۴۰۴، ۱۰:۰۰",
    status: "تایید شده",
  },
];

export const medicines = [
  {
    id: 1,
    name: "آموکسی‌سیلین",
    generic: "Amoxicillin",
    form: "کپسول",
    strength: "500 mg",
    barcode: "6260001234567",
  },
  {
    id: 2,
    name: "استامینوفن",
    generic: "Acetaminophen",
    form: "قرص",
    strength: "325 mg",
    barcode: "6260007654321",
  },
  {
    id: 3,
    name: "ایبوپروفن",
    generic: "Ibuprofen",
    form: "قرص",
    strength: "400 mg",
    barcode: "6260001112223",
  },
  {
    id: 4,
    name: "پنی‌سیلین جی",
    generic: "Penicillin G",
    form: "آمپول",
    strength: "1,000,000 IU",
    barcode: "6260005556667",
  },
  {
    id: 5,
    name: "سالبوتامول",
    generic: "Salbutamol",
    form: "شربت",
    strength: "2 mg/5mL",
    barcode: "6260003334445",
  },
  {
    id: 6,
    name: "کلوتریمازول",
    generic: "Clotrimazole",
    form: "پماد",
    strength: "1%",
    barcode: "6260007778889",
  },
];





export { topConsumer, areas, devices, factories, beds, hospitalSections, hospitalDevices, emergencyPatient, wardInfo }