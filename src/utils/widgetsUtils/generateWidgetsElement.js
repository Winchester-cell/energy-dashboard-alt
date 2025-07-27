import LineChart from "@/components/Modules/Charts/LineChart"

const createWidgetElem = (type, config) => {
    if (type === 'lineChart') {
        return (
            <div className="w-full h-full p-5">
                <LineChart {...config} />
            </div>
        )
    }
}


export default createWidgetElem