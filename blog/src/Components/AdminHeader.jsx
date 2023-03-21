import React, {useContext} from 'react';
import Logo from '.././styles/assets/icons/logo_white_alter_ego.svg';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Logout from '../Admin/Logout';

const AdminHeader = () => {
  const adminData = useSelector((state) => state.adminReducer);

  return (
    <div className="dashboard__header">
      <div className="dashboard__header__logo">
        <Link to="/admin/dashboard">
          <img src={Logo} alt="dahsboard logo" />
        </Link>
      </div>
      <div className="dashboard__header__menu">
        <Link
          className="dashboard__header__menu__link"
          to={`/admin/profil/${adminData.id}`}
        >
          {adminData.username}
        </Link>
        <Logout />
      </div>
    </div>
  );
};

export default AdminHeader;
