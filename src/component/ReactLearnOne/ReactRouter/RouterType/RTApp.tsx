import RTHome from './RTHome'
import RTAbout from './RTAbout'
import RTContact from './RTContact'
import { BrowserRouter, Route, Routes } from 'react-router'
function RTApp() {
  return (
    <div>
      <BrowserRouter basename='/rt'>
        <Routes>
          <Route path="/home" element={<RTHome />} />
          <Route path="/about" element={<RTAbout />} />
          <Route path="/contact" element={<RTContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default RTApp
