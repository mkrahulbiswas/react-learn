import NRHome from './NRHome'
import NRAbout from './NRAbout'
import NRHeader from './NRHeader'
import NRContact from './NRContact'
import { BrowserRouter, Route, Routes } from 'react-router'
function NRApp() {
  return (
    <>
      <BrowserRouter basename='/nr'>
        <NRHeader />
        <Routes>
          <Route path="/home" element={<NRHome />} />
          <Route path="/about/" element={<NRAbout />}>
            <Route path='contact' element={<NRContact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default NRApp
