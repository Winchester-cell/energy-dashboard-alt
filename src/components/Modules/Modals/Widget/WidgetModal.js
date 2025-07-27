import useDynamicDashboardStore from "@/stores/useDynamicDashboardStore"
import ChartConfigModal from "./LineChartOptions/LineChartConfigModal"
import { useState } from "react"

export default function WidgetModal({ isOpen, setIsOpen }) {

    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [widgetTypeConfig, setWidgetTypeConfig] = useState('')
    const { setIsEditing } = useDynamicDashboardStore()

    const lineChartBtnClickHandler = () => {
        setWidgetTypeConfig('lineChart')
        setIsButtonClicked(true)
        setIsEditing(true)
    }

    return (
        <div className={`${isOpen ? 'opacity-100 z-[999999]' : 'opacity-0 -z-[999999]'} transition-all duration-500 flex fixed items-center justify-center w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-md`}>

            <button onClick={() => setIsOpen(false)} className="text-4xl fixed top-5 start-10">✖</button>

            <div className={`w-full flex flex-col gap-10 items-center justify-center transition-all duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {
                    !isButtonClicked &&
                    <div className="grid grid-cols-2 gap-2">
                        <button className="bg-[var(--colCard)] py-2 px-5 rounded-full" onClick={lineChartBtnClickHandler}>افزودن نمودار خطی</button>
                        <button className="bg-[var(--colCard)] py-2 px-5 rounded-full" onClick={lineChartBtnClickHandler}>افزودن کارت</button>
                    </div>
                }
                {
                    isButtonClicked &&
                    <>
                        {
                            widgetTypeConfig === 'lineChart' &&
                            < ChartConfigModal setIsButtonClicked={setIsButtonClicked} />
                        }
                    </>
                }


            </div>

        </div>
    )
}