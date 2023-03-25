import React, {useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../../styles/assets/icons/logo_alter_ego.svg";

const Header = () => {
  const [showLink, setShowLink] = useState(false);

  const handleShowLink = () => {
    setShowLink(!showLink);
  };

  return (
    <header class="header">
      <div class="header__logo">
        <Link to="/">
          <img src={Logo} alt="logo de Alter Ego" class="header__logo__img" />
        </Link>
      </div>
      <nav className={`header__nav ${showLink ? "show__nav" : "hide__nav"} `}>
        <ul>
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos de nous</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contactez-nous</Link>
        </ul>

        <span
          onClick={handleShowLink}
          className={`header__burger__bar ${showLink ? "open" : "close"}`}
        ></span>
      </nav>
    </header>
  );
};

export default Header;
