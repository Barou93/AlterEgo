import React from "react";

import Logo from ".././styles/assets/icons/logo_alter_ego.svg";

const Loader = () => {
  return (
    <div className="spiner">
      <span className="spiner__icon"></span>
      <div className="spiner__logo">
        <img src={Logo} alt="le loader du site AlterEgo" />
      </div>
    </div>
  );
};

export default Loader;
