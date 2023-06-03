import React from "react";
import Hero from "../components/Hero/Hero";
import Sales from "../components/Sales/Sales";
import SliderIcon from "../components/sliderIcon/SliderIcon";
import Interest from "../components/Interest/Interest";
import Discover from "../components/Discover/Discover";
import Collection from "../components/Collection/Collection";
import SliderInitial from "../components/SliderInitial/SliderInitial";
import ChatBot from "../components/ChatBot/ChatBot";
import PaymentsDataHome from "../components/PaymentsDataHome/PaymentsDataHome";

const Home = () => {
  return (
    <div className="bg-[#EDEDED] p-2 sm:p-0">
      <section className="mx-auto w-full">
        <SliderInitial />
      </section>
      <section className="mx-auto max-w-[1200px] mt-8">
        <PaymentsDataHome />

        <Hero />
        <Discover />

        <Sales />
        <Interest />
      </section>
      <section className="mx-auto max-w-[1200px] ">
        <Collection />
      </section>
      <section className="flex mx-auto max-w-[1200px]  h-[340px] mt-4">
        <SliderIcon />
      </section>
      <ChatBot />
    </div>
  );
};

export default Home;
