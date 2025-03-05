import { Nav } from 'react-bootstrap'
import { Link } from 'react-router'
function PPHeader() {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link>
            <Link to="/user/arpita biswas">Aprita Biswas</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/user/rahul biswas">Rahul Biswas</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/user/other user">Other User</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
export default PPHeader
