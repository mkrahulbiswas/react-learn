import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='contact'>Contact</NavLink>
    </>
  )
}