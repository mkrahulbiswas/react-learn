import logSymbols from 'log-symbols';

export const ExampleOne = () => {
  const showLog = (type: any) => {
    if (type === 'success') {
      console.log(logSymbols.success, 'Finished successfully!')
    } else if (type === 'error') {
      console.log(logSymbols.error, 'Did not finished!')
    } else if (type === 'info') {
      console.log(logSymbols.info, 'Is this a right things!')
    } else {
      console.log(logSymbols.warning, 'Need to check again!')
    }
  }
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className='vpu_ocoplmimotceic_list'>
        <div className="exampleCommon">
          <div className="exampleCommonPoints">
            <span>Simple various type alert</span>
          </div>
          <div className="exampleCommonContent">
            <button className="btn btn-success" onClick={() => showLog('success')}>Success</button>
            <button className="btn btn-danger ms-3" onClick={() => showLog('error')}>Error</button>
            <button className="btn btn-warning ms-3" onClick={() => showLog('warning')}>Warning</button>
            <button className="btn btn-info ms-3" onClick={() => showLog('info')}>Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}