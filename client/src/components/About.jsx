import aboutImage from "../assets/images/about.png";
import aboutCardImg from "../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section >
      <div className="container lg:pr-64 lg:pl-64">
        <div className="flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ========= About Image ========== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImage} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* ========= About Content ========== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the Nations Best</h2>
            <p className="text__para">
              For 30 Years in a row, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="text__para mt-[30px]">
              For 30 Years in a row, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <Link to="/"><button className="btn">Learn More</button></Link> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
