import NPFTContact from './NPFTContact'
import NPFTAbout from './NPFAbout'
import NPFTHome from './NPFTHome'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
function NPFTApp() {
  return (
    <div>
      <BrowserRouter basename='/npft'>
        <Routes>
          <Route path="/home" element={<NPFTHome />} />
          <Route path="/about" element={<NPFTAbout />} />
          <Route path="/contact" element={<NPFTContact />} />
          <Route path="/*" element={<Navigate to='/home' />} />
          {/* <Route path="/*" element={<NPFTNoPageFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default NPFTApp
