import { BrowserRouter, Route, Routes } from 'react-router'
import PPHeader from './PPHeader'
import PPUser from './PPUser'

function PPApp() {
  return (
    <>
      <BrowserRouter basename='/pp'>
        <PPHeader />
        <Routes>
          <Route path="/user/:name" element={<PPUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default PPApp
