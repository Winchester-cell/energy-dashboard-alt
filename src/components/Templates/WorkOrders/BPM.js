import AnimateOnScroll from '@/components/AnimateOnScrollWrapper/AnimateOnScroll';
import BPMCard from '@/components/Modules/Cards/BPMCard';
import React from 'react'

const productionSteps = [
  {
    step: "مرحله ۱",
    title: "آماده‌سازی مواد اولیه",
    description: "بررسی و آماده‌سازی لاستیک خام و مواد شیمیایی",
    status: "تکمیل شده",
    responsible: "احمد محمدی",
    duration: "۴ ساعت"
  },
  {
    step: "مرحله ۲",
    title: "میکس و ترکیب مواد",
    description: "ترکیب مواد اولیه در دستگاه میکسر صنعتی",
    status: "تکمیل شده",
    responsible: "علی رضایی",
    duration: "۶ ساعت"
  },
  {
    step: "مرحله ۳",
    title: "قالب‌گیری و پخت",
    description: "قالب‌گیری تایر و پخت در دمای ۱۶۰ درجه",
    status: "در حال انجام",
    responsible: "حسن احمدی",
    progress: {
      percent: 70,
      done: 3500,
      total: 5000
    }
  },
  {
    step: "مرحله ۴",
    title: "کنترل کیفیت",
    description: "بازرسی کیفیت و تست مقاومت تایرها",
    status: "در انتظار",
    responsible: "فاطمه کریمی",
    startAfter: "تکمیل مرحله ۳"
  },
  {
    step: "مرحله ۵",
    title: "بسته‌بندی و انبارداری",
    description: "بسته‌بندی نهایی و انتقال به انبار محصولات",
    status: "در انتظار",
    responsible: "محمد نوری",
    estimatedTime: "۲ ساعت"
  }
];


export default function BPM() {
  return (
    <div className='bg-[var(--colCard)] rounded-2xl p-5'>
      <h2 className='text-2xl font-bold mt-5'>🔄 وظایف فرآیند تولید (BPM)</h2>

      <div className='flex flex-col gap-5 mt-5'>
        {
          productionSteps.map((item, idx) => {
            return (
              <AnimateOnScroll key={idx} delay={70 * idx} >
                <BPMCard {...item} />
              </AnimateOnScroll>
            )
          })
        }
      </div>

    </div>
  )
}
