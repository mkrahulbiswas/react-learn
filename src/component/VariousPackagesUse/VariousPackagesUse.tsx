import { AnimationPackage } from './AnimationPackage/AnimationPackage'
import { ChartPackage } from './ChartPackage/ChartPackage'
import { UiComponentPackage } from './UiComponentPackage/UiComponentPackage'
import './VariousPackagesUse.scss'

export const VariousPackagesUse = () => {
  return (
    <div className="variousPackagesUse">
      {/* <SomeUsefulPackage /> */}
      {/* <ChartPackage /> */}
      {/* <AnimationPackage /> */}
      {/* <StylePackage /> */}
      <UiComponentPackage />
      {/* <PageScrollPackage /> */}
      {/* <TostAlertPackage /> */}
      {/* <DateTimePackage /> */}
      {/* <PaginationPackage /> */}
      {/* <LoaderPackage /> */}
      {/* <IconPackage /> */}
    </div>
  )
}