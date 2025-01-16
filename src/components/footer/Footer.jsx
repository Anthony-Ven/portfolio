import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer__title">Anthony</h1>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/vent_trimurti/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://github.com/Anthony-Ven"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/anthony-steven-trimurti/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; 2025 Anthony. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
