import { toPersianDigits } from "@/utils/toPersianDigits";
import { useTranslation } from 'react-i18next';
import { FaUserFriends } from "react-icons/fa";
import Loading from "../Loadings/Loading";


export default function CountInfoCard({ title, count, isLoading }) {

    const { t } = useTranslation()

    return (
        <div className='w-full rounded-xl flex items-center justify-center text-[var(--colTextA)] bg-opacity-50 p-10 gap-[clamp(18px,0.8dvw,47px)] shadow-md bg-[var(--colCard)]'>

            {
                isLoading && <Loading size={10} />
            }
            {
                !isLoading &&
                <>
                    <FaUserFriends className='text-[clamp(40px,4.5dvw,140px)]' />

                    <div className='w-auto flex flex-col gap-1 justify-center text-[clamp(14px,1.1dvw,40px)]'>
                        <div className='font-bold'>{t(title)}</div>
                        <div>{toPersianDigits(count)}</div>
                    </div>
                </>
            }


        </div>
    )
}
