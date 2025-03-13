import { AnimationPackage } from './AnimationPackage/AnimationPackage'
import { ChartPackage } from './ChartPackage/ChartPackage'
import { DateTimePackage } from './DateTimePackage/DateTimePackage'
import { IconPackage } from './IconPackage/IconPackage'
import { LoaderPackage } from './LoaderPackage/LoaderPackage'
import { PageScrollPackage } from './PageScrollPackage/PageScrollPackage'
import { PaginationPackage } from './PaginationPackage/PaginationPackage'
import { SomeUsefulPackage } from './SomeUsefulPackage/SomeUsefulPackage'
import { StylePackage } from './StylePackage/StylePackage'
import { TostAlertPackage } from './TostAlertPackage/TostAlertPackage'
import { UiComponentPackage } from './UiComponentPackage/UiComponentPackage'
import './VariousPackagesUse.scss'

export const VariousPackagesUse = () => {
  return (
    <div className="variousPackagesUse">
      {/* <SomeUsefulPackage /> */}
      <ChartPackage />
      {/* <AnimationPackage /> */}
      {/* <StylePackage /> */}
      {/* <UiComponentPackage /> */}
      {/* <PageScrollPackage /> */}
      {/* <TostAlertPackage /> */}
      {/* <DateTimePackage /> */}
      {/* <PaginationPackage /> */}
      {/* <LoaderPackage /> */}
      {/* <IconPackage /> */}
    </div>
  )
}