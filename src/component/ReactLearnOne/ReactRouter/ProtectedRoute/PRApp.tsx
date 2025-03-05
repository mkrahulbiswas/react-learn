import PRHeader from './PRHeader'
import PRHome from './PRHome'
import PRAbout from './PRAbout'
import PRContact from './PRContact'
import PRLogin from './PRLogin'
import PRProtected from './PRProtected'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
function PRApp() {
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(false))
  })
  return (
    <>
      <BrowserRouter basename='/pr'>
        <PRHeader />
        <hr />
        <Routes>
          <Route path="/home" element={<PRProtected ComponentPass={PRHome} />} />
          <Route path="/about" element={<PRProtected ComponentPass={PRAbout} />} />
          <Route path="/contact" element={<PRContact />} />
          <Route path="/login" element={<PRLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default PRApp
