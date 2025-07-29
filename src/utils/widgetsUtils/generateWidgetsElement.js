import LineChart from "@/components/Modules/Charts/LineChart"
import { topConsumer } from "@/data/fakeData"
import { toPersianDigits } from "../toPersianDigits"
import BarChart from "@/components/Modules/Charts/BarChart"

const createWidgetElem = (type, config) => {
    if (type === 'line_chart') {
        return (
            <div className="w-full h-full p-5">
                <LineChart {...config} />
            </div>
        )
    } else if (type === 'data_table') {
        return (
            <div className="p-5">
                <table className="w-full text-[14px] text-center">

                    <thead className="border-b-2 border-[var(--colTextC)]">
                        <tr>
                            <th className="px-5 pb-2">ردیف</th>
                            <th className="px-5 pb-2">نام مجموعه</th>
                            <th className="px-5 pb-2">مصرف برق</th>
                            <th className="px-5 pb-2">مصرف گاز</th>
                            <th className="px-5 pb-2">مبلغ</th>
                        </tr>
                    </thead>

                    <tbody>
                        {topConsumer.map((item, index) => (
                            <tr
                                key={item.id}
                                className={`${topConsumer.length - 1 === index ? `` : `border-b-2 border-[var(--colTextC)]`} `}
                            >
                                <td className="p-2">{toPersianDigits(item.id)}</td>
                                <td className="p-2">{toPersianDigits(item.name)}</td>
                                <td className="p-2">{toPersianDigits(item.totalPowerConsume)}</td>
                                <td className="p-2">{toPersianDigits(item.totalGasConsume)}</td>
                                <td className="p-2">{toPersianDigits(item.cost)}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    } else if (type === 'bar_chart') {
        return (
            <div className='p-5 w-ful h-full'>
                <BarChart />
            </div>
        )
    }
}


export default createWidgetElem