import React from "react";
import FooterLogo from "../../styles/assets/icons/logo_alter_ego_white.svg";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container">
            <div className="footer__logo">
               <a href="#home" className="footer__logo__link">
                  <img
                     src={FooterLogo}
                     alt="logo du footer"
                     className="footer__logo__img"
                  />
               </a>
            </div>
            <div className="copyright">
               &copy;Tous les droits reservés Alter Ego 2023
            </div>
            <div className="footer__socialmedia">
               <a href="www.facebook.com" className="footer__socialmedia__link">
                  <svg
                     width="43"
                     height="80"
                     viewBox="0 0 43 80"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="icons fb"
                  >
                     <path
                        d="M42.1 28.0002H28V20.0002C28 15.8723 28.336 13.2722 34.252 13.2722H41.724V0.55225C38.088 0.17625 34.432 -0.00775 30.772 0.00025C19.92 0.00025 12 6.62825 12 18.7962V28.0002H0V44.0003L12 43.9963V80.0003H28V43.9883L40.264 43.9843L42.1 28.0002Z"
                        fill="currentColor"
                     />
                  </svg>
               </a>
               <a href="www.facebook.com" className="footer__socialmedia__link">
                  <svg
                     width="72"
                     height="72"
                     viewBox="0 0 72 72"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="icons lkdin"
                  >
                     <path
                        d="M64 0H8C3.58 0 0 3.58 0 8V64C0 68.42 3.58 72 8 72H64C68.42 72 72 68.42 72 64V8C72 3.58 68.42 0 64 0ZM24 56H13.908V28H24V56ZM18.776 22.868C15.692 22.868 13.632 20.812 13.632 18.068C13.632 15.324 15.688 13.268 19.116 13.268C22.2 13.268 24.26 15.324 24.26 18.068C24.26 20.812 22.204 22.868 18.776 22.868ZM60 56H50.232V40.696C50.232 36.464 47.628 35.488 46.652 35.488C45.676 35.488 42.42 36.14 42.42 40.696C42.42 41.348 42.42 56 42.42 56H32.328V28H42.42V31.908C43.72 29.628 46.324 28 51.208 28C56.092 28 60 31.908 60 40.696V56Z"
                        fill="currentColor"
                     />
                  </svg>
               </a>
               <a href="www.facebook.com" className="footer__socialmedia__link">
                  <svg
                     width="72"
                     height="72"
                     viewBox="0 0 72 72"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="icons insta"
                  >
                     <path
                        d="M20 0C8.956 0 0 8.956 0 20V52C0 63.044 8.956 72 20 72H52C63.044 72 72 63.044 72 52V20C72 8.956 63.044 0 52 0H20ZM60 8C62.208 8 64 9.792 64 12C64 14.208 62.208 16 60 16C57.792 16 56 14.208 56 12C56 9.792 57.792 8 60 8ZM36 16C47.044 16 56 24.956 56 36C56 47.044 47.044 56 36 56C24.956 56 16 47.044 16 36C16 24.956 24.956 16 36 16ZM36 24C32.8174 24 29.7652 25.2643 27.5147 27.5147C25.2643 29.7652 24 32.8174 24 36C24 39.1826 25.2643 42.2348 27.5147 44.4853C29.7652 46.7357 32.8174 48 36 48C39.1826 48 42.2348 46.7357 44.4853 44.4853C46.7357 42.2348 48 39.1826 48 36C48 32.8174 46.7357 29.7652 44.4853 27.5147C42.2348 25.2643 39.1826 24 36 24Z"
                        fill="currentColor"
                     />
                  </svg>
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
