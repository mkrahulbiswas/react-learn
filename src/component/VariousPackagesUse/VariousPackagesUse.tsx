import './VariousPackagesUse.scss'
import { DateTimePackage } from './DateTimePackage/DateTimePackage'
import { IconPackage } from './IconPackage/IconPackage'
import { LoaderPackage } from './LoaderPackage/LoaderPackage'
import { PaginationPackage } from './PaginationPackage/PaginationPackage'
import { TostAlertPackage } from './TostAlertPackage/TostAlertPackage'
import { PageScrollPackage } from './PageScrollPackage/PageScrollPackage'

export const VariousPackagesUse = () => {
  return (
    <div className="variousPackagesUse">
      <PageScrollPackage />
      <TostAlertPackage />
      <DateTimePackage />
      {/* <UiComponentPackage /> */}


      <PaginationPackage />
      <LoaderPackage />
      <IconPackage />
    </div>
  )
}