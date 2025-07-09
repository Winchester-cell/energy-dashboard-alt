import { FaHome, FaUser } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { SiSitecore } from "react-icons/si";


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
        { textKey: 'sideBarSection.devices', href: '#', icon: <MdDevices /> },
        { textKey: 'sideBarSection.sites', href: '#', icon: <SiSitecore /> },
        { textKey: 'sideBarSection.users', href: '#', icon: <FaUser /> },
        { textKey: 'sideBarSection.reports', href: '#', icon: <TbReport /> },
    ],
    settings: {
        textKey: 'sideBarSection.settings'
    },
}

export default SideBarContent