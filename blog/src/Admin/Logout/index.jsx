import React from 'react';
import LogoutIcon from '../../styles/assets/icons/logout_white.svg';
const Logout = () => {
  return (
    <div className="logout">
      <img src={LogoutIcon} alt="icon de déconnexion dashboard" />
    </div>
  );
};

export default Logout;
