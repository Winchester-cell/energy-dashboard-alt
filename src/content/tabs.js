import AssetsTab from "@/components/Templates/DevicesHub/AssetsTab";
import DevicesTab from "@/components/Templates/DevicesHub/DevicesTab";
import WorkCenterTab from "@/components/Templates/DevicesHub/WorkCenterTab";
import CureProcessTab from "@/components/Templates/Hospital/Patients/PatientsDynamicInfo/CureProcessTab";
import LabResultsTab from "@/components/Templates/Hospital/Patients/PatientsDynamicInfo/LabResultsTab";
import MedPhotosTab from "@/components/Templates/Hospital/Patients/PatientsDynamicInfo/MedPhotosTab";
import SummaryTab from "@/components/Templates/Hospital/Patients/PatientsDynamicInfo/SummaryTab";
import VitalSignsChartTab from "@/components/Templates/Hospital/Patients/PatientsDynamicInfo/VitalSignsChartTab";
import PharmcayDashboardTab from "@/components/Templates/Hospital/Pharmacy/DashboardTab";
import WorkListTab from "@/components/Templates/Hospital/Pharmacy/WorkListTab";

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
    { id: 3, tabName: 'مدیریت دارو', selectKey: 'formulary', elem: <PharmcayDashboardTab /> },
]