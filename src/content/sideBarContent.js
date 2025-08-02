import { FaHome, FaUser, FaStar } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { SlOrganization } from "react-icons/sl";


const SideBarContent = {
    profileSection: {
        username: { textKey: 'sideBarSection.username' },
        role: { textKey: 'sideBarSection.admin' },
    },
    navigation: {
        textKey: 'sideBarSection.navigation'
    },
    links: [
        { type: 'item', textKey: 'sideBarSection.dashboard', href: '/', icon: <FaHome /> },
        { type: 'item', textKey: 'sideBarSection.organization', href: '/organizations', icon: <SlOrganization /> },
        { type: 'item', textKey: 'sideBarSection.dashboardManager', href: '/dashboard-management', icon: <SlOrganization /> },
        { type: 'item', textKey: 'sideBarSection.users', href: '/users', icon: <FaUser /> },
        { type: 'item', textKey: 'sideBarSection.devices', href: '/devices', icon: <MdDevices /> },
        { type: 'item', textKey: 'sideBarSection.reports', href: '#', icon: <TbReport /> },
        {
            type: 'dropdown',
            openKey: 'menu1',
            textKey: 'منوی کشویی',
            icon: <MdDevices />,
            href: '#',
            submenu: [
                { textKey: 'منوی اول', href: '#', icon: <FaStar /> },
                { textKey: 'منوی دوم', href: '#', icon: <FaStar /> },
            ]
        },
        {
            type: 'dropdown',
            openKey: 'menu2',
            textKey: 'منوی کشویی',
            icon: <MdDevices />,
            href: '#',
            submenu: [
                { textKey: 'منوی اول', href: '#', icon: <FaStar /> },
                { textKey: 'منوی دوم', href: '#', icon: <FaStar /> },
            ]
        },
    ],
    settings: {
        textKey: 'sideBarSection.settings'
    },
}

export default SideBarContent