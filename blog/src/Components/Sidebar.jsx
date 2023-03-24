import React, {useContext, useEffect, useState} from 'react';

import {Outlet, Link, Navigate} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import AdminHeader from './AdminHeader';
import {UidContext} from './AppContext';
import Login from '../Admin/Login';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const uid = useContext(UidContext);
  // const [isAuth, setIsAuth] = useState(false);
  // useEffect(() => {
  //   if (uid) {
  //     setIsAuth(true);
  //   }
  // }, [uid]);

  return (
    <>
      {uid ? (
        <>
          <AdminHeader />

          <div className="dashboard">
            <div className="dashboard__container myContainer">
              <div className="dashboard__menu__container">
                <ul className="dashboard__menu__container__box">
                  {SidebarData.map((item, index) => {
                    return (
                      <li
                        className="dashboard__menu__container__links"
                        key={index}
                      >
                        <Link
                          className="dashboard__menu__container__links"
                          to={item.path || '#'}
                        >
                          <img
                            src={item.icon}
                            className={item.class}
                            alt="icons menu dashboard"
                          />
                          <p>{item.title}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Sidebar;
