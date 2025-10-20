import {
    MdDashboard, MdFactory, MdEventAvailable, MdInventory,
    MdBuild, MdChecklistRtl, MdWarning, MdSettings, MdGroup,
    MdAccountTree, MdSecurity, MdDevices, MdStorage, MdSettingsPower,
    MdLocationOn, MdBusiness, MdInsights, MdLocalHospital

} from "react-icons/md"

import {
    FaRocketchat, FaClipboardList, FaChartLine, FaBoxes, FaExchangeAlt, FaUsers,
    FaWarehouse, FaBuilding, FaUserFriends, FaShoppingCart, FaShippingFast,
    FaCartPlus, FaHandshake, FaCalculator, FaFolderOpen, FaFileAlt, FaCogs,
    FaBolt, FaTachometerAlt, FaRecycle, FaLeaf, FaStore, FaChartBar, FaRegCalendarAlt,
    FaListAlt, FaProjectDiagram, FaDatabase, FaLightbulb, FaServer, FaChartArea, FaAmbulance, FaPills,

} from "react-icons/fa";

import { IoChatbubbles } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { GiBrain, GiScalpel } from 'react-icons/gi';

import Nurse from '@/asset/nurse.svg'


const sideBarLinksContent = {
    fields: [
        {
            title: 'داشبورد',
            icon: <MdDashboard />,
            links: [
                { type: 'item', text: 'داشبورد', href: '/', icon: <MdDashboard /> },
                {
                    type: 'dropdown',
                    text: 'بیمارستان هوشمند',
                    icon: <MdLocalHospital />,
                    options: [
                        { type: 'item', text: 'مرکز فرماندهی', href: '/hospital/command-center', icon: <FaChartArea /> },
                        { type: 'item', text: 'بخش اورژانس', href: '/hospital/emergency-department', icon: <FaAmbulance /> },
                        { type: 'item', text: 'بخش داخلی', href: '/hospital/inpatient-ward', icon: <Nurse className={`w-5 h-5`} /> },
                        { type: 'item', text: 'مدیریت بیماران', href: '/hospital/patients', icon: <FaUsers /> },
                        { type: 'item', text: 'بخش جراحی', href: '/hospital/surgery', icon: <GiScalpel /> },
                        { type: 'item', text: 'داروخانه', href: '/hospital/pharmacy', icon: <FaPills /> },
                        { type: 'item', text: 'امور مالی', href: '/hospital/finance', icon: <FaCalculator /> },
                    ]
                },
            ]

        },
        {
            title: 'همکاری و ارتباط',
            icon: <FaRocketchat />,
            links: [
                { type: 'item', text: 'رویداد ها', href: '#', icon: <MdEventAvailable /> },
                { type: 'item', text: 'گفتگو ها', href: '#', icon: <IoChatbubbles /> },
            ]
        },
        {
            title: 'عملیات',
            icon: <MdFactory />,
            links: [
                { type: 'item', text: 'مرکز کنترل تجهیزات', href: '/control-center', icon: <MdDashboard /> }, ,
                {
                    type: 'dropdown',
                    text: 'تولید',
                    icon: <MdFactory />,
                    options: [
                        { type: 'item', text: 'داشبورد تولید', href: '/manufacturing/dashboard', icon: <AiFillProduct /> },
                        { type: 'item', text: 'سفارشات کار', href: '/manufacturing/work-orders', icon: <FaClipboardList /> },
                        { type: 'item', text: 'گزارش تولید', href: '#', icon: <FaChartLine /> },
                    ]
                },
                {
                    type: 'dropdown',
                    text: 'انبارداری',
                    icon: <FaBoxes />,
                    options: [
                        { type: 'item', text: 'داشبورد انبار', href: '/inventory/dashboard', icon: <FaWarehouse /> },
                        { type: 'item', text: 'موجودی کالا', href: '#', icon: <MdInventory /> },
                        { type: 'item', text: 'تراکنش های انبار', href: '/inventory/inventory-transaction', icon: <FaExchangeAlt /> },
                    ]
                },
                {
                    type: 'dropdown',
                    text: 'نگهداری و تعمیرات',
                    icon: <MdBuild />,
                    options: [
                        { type: 'item', text: 'داشبورد نت', href: '/maintenance', icon: <AiFillProduct /> },
                        { type: 'item', text: 'دستورکار های نت', href: '/maintenace-detail', icon: <MdChecklistRtl /> },
                    ]
                },
            ]
        },
        {
            title: 'کسب و کار',
            icon: <FaBuilding />,
            links: [
                {
                    type: 'dropdown',
                    text: 'مشتریان',
                    icon: <FaUserFriends />,
                    options: [
                        { type: 'item', text: 'مشتریان و مخاطبین', href: '#', icon: <FaUserFriends /> },
                        { type: 'item', text: 'سفارشات فروش', href: '#', icon: <FaShoppingCart /> },
                    ]
                },
                {
                    type: 'dropdown',
                    text: 'تدارکات',
                    icon: <FaShippingFast />,
                    options: [
                        { type: 'item', text: 'تامین کنندگان', href: '#', icon: <FaHandshake /> },
                        { type: 'item', text: 'سفارشات خرید', href: '#', icon: <FaCartPlus /> },
                    ]
                },
                {
                    type: 'dropdown',
                    text: 'امور مالی',
                    icon: <FaCalculator />,
                    options: [
                        { type: 'item', text: 'داشبورد مالی', href: '#', icon: <AiFillProduct /> },
                        { type: 'item', text: 'سرفصل های حسابداری', href: '#', icon: <FaFolderOpen /> },
                        { type: 'item', text: 'اسناد حسابداری', href: '#', icon: <FaFileAlt /> },
                    ]
                },
            ]
        },
        {
            title: 'راهکار های تخصصی',
            icon: <FaCogs />,
            links: [
                {
                    type: 'dropdown',
                    text: 'مدیریت انرژی',
                    icon: <FaBolt />,
                    options: [
                        { type: 'item', text: 'داشبورد انرژی', href: '#', icon: <AiFillProduct /> },
                        { type: 'item', text: 'مدیریت دیماند', href: '#', icon: <FaTachometerAlt /> },
                        { type: 'item', text: 'آب و محیط زیست', href: '#', icon: <FaRecycle /> },
                    ]
                },
                {
                    type: 'dropdown',
                    text: 'شمارش افراد',
                    icon: <FaUsers />,
                    options: [
                        { type: 'item', text: 'داشبورد', href: '/people-count-dashboard', icon: <AiFillProduct /> },
                        { type: 'item', text: 'مرکز هوش مصنوعی', href: '/people-count/ai-center', icon: <GiBrain /> },
                        { type: 'item', text: 'پیکر بندی شمارش', href: '/people-count/configuration', icon: <MdDevices /> },
                    ]
                },

            ]
        },
        {
            title: 'تحلیل و گزارشات',
            icon: <FaChartBar />,
            links: [
                {
                    type: 'dropdown',
                    text: 'مرکز هوش مصنوعی',
                    icon: <GiBrain />,
                    options: [
                        { type: 'item', text: 'پیشبینی ها', href: '#', icon: <FaRegCalendarAlt /> },
                        { type: 'item', text: 'ناهنجاری ها', href: '#', icon: <MdWarning /> },
                    ]
                },
                {
                    type: 'dropdown',
                    text: 'داشبورد های من',
                    icon: <MdDashboard />,
                    options: [
                        { type: 'item', text: 'لیست داشبورد ها', href: '/dashboard-management', icon: <FaListAlt /> },
                    ]
                },
            ]
        },
        {
            title: 'تنظیمات',
            icon: <MdSettings />,
            links: [
                {
                    type: 'dropdown',
                    text: 'سازمان و تیم',
                    icon: <MdGroup />,
                    options: [
                        { type: 'item', text: 'ساختار سازمانی', href: '/organizations', icon: <MdAccountTree /> },
                        { type: 'item', text: 'تیم و دسترسی ها', href: '#', icon: <MdSecurity /> },
                    ]
                },
                {
                    type: 'dropdown',
                    text: 'زیرساخت پلتفرم',
                    icon: <MdStorage />,
                    options: [
                        { type: 'item', text: 'دستگاه ها و دارایی ها', href: '/devices-hub', icon: <MdDevices /> },
                        { type: 'item', text: 'پروفایل های دستگاه', href: '/devices-profiles', icon: <FaServer /> },
                        { type: 'item', text: 'متریک ها', href: '/metrics', icon: <MdInsights /> },
                        { type: 'item', text: 'فرایند ساز', href: '/flow', icon: <FaProjectDiagram /> },
                        { type: 'item', text: 'پیکربندی فرایند ها', href: '/workflow-settings', icon: <FaProjectDiagram /> },
                        { type: 'item', text: 'مدل ساز داده', href: '#', icon: <FaDatabase /> },
                    ]
                },
                {
                    type: 'dropdown',
                    text: 'راهکار ها',
                    icon: <FaLightbulb />,
                    options: [
                        { type: 'item', text: 'تنظیمات انرژی', href: '#', icon: <MdSettingsPower /> },
                        { type: 'item', text: 'تنظیمات تولید', href: '#', icon: <MdFactory /> },
                    ]
                },
            ]
        },
    ]
}


export default sideBarLinksContent