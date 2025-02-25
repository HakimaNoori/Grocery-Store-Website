import { useState } from "react";
import OrangeImg from "../../assets/orangebg.png";
import Navbar from "../Navbar/Navbar";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main className="md:px-12 md:py-6 bg-primaryDark">
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          {/* Navbar */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
            {/* text content section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 data-aos="fade-up" className="text-3xl pl-6 md:pl-14">
                01___________
              </h1>
              <h1
                data-aos="fade-up"
                dtat-aos-delay="300"
                className="text-5xl font-bold uppercase text-shadow"
              >
                A Healthy Fruit
              </h1>
              <p data-aos="fade-up" dtat-aos-delay="500" className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos, voluptas. Aperiam iste eaque dicta similique.
              </p>
              <button
                data-aos="fade-up"
                dtat-aos-delay="700"
                data-aos-offset="0"
                className="secondary-btn"
              >
                Shop Now
              </button>
            </div>
            {/* image section */}
            <div data-aos="zoom-in">
              <img
                src={OrangeImg}
                alt=""
                className="relative z-10 w-[400px] img-shadow"
              />
            </div>
            {/* blank div section */}
            <div className="md:hidden"></div>
          </div>
        </div>
        {/* background large text */}
        <h1
          data-aos="fade"
          dtat-aos-delay="600"
          data-aos-offset="100"
          className="large-text"
        >
          Orange
        </h1>
        {/* Sidebar section */}
        {sidebar && (
          <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className="text-white flex flex-col justify-center items-center gap-6">
                {/* link */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaLinkedin />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
