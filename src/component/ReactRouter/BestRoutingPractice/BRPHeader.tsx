import { Nav } from 'react-bootstrap'
import style from './BRPStyles.module.scss'
import { NavLink, useNavigate } from 'react-router'
function BRPHeader() {
  let isLogin: any = localStorage.getItem('login')
  let login = JSON.parse(isLogin)
  const navigate = useNavigate()
  function logOut() {
    localStorage.setItem('login', JSON.stringify(false))
    navigate('/')
  }
  return (
    <div>
      <Nav className={'justify-content-center ' + style.navMain} activeKey="/home">
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/" className={'nav-link ' + style.navLink}>Home</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/about" className={'nav-link ' + style.navLink}>About</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/contact" className={'nav-link ' + style.navLink}>Contact</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            {
              !login ?
                <NavLink to="/login" className={'nav-link ' + style.navLink}>Login</NavLink> :
                <Nav onClick={() => logOut()} className={'nav-link ' + style.navLink}>Log Out</Nav>
            }
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
export default BRPHeader
