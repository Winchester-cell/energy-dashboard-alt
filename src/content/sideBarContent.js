import { FaHome, FaUser } from "react-icons/fa";
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
        { textKey: 'sideBarSection.dashboard', href: '/', icon: <FaHome /> },
        { textKey: 'sideBarSection.organization', href: '/organizations', icon: <SlOrganization /> },
        { textKey: 'sideBarSection.users', href: '/users', icon: <FaUser /> },
        { textKey: 'sideBarSection.devices', href: '/devices', icon: <MdDevices /> },
        { textKey: 'sideBarSection.reports', href: '#', icon: <TbReport /> },
    ],
    settings: {
        textKey: 'sideBarSection.settings'
    },
}

export default SideBarContent