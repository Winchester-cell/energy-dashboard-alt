import useDynamicDashboardStore from "@/stores/useDynamicDashboardStore"
import { useEffect, useState } from "react"
import widgetModalContent from "@/content/widgetModalContent"
import WidgetOptionRender from "./WidgetOptionRender"

export default function WidgetModal({ isOpen, setIsOpen }) {

    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [widgetTypeConfig, setWidgetTypeConfig] = useState('')
    const { setIsEditing } = useDynamicDashboardStore()

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown)
        } else {
            window.removeEventListener("keydown", handleKeyDown)
        }

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen])

    return (
        <div className={`${isOpen ? 'opacity-100 z-[999999]' : 'opacity-0 -z-[999999]'} transition-all duration-500 flex fixed items-center justify-center w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-md`}>

            <button onClick={() => setIsOpen(false)} className="text-4xl fixed top-5 start-10">✖</button>

            <div className={`w-full flex flex-col gap-10 items-center justify-center transition-all duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {
                    !isButtonClicked &&
                    <div className="grid grid-cols-2 gap-2">
                        {
                            widgetModalContent.buttons.map(button => {
                                return (
                                    <button
                                        key={button.id}
                                        className="bg-[var(--colCard)] py-2 px-5 rounded-full"
                                        onClick={() => {
                                            setWidgetTypeConfig(button.type)
                                            setIsButtonClicked(true)
                                            setIsEditing(true)
                                        }}
                                    >
                                        {button.name}
                                    </button>
                                )
                            })
                        }

                    </div>
                }
                {
                    isButtonClicked &&
                    <WidgetOptionRender setIsButtonClicked={setIsButtonClicked} widgetTypeConfig={widgetTypeConfig} />
                }


            </div>

        </div>
    )
}