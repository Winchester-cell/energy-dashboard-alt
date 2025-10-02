'use client'
import MapView from "@/components/Modules/Maps/MapView";
import BarChart from '@/components/Modules/Charts/BarChart';
import CircularProgress from '@/components/Modules/Charts/RadialChart';
import ChartsGrid from "@/components/Templates/MainDashboard/ChartsGrid";
import InfoCardsContainer from "@/components/Templates/MainDashboard/InfoCardsContainer";
import MapAndCharts from "@/components/Templates/MainDashboard/MapAndCharts";

export default function Home() {
  return (
    <>
      <div className="w-full relative">

        <div className='w-full h-screen fixed top-0 left-0 z-[-5]'>
          <MapView type={'monitoring'} />
        </div>
        <InfoCardsContainer />

        <div className='w-[300px] flex flex-col gap-5 absolute top-[190px] end-5'>

          <div className='w-full h-[300px] bg-[var(--colCard)] shadow-lg rounded-xl p-3'>
            <BarChart />
          </div>

          <div className='w-full h-[300px] bg-[var(--colCard)] shadow-lg rounded-xl p-3'>
            <CircularProgress title={'افزایش مصرف'} value={55} />
          </div>

        </div>
        {/* <MapAndCharts /> */}
        {/* <ChartsGrid /> */}

      </div>
    </>
  );
}
