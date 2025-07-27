import { FaPlus } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import OrganizationCard from "@/components/Modules/Cards/OrganizationCard";

const organizationsPageContent = {

    btnLinks: [
        { textKey: 'addDeviceButton', href: '/add-device', icon: <FaPlus /> },
        { textKey: 'deviceSettings', href: '/device-settings', icon: <AiFillSetting /> },
    ],

    cardComponent: OrganizationCard

}

export default organizationsPageContent