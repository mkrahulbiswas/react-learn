import { Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router'
function NRHeader() {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link>
            <Link to="/home">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/about">About</NavLink>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
export default NRHeader
