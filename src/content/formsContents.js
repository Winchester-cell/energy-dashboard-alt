export const addDevicesProfileFormFields = [
    { fieldName: 'نام پروفایل', registerKey: 'name', inputType: 'normalText' },
    { fieldName: 'سازنده', registerKey: 'manufacturer', inputType: 'normalText' },
    { fieldName: 'متریک ها', registerKey: 'supported_metrics', inputType: 'multiSelect' , optionKey:'metrics'},
]

export const addMetricsFormFields = [
    { fieldName: 'نام کلیدی', registerKey: 'key_name', inputType: 'normalText' },
    { fieldName: 'نام', registerKey: 'verbose_name', inputType: 'normalText' },
    { fieldName: 'واحد اندازه گیری', registerKey: 'unit_of_measure', inputType: 'normalText' },
]