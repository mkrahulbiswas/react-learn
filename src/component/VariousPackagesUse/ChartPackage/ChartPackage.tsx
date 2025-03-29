import { ApexChartsType } from "./ApexChartsType/ApexChartsType";
import { NivoType } from "./NivoType/NivoType";
import { ReactChartJsType } from "./ReactChartJsType/ReactChartJsType";
import { RechartsType } from "./RechartsType/RechartsType";
import { VictoryType } from "./VictoryType/VictoryType";
import { ReactVisType } from "./ReactVisType/ReactVisType";
import { GoogleChartsType } from "./GoogleChartsType/GoogleChartsType";
import { HighchartsChartsType } from "./HighchartsChartsType/HighchartsChartsType";

export const ChartPackage = () => {
  return (
    <>
      {/* <ReactVisType /> */}
      <ApexChartsType />
      <NivoType />
      <HighchartsChartsType />
      <GoogleChartsType />
      <VictoryType />
      <RechartsType />
      <ReactChartJsType />
    </>
  );
};
