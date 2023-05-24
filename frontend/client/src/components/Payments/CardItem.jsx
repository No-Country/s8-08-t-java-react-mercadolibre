import React from "react";

const CardItem = ({ children }) => {
  return (
    <div className="flex items-center border bg-white mx-2 px-2 py-2 gap-5  md:gap-5 md:mx-5 xl:mx-0 lg:py-5 xl:py-8 lg:px-8 xl:px-10 lg:w-[600px] xl:w-[750px] lg:gap-5 xl:gap-8 ">
      {children}
    </div>
  );
};

export default CardItem;
