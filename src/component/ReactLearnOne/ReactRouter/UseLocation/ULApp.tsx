import ULHome from './ULHome'
import ULHeader from './ULHeader'
import { BrowserRouter, Route, Routes } from 'react-router'
function ULApp() {
  return (
    <>
      <BrowserRouter basename='/ul'>
        <ULHeader />
        <Routes>
          <Route path="/home" element={<ULHome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default ULApp
