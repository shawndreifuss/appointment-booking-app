import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import featureImage from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import faqImage from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faqs/FaqList";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      {/* ============= Hero Section =========== */}
      <section className="hero__section pl-64 pr-64 pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
            {/* ============= Hero Content =========== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="btn"> Request an Appointment</button>
              </div>
              {/* ============= Hero Counter =========== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading=[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of experience </p>
                </div>
                <div>
                  <h2 className="text-[36px] leading=[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location </p>
                </div>
                <div>
                  <h2 className="text-[36px] leading=[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction </p>
                </div>
              </div>
            </div>
            {/* ============= Hero Content =========== */}

            <div className="flex gap-[30px] justify-end ">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= Hero Section End =========== */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best <br /> Medical services
            </h2>
            <p className="text__para text-center">
              World-Class care for everyone. Our health system offers unmatched
              expert health care.
            </p>
          </div>

          {/* ============= Icon Section =========== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            {/*  ========= Icon 1 ============= */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headerColor font-[700] text-center">
                  Find A Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-Class care for everyone. <br /> Our health system offers
                  unmatched expert health care.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/*  ========= Icon 2 ============= */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headerColor font-[700] text-center">
                  Find A Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-Class care for everyone. <br /> Our health system offers
                  unmatched expert health care.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            {/*  ========= Icon 3 ============= */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headerColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-Class care for everyone. <br /> Our health system offers
                  unmatched expert health care.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============= About Section Start =========== */}
      <About />
      {/* ============= Services Section =========== */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              World-Class care for everyone Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/*  ============= Feature Section ================ */}

      <section>
        <div className="container pr-64 pl-64">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/*  ========= Feature Content  */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br />
                anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/*  ========= Feature Image ===========  */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImage} alt="" />
              <div className="w-[150px] ml-24 lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[600]">
                      10:10AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="rounded-full w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4">
                  Consultation
                </div>

                <div className="flex items center gap[-6px0 lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-916px] lg:leading-[22px] font-[700] text-headingColor">
                    Shawn Dreifuss
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= Our Great Doctors =========== */}
      <section>
        <div className="container pr-64 pl-64">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              World-Class care for everyone Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>

      {/*  ============== Faq Section =============== */}

      <section>
        <div className="container pr-64 pl-64">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImage} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions by our beloved patients</h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* ============= Testimonial ================= */}
      <section>
        <div className="container pr-64 pl-64">
        <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text__para text-center">
              World-Class care for everyone Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
