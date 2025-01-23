import { useEffect, useState } from "react"

export default function CHSameComponent() {
  return (
    <>
      <p>We Need To explore More, this is unfinished</p>
      {/* <p>This is example of custom hoots in same component</p> */}
      <hr />
      <HomePage />
      <hr />
      {/* <ContactPage /> */}
      <hr />
      {/* <AboutPage /> */}
      <hr />
    </>
  )
}

const HomePage = () => {
  const [number, setNumber] = useState('')
  useEffect(() => {
    setNumber(useRandomNumber('home').toString())
  }, [])
  return (
    <>
      <span>Home {number}</span>
    </>
  )
}

// const ContactPage = () => {
//   useEffect(() => {
//     const number = useRandomNumber('contact')
//   }, [])
//   return (
//     <>
//       <span>Contact {number}</span>
//     </>
//   )
// }

// const AboutPage = () => {
//   useEffect(() => {
//     const number = useRandomNumber('about')
//   }, [])
//   return (
//     <>
//       <span>About {number}</span>
//     </>
//   )
// }

const useRandomNumber = (type = '') => {
  const [ranNumber, setRanNumber] = useState(0)
  if (type == 'home') {
    setRanNumber(Math.floor(Math.random() * 10))
  } else if (type == 'contact') {
    setRanNumber(Math.floor(Math.random() * 10))
  } else if (type == 'about') {
    setRanNumber(Math.floor(Math.random() * 10))
  } else {
    setRanNumber(Math.floor(Math.random() * 10))
  }

  return ranNumber
}