import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company details section */}
          <div data-aos="fade-up" className="space-y-6">
            <h1 className="text-3xl font-bold">Orange Mint</h1>
            <p className="text-sm max-w-[300px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              soluta accusamus excepturi corrupti velit dolorem pariatur, ipsam
              libero magni quaerat fuga inventore iste cum non.
            </p>
          </div>
          {/* NavLink section */}
          <div data-aos="fade-up" className="space-y-6">
            <h1 className="text-4xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first colom links */}
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Search Fruits</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              {/* second colom links */}
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Search Fruits</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* social links section */}
          <div data-aos="fade-up" data-aos-delay="500" className="space-y-6">
            <h1 className="text-4xl font-bold">Follow Us</h1>
            <div>
              <p>+98 674321788</p>
              <p>Jebraill, Herat Afghanistan</p>
            </div>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
          </div>
              </div>
              {/* Copyright section */}
              <p className="text-white text-center mt-8 pt-8 border-t-2">
                &copy; 2023 Orange Mint. All rights reserved.
              </p>
      </div>
    </div>
  );
};

export default Footer;
