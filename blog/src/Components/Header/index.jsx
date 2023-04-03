import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import Logo from "../../styles/assets/icons/logo_alter_ego.svg";

const Header = () => {
  const [showLink, setShowLink] = useState(false);

  const handleShowLink = () => {
    setShowLink(!showLink);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src={Logo}
            alt="logo de Alter Ego"
            className="header__logo__img"
            aria-label={`logo AlterEgo et lien vers la page d'accueil`}
            //aria-hidden="true"
          />
        </Link>
      </div>
      <nav className={`header__nav ${showLink ? "show__nav" : "hide__nav"} `}>
        <ul>
          <li>
            <NavLink
              className={({isActive}) =>
                isActive ? "home_navlink-active" : ""
              }
              to="/"
              //aria-hidden="true"
              //role="presentation"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) =>
                isActive ? "home_navlink-active" : ""
              }
              to="/about"
            >
              A propos de nous
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) =>
                isActive ? "home_navlink-active" : ""
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) =>
                isActive ? "home_navlink-active" : ""
              }
              to="/contact"
            >
              Contactez-nous
            </NavLink>
          </li>
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
