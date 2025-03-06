import { IconPackage } from './IconPackage/IconPackage'
import { LoaderPackage } from './LoaderPackage/LoaderPackage'
import { PaginationPackage } from './PaginationPackage/PaginationPackage'
import './VariousPackagesUse.scss'

export const VariousPackagesUse = () => {
  return (
    <div className="variousPackagesUse">
      <PaginationPackage />
      <LoaderPackage />
      <IconPackage />
    </div>
  )
}