import './VariousPackagesUse.scss'
import { DateTimePackage } from './DateTimePackage/DateTimePackage'
import { IconPackage } from './IconPackage/IconPackage'
import { LoaderPackage } from './LoaderPackage/LoaderPackage'
import { PaginationPackage } from './PaginationPackage/PaginationPackage'
import { TostAlertPackage } from './TostAlertPackage/TostAlertPackage'

export const VariousPackagesUse = () => {
  return (
    <div className="variousPackagesUse">
      <TostAlertPackage />
      <DateTimePackage />
      {/* <UiComponentPackage /> */}
      {/* <PageScrollPackage /> */}


      <PaginationPackage />
      <LoaderPackage />
      <IconPackage />
    </div>
  )
}