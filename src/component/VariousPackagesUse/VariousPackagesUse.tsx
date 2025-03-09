import './VariousPackagesUse.scss'
import { DateTimePackage } from './DateTimePackage/DateTimePackage'
import { IconPackage } from './IconPackage/IconPackage'
import { LoaderPackage } from './LoaderPackage/LoaderPackage'
import { PaginationPackage } from './PaginationPackage/PaginationPackage'
import { TostAlertPackage } from './TostAlertPackage/TostAlertPackage'
import { PageScrollPackage } from './PageScrollPackage/PageScrollPackage'
import { UiComponentPackage } from './UiComponentPackage/UiComponentPackage'
import { StylePackage } from './StylePackage/StylePackage'

export const VariousPackagesUse = () => {
  return (
    <div className="variousPackagesUse">
      <StylePackage />
      <UiComponentPackage />
      <PageScrollPackage />
      <TostAlertPackage />
      <DateTimePackage />
      <PaginationPackage />
      <LoaderPackage />
      <IconPackage />
    </div>
  )
}