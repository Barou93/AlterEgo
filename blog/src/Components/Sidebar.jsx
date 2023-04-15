import React, {useContext} from "react";

import {Outlet, NavLink} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import AdminHeader from "./AdminHeader";

const Sidebar = () => {
  return (
    <>
      <AdminHeader />

      <div className="dashboard">
        <div className="dashboard__container myContainer">
          <div className="dashboard__menu__container">
            <ul className="dashboard__menu__container__box">
              {SidebarData.map((item, index) => {
                return (
                  <li className="dashboard__menu__container__links" key={index}>
                    <NavLink
                      className={({isActive}) =>
                        isActive ? "nav__links active-link" : "nav__links"
                      }
                      to={item.path || "#"}
                    >
                      <img
                        src={item.icon}
                        className={item.class}
                        alt="icons menu dashboard"
                      />
                      <p>{item.title}</p>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
