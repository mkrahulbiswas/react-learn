import { PrimeReactProvider } from 'primereact/api';

export const ExampleTwo = () => {
  const objectPass = {
    unstyled: false
  }

  return (
    <div className='vpu_ocoplmimotceic_list'>
      <PrimeReactProvider value={objectPass}>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-check"></i>
            </div>
          </div>
        </div>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-spin pi-spinner" style={{ fontSize: '1rem' }}></i>
            </div>
          </div>
        </div>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-chevron-circle-left"></i>
            </div>
          </div>
        </div>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-caret-up"></i>
            </div>
          </div>
        </div>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-calendar-plus"></i>
            </div>
          </div>
        </div>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-arrow-right-arrow-left"></i>
            </div>
          </div>
        </div>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-arrow-down-left"></i>
            </div>
          </div>
        </div>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-apple"></i>
            </div>
          </div>
        </div>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-angle-double-right"></i>
            </div>
          </div>
        </div>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-amazon"></i>
            </div>
          </div>
        </div>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-align-center"></i>
            </div>
          </div>
        </div>
        <div className='vpu_ocoplmimotceic_item'>
          <div className="exampleCommon">
            <div className="exampleCommonContent">
              <i className="pi pi-address-book"></i>
            </div>
          </div>
        </div>
      </PrimeReactProvider>
    </div>
  )
}