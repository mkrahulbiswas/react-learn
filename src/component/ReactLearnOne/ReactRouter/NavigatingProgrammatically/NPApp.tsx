import NPHome from './NPHome'
import NPAbout from './NPAbout'
import NPContact from './NPContact'
import NPHeader from './NPHeader'
import { BrowserRouter, Route, Routes } from 'react-router'
function NPApp() {
  return (
    <div>
      <BrowserRouter basename='/np'>
        <NPHeader />
        <Routes>
          <Route path="/home" element={<NPHome />} />
          <Route path="/about" element={<NPAbout />} />
          <Route path="/contact" element={<NPContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default NPApp
