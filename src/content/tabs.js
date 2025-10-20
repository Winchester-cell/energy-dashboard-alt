import AssetsTab from "@/components/Templates/DevicesHub/AssetsTab";
import DevicesTab from "@/components/Templates/DevicesHub/DevicesTab";
import WorkCenterTab from "@/components/Templates/DevicesHub/WorkCenterTab";
import CureProcessTab from "@/components/Templates/Hospital/Patients/PatientsDynamicInfo/CureProcessTab";
import LabResultsTab from "@/components/Templates/Hospital/Patients/PatientsDynamicInfo/LabResultsTab";
import MedPhotosTab from "@/components/Templates/Hospital/Patients/PatientsDynamicInfo/MedPhotosTab";
import SummaryTab from "@/components/Templates/Hospital/Patients/PatientsDynamicInfo/SummaryTab";
import VitalSignsChartTab from "@/components/Templates/Hospital/Patients/PatientsDynamicInfo/VitalSignsChartTab";
import PharmcayDashboardTab from "@/components/Templates/Hospital/Pharmacy/DashboardTab";
import DrugsManagmentTab from "@/components/Templates/Hospital/Pharmacy/DrugsManagmentTab";
import WorkListTab from "@/components/Templates/Hospital/Pharmacy/WorkListTab";
import Comments from "@/components/Templates/MaintenaceDetail/comments";
import DutiesTab from "@/components/Templates/MaintenaceDetail/duties";
import LogDetailsTab from "@/components/Templates/MaintenaceDetail/LogDetailsTab";
import SuppliesParts from "@/components/Templates/MaintenaceDetail/suppliesparts";
import CountingArea from "@/components/Templates/SystemConfiguration/CountingArea";
import EventsCallender from "@/components/Templates/SystemConfiguration/EventsCallender";
import Objects from "@/components/Templates/SystemConfiguration/Objects";
import Warning from "@/components/Templates/SystemConfiguration/Warning";


export const devicesHubTabsContent = [
    { id: 1, tabName: 'دستگاه ها', selectKey: 'devices', elem: <DevicesTab /> },
    { id: 2, tabName: 'مراکز کاری', selectKey: 'workcenter', elem: <WorkCenterTab /> },
    { id: 3, tabName: 'دارایی ها', selectKey: 'assets', elem: <AssetsTab /> },
]

export const patientInfoTabsContent = [
    { id: 1, tabName: 'خلاصه', selectKey: ' summary', elem: <SummaryTab /> },
    { id: 2, tabName: 'علائم حیاتی', selectKey: 'vitalsigns', elem: <VitalSignsChartTab /> },
    { id: 3, tabName: 'نتایج ازمایش', selectKey: 'labresult', elem: <LabResultsTab /> },
    { id: 4, tabName: 'تصاویر پزشکی', selectKey: 'medphoto', elem: <MedPhotosTab /> },
    { id: 5, tabName: 'فرایند درمان', selectKey: 'cureprocess', elem: <CureProcessTab /> },
]

export const pharmacyTabsContent = [
    { id: 1, tabName: 'داشبورد', selectKey: 'dashboard', elem: <PharmcayDashboardTab /> },
    { id: 2, tabName: 'لیست کارها', selectKey: 'worklist', elem: <WorkListTab /> },
    { id: 3, tabName: 'مدیریت دارو', selectKey: 'formulary', elem: <DrugsManagmentTab /> },
]

export const natDetailsTabsContent = [
    {id: 1 , tabName: 'جزئیات و لاگ‌ها' , selectKey: 'logdetails' , elem: <LogDetailsTab/>},
    {id: 2 , tabName: 'وظایف(BPM)' , selectKey: 'duties' , elem: <DutiesTab/>},
    {id: 3 , tabName: 'قطعات مصرفی' , selectKey: 'suppliesparts' , elem: <SuppliesParts/>},
    {id: 4 , tabName: 'کامنت‌ها' , selectKey: 'comments' , elem: <Comments/>},
]

export const systemConfigurationTabsContent = [
    {id: 1, tabName: 'انواع اشیا', selectKey: 'objects', elem: <Objects/>},
    {id: 2, tabName: 'نواحی شمارش', selectKey: 'countingarea', elem: <CountingArea/>},
    {id: 3, tabName: 'تقویم رویدادها', selectKey: 'eventscallender', elem: <EventsCallender/>},
    {id: 4, tabName: 'هشدارها', selectKey: 'warnings', elem: <Warning/>},
]