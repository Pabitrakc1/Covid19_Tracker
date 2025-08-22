
// import "./Footer.css";

// function Footer() {
//   return (
//     <div className="footer">
//         <div className="social-media-button">
//             <a href="#" target="_blank" rel="noopener noreferrer">
//             <span className="mai-logo-facebook-f"></span>
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//             <span className="mai-logo-twitter"></span>
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//             <span className="mai-logo-google-plus-g"></span>
//             </a>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//             <span className="mai-logo-youtube"></span>
//             </a>
//         </div>
//     </div>
//   )
// }

// export default Footer;


import "./Footer.css";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-button">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <FaGooglePlusG />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>

      {/* Credits Section */}
      <p className="footer__credits">
        © 2025 Designed & Developed by{" "}
        <span className="highlight">
          <a href="https://www.linkedin.com/in/pabitra-khatri-7b884727a/">Pabitra Khatri</a></span>
      </p>
    </footer>
  );
}

export default Footer;