import AssetsTab from "@/components/Templates/DevicesHub/AssetsTab";
import DeviceProfileTab from "@/components/Templates/DevicesHub/DeviceProfileTab";
import DevicesTab from "@/components/Templates/DevicesHub/DevicesTab";

export const devicesHubTabsContent = [
    { id: 1, tabName: 'دستگاه ها', selectKey: 'devices', elem: <DevicesTab /> },
    { id: 2, tabName: 'پروفایل های دستگاه', selectKey: 'profiles', elem: <DeviceProfileTab /> },
    { id: 3, tabName: 'دارایی ها', selectKey: 'assets', elem: <AssetsTab /> },
]