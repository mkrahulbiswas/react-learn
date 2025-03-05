import { Nav } from 'react-bootstrap'
import { Link } from 'react-router'
function ULHeader() {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link>
            <Link to="/home">Home</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
export default ULHeader
