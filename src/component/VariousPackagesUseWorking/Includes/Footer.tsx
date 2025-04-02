import { BsSendPlusFill } from "react-icons/bs";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="vpu_ocf_footMain">
      <div className="vpu_ocf_footSub">
        <div className="vpu_ocf_footerTop">
          <div className="vpu_ocf_logoAndAbout">
            <div className="vpu_ocf_logo">
              <img src={window.location.origin + '/src/assets/logo.png'} alt="" />
            </div>
            <div className="vpu_ocf_about">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi deserunt temporibus, quia tempore a reiciendis quidem, voluptas nisi neque deleniti excepturi sunt numquam ratione...</span>
            </div>
          </div>
          <div className="vpu_ocf_quickLink">
            <div className="vpu_ocf_heading">
              <span>quick link</span>
            </div>
            <div className="vpu_ocf_links">
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
          <div className="vpu_ocf_newsAndUpdate">
            <div className="vpu_ocf_heading">
              <span>Newsletr & Social</span>
            </div>
            <div className="vpu_ocf_socialAndSubscribe">
              <div className="vpu_ocf_newsForLatter">
                <span>Subscribe to get future update</span>
                <form>
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">
                    <BsSendPlusFill />
                  </button>
                </form>
              </div>
              <div className="vpu_ocf_socialLinks">
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
        <div className="vpu_ocf_footerBottom">
          <div className="vpu_ocf_copyright">
            <span>@2022 All rights reserved.</span>
          </div>
          <div className="vpu_ocf_developer">
            <span>Developed by <a href="#">Rahul Biswas</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}