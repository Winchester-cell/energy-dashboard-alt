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
import BOMTab from "@/components/Templates/WorkFlowSettings/BOMTab";
import FlowsTab from "@/components/Templates/WorkFlowSettings/FlowsTab";
import ProductsTab from "@/components/Templates/WorkFlowSettings/ProductsTab";
import Comments from "@/components/Templates/MaintenaceDetail/comments";
import DutiesTab from "@/components/Templates/MaintenaceDetail/duties";
import LogDetailsTab from "@/components/Templates/MaintenaceDetail/LogDetailsTab";
import SuppliesParts from "@/components/Templates/MaintenaceDetail/suppliesparts";
import ProgressTab from "@/components/Templates/WorkOrders/ProgressTab";
import BPM from "@/components/Templates/WorkOrders/BPM";
import Consumption from "@/components/Templates/WorkOrders/Consumption";
import PredictTab from "@/components/Templates/PeopleCount/AiCenter/PredictTab";
import BehaviorAnalysis from "@/components/Templates/PeopleCount/AiCenter/BehaviorAnalysis";


export const devicesHubTabsContent = [
    { id: 1, tabName: 'دستگاه ها', selectKey: 'devices', elem: <DevicesTab /> },
    { id: 2, tabName: 'مراکز کاری', selectKey: 'workcenter', elem: <WorkCenterTab /> },
    { id: 3, tabName: 'دارایی ها', selectKey: 'assets', elem: <AssetsTab /> },
]


export const workflowSettingsTabs = [
    { id: 1, tabName: '📦 محصولات و مواد اولیه', selectKey: 'products', elem: <ProductsTab /> },
    { id: 2, tabName: '📋 فرمول ساخت (BOM)', selectKey: 'formula', elem: <BOMTab /> },
    { id: 3, tabName: '🔄 فرآیندهای تولید (Flows)', selectKey: 'flows', elem: <FlowsTab /> },
]

export const workOrdersPageTabs = [
    { id: 1, tabName: 'خلاصه و پیشرفت', selectKey: 'progress', elem: <ProgressTab /> },
    { id: 2, tabName: 'وظایف فرآیند', selectKey: 'BPM', elem: <BPM /> },
    { id: 3, tabName: 'مصرف مواد', selectKey: 'consumption', elem: <Consumption /> },
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
    { id: 1, tabName: 'جزئیات و لاگ‌ها', selectKey: 'logdetails', elem: <LogDetailsTab /> },
    { id: 2, tabName: 'وظایف(BPM)', selectKey: 'duties', elem: <DutiesTab /> },
    { id: 3, tabName: 'قطعات مصرفی', selectKey: 'suppliesparts', elem: <SuppliesParts /> },
    { id: 4, tabName: 'کامنت‌ها', selectKey: 'comments', elem: <Comments /> },
]


export const peopleCountAiCenterTabs = [
    { id: 1, tabName: '📈 پیش‌بینی تردد', selectKey: 'predict', elem: <PredictTab /> },
    { id: 2, tabName: '🎯 تحلیل رفتار', selectKey: 'behavanalys', elem: <BehaviorAnalysis /> },
    { id: 3, tabName: '🔬 آزمایشگاه بهینه‌سازی', selectKey: 'optimizLab', elem: <PredictTab /> },
]