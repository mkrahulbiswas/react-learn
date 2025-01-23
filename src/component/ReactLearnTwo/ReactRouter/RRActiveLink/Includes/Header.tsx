import { NavLink } from "react-router";

export default function Header() {
  const getNavStyle = ({ isActive }: any) => {
    return {
      color: isActive ? 'blue' : 'violet',
      textDecoration: isActive ? 'underline' : 'line-through',
    }
  }
  return (
    <>
      <div className="navBar">
        <NavLink to='/'>Page one</NavLink>

        <NavLink to='link-page-two' className={(e) => e.isActive ? 'active-custom' : ''}>Page two</NavLink>
        <NavLink to='link-page-three' className={({ isActive }) => isActive ? 'active-custom' : ''}>Page three</NavLink>

        <NavLink to='link-page-four' style={(e) => {
          if (e.isActive) {
            return {
              color: 'red',
              fontStyle: 'italic',
            }
          }
        }}>Page four</NavLink>

        <NavLink to='link-page-five' style={({ isActive }) => {
          if (isActive) {
            return {
              color: 'green',
              textDecoration: 'underline',
            }
          }
        }}>Page five</NavLink>

        <NavLink to='link-page-six' style={({ isActive }) => {
          return {
            color: isActive ? 'green' : 'red',
            textDecoration: isActive ? 'underline' : 'line-through',
          }
        }}>Page six</NavLink>

        <NavLink to='link-page-seven' style={getNavStyle}>Page seven</NavLink>
      </div>
    </>
  )
}