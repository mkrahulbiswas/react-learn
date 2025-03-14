import { ApexChartsType } from "./ApexChartsType/ApexChartsType"
import { NivoChartType } from "./NivoChartType/NivoChartType"
import { ReactChartJsType } from "./ReactChartJsType/ReactChartJsType"
import { RechartsType } from "./RechartsType/RechartsType"

export const ChartPackage = () => {
  return (
    <>
      <NivoChartType />
      {/* <RechartsType /> */}
      {/* <ApexChartsType /> */}
      {/* <ReactChartJsType /> */}
    </>
  )
}