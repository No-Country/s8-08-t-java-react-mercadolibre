import Discover from "../Discover/Discover";
import HeroBenefit from "./HeroBenefit/HeroBenefit";
import HeroCategory from "./HeroCategory/HeroCategory";

const Hero = () => {
  return (
    <>
      <div className="bg-[#EDEDED]">
        <HeroBenefit />
        <HeroCategory />
        <Discover />
      </div>
    </>
  );
};

export default Hero;
