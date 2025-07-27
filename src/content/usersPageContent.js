import { FaPlus } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import UserInfoCard from "@/components/Modules/Cards/UserInfoCard";

const usersPageContent = {

    btnLinks: [
        { textKey: 'addDeviceButton', href: '/add-device', icon: <FaPlus /> },
        { textKey: 'deviceSettings', href: '/device-settings', icon: <AiFillSetting /> },
    ],

    cardComponent: UserInfoCard

}

export default usersPageContent