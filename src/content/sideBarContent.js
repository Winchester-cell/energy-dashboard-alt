import { FaHome , FaUser  } from "react-icons/fa";
import { FcMultipleDevices } from "react-icons/fc";
import { RiRouteFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { SiSitecore } from "react-icons/si";


const SideBarContent = {
    profileSection: {
        username: {textKey : 'sideBarSection.username'},
        role: {textKey : 'sideBarSection.admin'},
    } , 
    navigation: {
        textKey:'sideBarSection.navigation'
    },
    links: [
        { textKey:'sideBarSection.dashboard' , href:'/' , icon:<FaHome className="text-blue-500"/>} , 
        { textKey:'sideBarSection.devices' , href:'#' , icon:<FcMultipleDevices />} , 
        { textKey:'sideBarSection.sites' , href:'#' , icon:<SiSitecore className="text-red-500"/>} , 
        { textKey:'sideBarSection.users' , href:'#' , icon:<FaUser className="text-purple-500"/>} , 
        { textKey:'sideBarSection.reports' , href:'#' , icon:<TbReport className="text-[var(--colTextA)]"/>} , 
    ],
     settings: {
        textKey:'sideBarSection.settings'
    },
}

export default SideBarContent