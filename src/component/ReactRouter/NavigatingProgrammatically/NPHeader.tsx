import { useNavigate } from "react-router";

function NPHeader() {
  const navigate = useNavigate();
  function navigateTo(dataPass: any) {
    if (dataPass.type == 1) {
      navigate('/home')
    } else if (dataPass.type == 2) {
      navigate('/about')
    } else {
      navigate('/contact')
    }
  }
  return (
    <div className='d-flex flex-column'>
      <div className='p-2 m-2 mb-4 bg-info border border-2 border-primary rounded'>
        <p className='d-block bg-success text-info rounded p-1 pb-2 fs-4 fw-bold m-auto mb-3 w-50'>Type One In Line:</p>
        <button className='rounded btn btn-sm btn-warning fw-bold' onClick={() => navigate('/home')}>Home</button>&nbsp;
        <button className='rounded btn btn-sm btn-warning fw-bold' onClick={() => navigate('/about')}>About</button>&nbsp;
        <button className='rounded btn btn-sm btn-warning fw-bold' onClick={() => navigate('/contact')}>Contact</button>
      </div>
      <div className='p-2 m-2 bg-info border border-2 border-primary rounded'>
        <p className='d-block bg-success text-info rounded p-1 pb-2 fs-4 fw-bold m-auto mb-3 w-50'>Type Two Using Function:</p>
        <button className='rounded btn btn-sm btn-warning fw-bold' onClick={() => navigateTo({ type: 1 })}>Home</button>&nbsp;
        <button className='rounded btn btn-sm btn-warning fw-bold' onClick={() => navigateTo({ type: 2 })}>About</button>&nbsp;
        <button className='rounded btn btn-sm btn-warning fw-bold' onClick={() => navigateTo({ type: 3 })}>Contact</button>
      </div>
    </div>
  )
}
export default NPHeader
