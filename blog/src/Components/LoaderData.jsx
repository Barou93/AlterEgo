import React from "react";

import {TailSpin} from "react-loader-spinner";

const LoaderData = () => {
  return (
    <div className="spiner loader-data">
      <TailSpin
        height="40"
        width="40"
        color="#07304c"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="spiner-anim"
        visible={true}
      />
    </div>
  );
};

export default LoaderData;
