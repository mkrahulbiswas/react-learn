import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <NavLink className='btn btn-sm' to='/'>Home</NavLink>
      <NavLink className='btn btn-sm' to='about'>About</NavLink>
      <NavLink className='btn btn-sm' to='contact'>Contact</NavLink>
    </>
  )
}