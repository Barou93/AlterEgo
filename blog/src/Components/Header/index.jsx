import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../styles/assets/icons/logo_alter_ego.svg";

const Header = () => {
   return (
      <header class="header">
         <div class="header__logo">
            <a href="index.html">
               <img
                  src={Logo}
                  alt="logo de Alter Ego"
                  class="header__logo__img"
               />
            </a>
         </div>
         <nav class="header__nav">
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos de nous</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contactez-nous</Link>
         </nav>
      </header>
   );
};

export default Header;
