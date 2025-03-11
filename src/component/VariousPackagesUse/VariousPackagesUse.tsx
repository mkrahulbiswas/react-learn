import { AnimationPackage } from './AnimationPackage/AnimationPackage'
import { SomeUsefulPackage } from './SomeUsefulPackage/SomeUsefulPackage'
import { StylePackage } from './StylePackage/StylePackage'
import './VariousPackagesUse.scss'

export const VariousPackagesUse = () => {
  return (
    <div className="variousPackagesUse">
      {/* <SomeUsefulPackage /> */}
      <AnimationPackage />
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