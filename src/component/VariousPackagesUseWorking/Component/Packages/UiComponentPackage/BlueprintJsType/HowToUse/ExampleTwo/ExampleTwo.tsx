import { Icon } from "@blueprintjs/core"
import { Anchor, Download, ZoomIn } from "@blueprintjs/icons"

export const ExampleTwo = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <Download size={16} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <Icon icon='add-to-artifact' intent='success' size={16} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <Anchor size={16} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <Icon icon='chat' intent='danger' size={16} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <Icon icon='cross-circle' intent='primary' size={16} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <Icon icon='exchange' size={16} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <Icon intent='warning' icon='generate' size={16} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <Icon icon='insert' size={16} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <Icon icon='remove' size={16} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <Icon icon='signal-search' size={16} />
          </div>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="exampleCommon">
          <div className="exampleCommonContent">
            <ZoomIn size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}