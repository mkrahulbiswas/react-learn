import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <nav>
        <div className="mainNav">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'movies'}>Movies</NavLink>
          <NavLink to={'contact'}>Contact</NavLink>
        </div>
      </nav>
    </>
  )
}