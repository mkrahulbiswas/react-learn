import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { BsSendPlusFill } from "react-icons/bs";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mainFooter">
      <div className="subFooter">
        <div className="footerTop">
          <div className="logoAndAbout">
            <div className="logo">
              <img src={window.location.origin + '/src/assets/logo.png'} alt="" />
            </div>
            <div className="about">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi deserunt temporibus, quia tempore a reiciendis quidem, voluptas nisi neque deleniti excepturi sunt numquam ratione...</span>
            </div>
          </div>
          <div className="quickLink">
            <div className="heading">
              <span>quick link</span>
            </div>
            <div className="links">
              <ul>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link to={'/student'}>Student</Link>
                </li>
                <li>
                  <Link to={'/terms-conditions'}>Terms Conditions</Link>
                </li>
                <li>
                  <Link to={'/privacy-policy'}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="newsAndUpdate">
            <div className="heading">
              <span>Newsletr & Social</span>
            </div>
            <div className="socialAndSubscribe">
              <div className="newsForLatter">
                <span>Subscribe to get future update</span>
                <form>
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">
                    <BsSendPlusFill />
                  </button>
                </form>
              </div>
              <div className="socialLinks">
                <ul>
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaInstagramSquare />
                  </li>
                  <li>
                    <FaYoutube />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <FaTwitterSquare />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="copyright">
            <span>@2022 All rights reserved.</span>
          </div>
          <div className="developer">
            <span>Developed by <a href="#">Rahul Biswas</a></span>
          </div>
        </div>
      </div>
    </footer>
  )
}