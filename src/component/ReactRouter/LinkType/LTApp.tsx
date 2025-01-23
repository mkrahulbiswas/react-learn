import LTHeader from './LTHeader'
import LTHome from './LTHome'
import LTAbout from './LTAbout'
import LTContact from './LTContact'
import { BrowserRouter, Route, Routes } from 'react-router'
function LTApp() {
  return (
    <>
      <BrowserRouter basename='/lt'>
        <LTHeader />
        <Routes>
          <Route path="/home" element={<LTHome />} />
          <Route path="/about" element={<LTAbout />} />
          <Route path="/contact" element={<LTContact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default LTApp
