import Airplane from "@spectrum-icons/workflow/Airplane"
import Actions from "@spectrum-icons/workflow/Actions"
import ArchiveRemove from "@spectrum-icons/workflow/ArchiveRemove"
import Amusementpark from "@spectrum-icons/workflow/Amusementpark"
import Algorithm from "@spectrum-icons/workflow/Algorithm"
import AlertCircleFilled from "@spectrum-icons/workflow/AlertCircleFilled"
import AssetsModified from "@spectrum-icons/workflow/AssetsModified"
import AttachmentExclude from "@spectrum-icons/workflow/AttachmentExclude"
import Back30Seconds from "@spectrum-icons/workflow/Back30Seconds"
import BidRuleAdd from "@spectrum-icons/workflow/BidRuleAdd"
import Breakdown from "@spectrum-icons/workflow/Breakdown"
import Building from "@spectrum-icons/workflow/Building"


export const ExampleTwo = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <IconCU />
    </div>
  )
}

export const IconCU = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <Airplane />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <Actions aria-label="XXS Beaker" size="XXS" />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <ArchiveRemove aria-label="XS Beaker" size="XS" />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <Amusementpark aria-label="S Beaker" size="S" />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <Algorithm aria-label="M Beaker" size="M" />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <AlertCircleFilled aria-label="L Beaker" size="L" />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <Breakdown aria-label="XL Beaker" size="XL" />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <Building aria-label="XXL Beaker" size="XXL" />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <AssetsModified aria-label="Default Alert" />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <AttachmentExclude aria-label="Negative Alert" color="negative" />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <Back30Seconds aria-label="Notification Alert" color="notice" />
        </div>
      </div >
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <BidRuleAdd aria-label="Positive Alert" color="positive" />
        </div>
      </div >
    </>
  )
}