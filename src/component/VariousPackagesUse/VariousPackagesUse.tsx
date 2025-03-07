import './VariousPackagesUse.scss'
import { DateTimePackage } from './DateTimePackage/DateTimePackage'
import { IconPackage } from './IconPackage/IconPackage'
import { LoaderPackage } from './LoaderPackage/LoaderPackage'
import { PageScrollPackage } from './PageScrollPackage/PageScrollPackage'
import { PaginationPackage } from './PaginationPackage/PaginationPackage'
import { TostAlertPackage } from './TostAlertPackage/TostAlertPackage'
import { UiComponentPackage } from './UiComponentPackage/UiComponentPackage'

export const VariousPackagesUse = () => {
  return (
    <div className="variousPackagesUse">
      <DateTimePackage />
      {/* <UiComponentPackage /> */}
      {/* <TostAlertPackage /> */}
      {/* <PageScrollPackage /> */}


      {/* <PaginationPackage /> */}
      {/* <LoaderPackage /> */}
      {/* <IconPackage /> */}
    </div>
  )
}