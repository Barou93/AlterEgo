import React from "react";

import Logo from ".././styles/assets/icons/logo_alter_ego.svg";
import {TailSpin} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="spiner">
      <TailSpin
        height="80"
        width="80"
        color="#07304c"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="spiner-anim"
        visible={true}
      />
      <div className="spiner__logo">
        <img src={Logo} alt="le loader du site AlterEgo" />
      </div>
    </div>
  );
};

export default Loader;
