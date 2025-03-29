import { Link } from "react-router";

export default function Header() {
  return (
    <div className="vpuNavMain">
      <div className="vpuNavSub">
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
                <Link to={'/packages'}>Packages</Link>
              </li>
              <li>
                <Link to={'/packages'}>About & Enquiry</Link>
              </li>
              {/* <li>
                  <Link to={'/packages'}>Terms & Services</Link>
                </li> */}

              {/* <li>
                  <Link to={'/ui-component-package'}>Ui Component Package</Link>
                </li>
                <li>
                  <Link to={'/ui-component-package/blueprint-js-type'}>'='Ui Component Package</Link>
                </li>
                <li>
                  <Link to={'/chart-package'}>Chart Package</Link>
                </li>
                <li>
                  <Link to={'/input-form-package'}>Input Form Package</Link>
                </li>
                <li>
                  <Link to={'/some-useful-package'}>Some Useful Package</Link>
                </li>
                <li>
                  <Link to={'/layout-styling-package'}>Layout Styling Package</Link>
                </li>
                <li>
                  <Link to={'/animation-package'}>Animation Package</Link>
                </li>
                <li>
                  <Link to={'/page-scroll-package'}>Page Scroll Package</Link>
                </li>
                <li>
                  <Link to={'/tost-alert-package'}>Tost Alert Package</Link>
                </li>
                <li>
                  <Link to={'/date-time-package'}>Date Time Package</Link>
                </li>
                <li>
                  <Link to={'/pagination-package'}>Pagination Package</Link>
                </li>
                <li>
                  <Link to={'/loader-progress-package'}>Loader Progress Package</Link>
                </li>
                <li>
                  <Link to={'/icon-package'}>Icon Package</Link>
                </li> */}
            </ul>
          </nav>
        </div>
        <div className="userInfo">
          {/* <span>Login</span> */}
        </div>
      </div>
    </div>
  )
}