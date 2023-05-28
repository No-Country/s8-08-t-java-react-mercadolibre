import React from "react";
import Hero from "../components/Hero/Hero";
import Sales from "../components/Sales/Sales";
import SliderIcon from "../components/sliderIcon/SliderIcon";
import Collection from "../components/Collection/Collection";
import SliderInitial from "../components/SliderInitial/SliderInitial";
import PaymentsDataHome from "../components/PaymentsDataHome/PaymentsDataHome";

const Home = () => {
  return (
    <div className="bg-[#EDEDED] ">
      <section className="mx-auto w-full">
        <SliderInitial />
      </section>
      <section className="mx-auto w-[85%] mt-8">
        <PaymentsDataHome />
      </section>
      <section className="mx-auto w-[85%]">
        <Hero />
      </section>
      <section className="mx-auto w-[85%]">
        <Sales />
      </section>
      <section className="mx-auto w-[90%]">
        <Collection />
      </section>
      <section className="flex mx-auto w-[85%] h-[340px] mt-4">
        <SliderIcon />
      </section>
    </div>
  );
};

export default Home;
