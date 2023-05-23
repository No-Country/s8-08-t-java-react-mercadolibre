import React from "react";

const CardItem = ({ children }) => {
  return (
    <div className=" flex items-center border bg-white xl:py-8 xl:px-10 xl:w-[750px] xl:gap-8 ">
      {children}
    </div>
  );
};

export default CardItem;
