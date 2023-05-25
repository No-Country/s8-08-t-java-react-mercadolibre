import React from "react";
import payment from "../../assets/img/logo-payment.png";
const Loader = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="border-8 border-white border-t-sky-600 rounded-full w-16 h-16 animate-spin"></div>
      <img src={payment} alt="" />
    </div>
  );
};

export default Loader;
