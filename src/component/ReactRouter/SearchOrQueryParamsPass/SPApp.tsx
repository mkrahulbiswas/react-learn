import { BrowserRouter, Route, Routes } from 'react-router'
import SPUser from './SPUser'
function SPApp() {
  return (
    <>
      <BrowserRouter basename='/sp'>
        <Routes>
          <Route path="/user" element={<SPUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default SPApp
