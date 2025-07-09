import { FaBoltLightning, FaCircleDollarToSlot } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";

const cardInfosContent = [
    { title: 'مجموع مصرف', icon: <FaBoltLightning />, value: 2000 },
    { title: 'مجموع هزینه', icon: <FaCircleDollarToSlot />, value: 500 },
    { title: 'هشدار مصرف غیرعادی', icon: <CgDanger  />, value: 2500 },
    { title: 'مصرف بیشینه', icon: <FaChartBar />, value: 400 },
    { title: 'پر مصرف ترین واحد', icon: <FaChartBar />, value: 400 },
    { title: 'کم مصرف ترین واحد', icon: <FaChartBar />, value: 400 },
]

export default cardInfosContent