import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer__bg">
      <div className="container footer__container">
        {/* ========left side=========== */}
        <div className="footer__left">
          <h1 className="text">AI Audits, The most advance AI detector</h1>
          <button className="nav__btn">Get started free</button>
        </div>
        {/* =========middle side=========== */}
        <div className="footer__middle">
          <h1 className="text">Products</h1>
          <div className="footer__middle-content">
            <NavLink to="/AI-audits/">AI Dectector</NavLink>
            <NavLink to="/AI-audits/plagiarism-checking">
              Plagiarism Checking
            </NavLink>
            <a href="#">Team Management</a>
            <a href="#">Shareable Report</a>

            <NavLink to="/AI-audits/detection-score">Detection Score</NavLink>
          </div>
        </div>
        {/* =====right side=========== */}
        <div className="footer__right">
          <h1 className="text">Resources</h1>
          <div className="footer__right-content">
            <a href="#">Contact Us</a>
            <a href="#">Blog</a>
            <a href="#">Join our affiliate program</a>
            <a href="#">Ambassador program</a>
            <NavLink to="/AI-audits/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/AI-audits/terms-conditions">
              Terms & Conditions
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
