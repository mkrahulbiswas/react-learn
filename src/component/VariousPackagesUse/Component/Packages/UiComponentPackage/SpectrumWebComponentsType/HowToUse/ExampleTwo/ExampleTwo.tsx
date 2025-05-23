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
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <Airplane />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <Actions aria-label="XXS Beaker" size="XXS" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <ArchiveRemove aria-label="XS Beaker" size="XS" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <Amusementpark aria-label="S Beaker" size="S" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <Algorithm aria-label="M Beaker" size="M" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <AlertCircleFilled aria-label="L Beaker" size="L" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <Breakdown aria-label="XL Beaker" size="XL" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <Building aria-label="XXL Beaker" size="XXL" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <AssetsModified aria-label="Default Alert" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <AttachmentExclude aria-label="Negative Alert" color="negative" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <Back30Seconds aria-label="Notification Alert" color="notice" />
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_middle">
          <BidRuleAdd aria-label="Positive Alert" color="positive" />
        </div>
      </div>
    </>
  )
}