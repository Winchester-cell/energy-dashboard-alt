import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll';
import { colorVariantSelector } from '@/data/themeVariants';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { toPersianDigits } from '@/utils/formaters/toPersianDigits';
import { usePathname } from 'next/navigation';
import React from 'react'
import { GiCheckMark } from "react-icons/gi";


export default function CureProcessTab() {

  const tasks = [
    {
      taskTitle: "پذیرش و ثبت نام",
      taskDesc: "بیمار پذیرش شده و اطلاعات اولیه ثبت گردید",
      isDone: true,
      doneDate: "3 روز پیش - 08:30",
      inProgress: false
    },
    {
      taskTitle: "معاینه اولیه",
      taskDesc: "معاینه توسط پزشک عمومی انجام شد",
      isDone: true,
      doneDate: "3 روز پیش - 09:15",
      inProgress: false
    },
    {
      taskTitle: "آزمایش‌های تشخیصی",
      taskDesc: "آزمایش خون و تصویربرداری انجام شد",
      isDone: true,
      doneDate: "2 روز پیش - 10:00",
      inProgress: false
    },
    {
      taskTitle: "درمان تخصصی",
      taskDesc: "در حال انجام درمان توسط متخصص قلب",
      isDone: false,
      doneDate: null,
      inProgress: true
    },
    {
      taskTitle: "پیگیری و ترخیص",
      taskDesc: "پیگیری نهایی و آماده‌سازی برای ترخیص",
      isDone: false,
      doneDate: null,
      inProgress: false
    }
  ];

  const { themeType } = useThemeTypeStore()
  const pathname = usePathname()
  const style = colorVariantSelector(pathname, themeType)

  return (
    <>
      <div className={`${style.cardStyleA} rounded-3xl p-5`}>

        <div className='flex items-center justify-between'>
          <h2 className='font-bold text-lg'>فرایند درمان</h2>
          <div className={`${style.cardStyleB} px-5 py-2 rounded-full`}>در حال انجام</div>
        </div>

        <div className={`${style.cardStyleF} rounded-xl p-5 mt-5`}>

          <h2>مراحل درمان :</h2>

          <div className='mt-5'>
            {
              tasks.map((t, i) => {
                return (
                  <AnimateOnScroll key={i} delay={i * 100}>
                    <div className='flex items-center gap-5 mt-5'>

                      <div className='w-fit flex flex-col items-center'>
                        <div className={`w-12 h-12 ${t.isDone ? `bg-[#00bf666f] glass-card-no-bg` : `glass-card`}  rounded-full flex items-center justify-center`}>
                          {t.isDone ? <GiCheckMark /> : toPersianDigits(i + 1)}
                        </div>
                        <div className='glass-card-b h-10 mt-[2px]' />
                      </div>

                      <div className='flex flex-col gap-2'>
                        <div className='font-bold'>{t.taskTitle}</div>
                        <div className={`${style.textStyleB}`}>{t.taskDesc}</div>
                        <div className={`${style.textStyleB} text-[12px]`}>{t.isDone ? t.doneDate : t.inProgress ? 'در حال انجام' : 'در انتظار'}</div>
                      </div>


                    </div>
                  </AnimateOnScroll>
                )
              })
            }
          </div>

        </div>

        <div className={`${style.cardStyleF} rounded-xl p-5 mt-5`}>
          <h2> آمار فرایند :</h2>
          <div className='flex flex-col gap-2 mt-5 px-5'>

            <div className='flex justify-between items-center'>
              <div>مراحل تکمیل شده</div>
              <div>{toPersianDigits(3)} از {toPersianDigits(5)}</div>
            </div>
            <div className='flex justify-between items-center'>
              <div>درصد پیشرفت</div>
              <div>{toPersianDigits(60)}%</div>
            </div>
            <div className='flex justify-between items-center'>
              <div>زمان باقی‌مانده</div>
              <div>{toPersianDigits(3)} روز</div>
            </div>

          </div>
        </div>


      </div>
    </>
  )
}
