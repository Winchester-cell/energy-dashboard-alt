import SideBar from "@/components/Modules/SideBar/SideBar";
import ChartsGrid from "@/components/Templates/MainDashboard/ChartsGrid";
import InfoCardsContainer from "@/components/Templates/MainDashboard/InfoCardsContainer";
import MapAndCharts from "@/components/Templates/MainDashboard/MapAndCharts";

export default function Home() {
  return (
    <>
      <InfoCardsContainer />
      <MapAndCharts />
      {/* <ChartsGrid /> */}
    </>
  );
}
