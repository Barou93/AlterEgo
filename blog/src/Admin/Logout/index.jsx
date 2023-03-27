import React from "react";
import LogoutIcon from "../../styles/assets/icons/logout_white.svg";
import cookie from "js-cookie";
import axios from "axios";
const Logout = () => {
  const removeCookie = (key) => {
    if (window === "undefined") {
      cookie.remove(key, {expire: 1});
    }
  };
  const disconnected = async () => {
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/admin/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    localStorage.clear();
    window.location = "/admin/connexion";
  };
  return (
    <div className="logout" onClick={disconnected}>
      <img src={LogoutIcon} alt="icon de déconnexion dashboard" />
    </div>
  );
};

export default Logout;
