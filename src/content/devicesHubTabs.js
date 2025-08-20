import AssetsTab from "@/components/Templates/DevicesHub/AssetsTab";
import DevicesTab from "@/components/Templates/DevicesHub/DevicesTab";
import WorkCenterTab from "@/components/Templates/DevicesHub/WorkCenterTab";

export const devicesHubTabsContent = [
    { id: 1, tabName: 'دستگاه ها', selectKey: 'devices', elem: <DevicesTab /> },
    { id: 2, tabName: 'مراکز کاری', selectKey: 'workcenter', elem: <WorkCenterTab /> },
    { id: 3, tabName: 'دارایی ها', selectKey: 'assets', elem: <AssetsTab /> },
]