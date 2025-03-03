import { Link } from "react-router";

export default function Header() {
  return (
    <header className="mainNav">
      <div className="subNav">
        <div className="logo">
          <img src={window.location.origin + '/src/assets/logo.png'} alt="" />
        </div>
        <div className="navLink">
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/student'}>Student</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="userInfo">
          <span>Login</span>
        </div>
      </div>
    </header>
  )
}