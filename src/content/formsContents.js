export const addDevicesProfileFormFields = [
    { fieldName: 'نام پروفایل', registerKey: 'name', inputType: 'normalText' },
    { fieldName: 'سازنده', registerKey: 'manufacturer', inputType: 'normalText' },
    { fieldName: 'انتخاب متریک', registerKey: 'supported_metrics', inputType: 'multiSelect', optionKey: 'metrics' },
]

export const addMetricsFormFields = [
    { fieldName: 'نام کلیدی', registerKey: 'key_name', inputType: 'normalText' },
    { fieldName: 'نام', registerKey: 'verbose_name', inputType: 'normalText' },
    { fieldName: 'واحد اندازه گیری', registerKey: 'unit_of_measure', inputType: 'normalText' },
]


export const addDeviceFormFields = [
    { fieldName: 'نام دستگاه', registerKey: 'name', inputType: 'normalText' },
    { fieldName: 'آیدی دستگاه', registerKey: 'unique_id', inputType: 'normalText' },
    { fieldName: 'انتخاب سازمان', registerKey: 'organization', inputType: 'select' , optionKey: 'organization' },
    { fieldName: 'انتخاب پروفایل', registerKey: 'profile', inputType: 'select' ,  optionKey: 'profile' },
]