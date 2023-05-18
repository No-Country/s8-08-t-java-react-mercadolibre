import React from "react";
import Hero from "../components/Hero/Hero";
import Sales from "../components/Sales/Sales";

const Home = () => {
  return (
    <div className="bg-[#EDEDED]">
      Home123
      <section className="mx-auto w-[85%]">
        <Hero />
      </section>
      <section className="mx-auto w-[85%]">
        <Sales />
      </section>
    </div>
  );
};

export default Home;
