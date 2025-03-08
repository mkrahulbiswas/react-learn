import { useEffect } from 'react'
import BRPLogin from './BRPLogin'
import BRPContact from './BRPContact'
import BRPProtected from './BRPProtected'
import BRPHeader from './BRPHeader'
import BRPHome from './BRPHome'
import BRPAbout from './BRPAbout'
import BRPPageNotFound from './BRPPageNotFound'
import { Navigate, Route, Routes } from 'react-router'
function BRPApp() {
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(false))
  })
  return (
    <>
      <BRPHeader />
      <Routes>
        <Route index path="/" element={<BRPHome />} />
        <Route index path="about" element={<BRPProtected ComponentPass={BRPAbout} />} />
        <Route path="contact" element={<BRPProtected ComponentPass={BRPContact} />} />
        <Route path="login" element={<BRPLogin />} />
        <Route path="page-not-found" element={<BRPPageNotFound />} />
        {/* <Switch></Switch> */}
        <Route path="*" element={<Navigate to='/page-not-found' />} />
      </Routes>
    </>
  )
}
export default BRPApp
