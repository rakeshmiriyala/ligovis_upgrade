import React from "react";
import { FaCube, FaPalette, FaBullhorn, FaLaptopCode } from "react-icons/fa";
import experiencesImg from "../assets/3d modeling-amico 1.png";
import uiImg from "../assets/Mobile UI-UX-cuate 1.png";
import marketingImg from "../assets/Mobile Marketing-amico (1) 1.png";
import webImg from "../assets/Application programming interface-rafiki 1.png";

const Features = () => {
  return (
    <div id="features" className="features min-h-screen w-full px-4 md:px-16 py-24 bg-black text-white font-[Poppins,sans-serif] overflow-x-hidden relative z-10">
      <div className="features-content">
        {/* Header */}
        <div className="features-header text-start mb-8">
          <h2 className="text-3xl md:text-5xl font-bold">Our Services</h2>
        </div>

        {/* Subheader */}
        <div className="features-subheader text-start mb-12">
          <h3 className="text-xl md:text-2xl font-medium mb-2">
            Let's work together in shaping your vision
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            We give our best to ensure our designs bring your vision to reality
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Feature Card 1 */}
          <div className="feature-card col-span-7 md:col-span-6 lg:col-span-7 bg-gradient-to-br from-[#ff5733] to-[#ff8c33] rounded-[24px] p-10 min-h-[300px] md:min-h-[300px] flex flex-col md:flex-row items-center gap-6 transition-all duration-300 ease-in-out">
            <div className="card-content md:w-1/2">
              <div className="card-icon mb-4 text-5xl text-white">
                <FaCube />
              </div>
              <h4 className="text-xl font-semibold mb-2">3D Experiences</h4>
              <p>
                We specialize in crafting 3D AR/VR experiences and interactive virtual tours that captivate and immerse your audience.
              </p>
            </div>
            <div className="card-illustration md:w-1/2">
              <img src={experiencesImg} alt="3D Experience" className="w-full" />
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card col-span-5 md:col-span-6 lg:col-span-5 bg-gray-900 rounded-[24px] p-10 min-h-[300px] md:min-h-[300px] flex flex-col md:flex-row items-center gap-6 transition-all duration-300 ease-in-out">
            <div className="card-content md:w-1/2">
              <div className="card-icon mb-4 text-5xl text-white">
                <FaPalette />
              </div>
              <h4 className="text-xl font-semibold mb-2">Designs</h4>
              <p>
                We analyze everything about your business and your customers to provide the most suiting visuals.
              </p>
            </div>
            <div className="card-illustration md:w-1/2">
              <img src={uiImg} alt="UI/UX Design" className="w-full" />
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card col-span-5 md:col-span-6 lg:col-span-5 bg-gray-900 rounded-[24px] p-10 min-h-[300px] md:min-h-[300px] flex flex-col md:flex-row items-center gap-6 transition-all duration-300 ease-in-out">
            <div className="card-content md:w-1/2">
              <div className="card-icon mb-4 text-5xl text-white">
                <FaBullhorn />
              </div>
              <h4 className="text-xl font-semibold mb-2">Advertisements</h4>
              <p>
                We help with marketing and advertising your brand through creative 3D visuals or tailor-made branded content.
              </p>
            </div>
            <div className="card-illustration md:w-1/2">
              <img src={marketingImg} alt="Marketing" className="w-full" />
            </div>
          </div>

          {/* Feature Card 4 */}
          <div className="feature-card col-span-7 md:col-span-6 lg:col-span-7 bg-gradient-to-br from-[#ff5733] to-[#ff8c33] rounded-[24px] p-10 min-h-[300px] md:min-h-[300px] flex flex-col md:flex-row items-center gap-6 transition-all duration-300 ease-in-out">
            <div className="card-content md:w-1/2">
              <div className="card-icon mb-4 text-5xl text-white">
                <FaLaptopCode />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Building websites & applications
              </h4>
              <p>
                Bring your business ideas to life with our studio, where we build websites and applications tailored to your needs.
              </p>
            </div>
            <div className="card-illustration md:w-1/2">
              <img src={webImg} alt="Development" className="w-full" />
            </div>
          </div>
          {/* Feature Card 5 */}
          <div className="feature-card col-span-7 md:col-span-6 lg:col-span-7 bg-gradient-to-br from-[#ff5733] to-[#ff8c33] rounded-[24px] p-10 min-h-[300px] md:min-h-[300px] flex flex-col md:flex-row items-center gap-6 transition-all duration-300 ease-in-out">
            <div className="card-content md:w-1/2">
              <div className="card-icon mb-4 text-5xl text-white">
                <FaCube />
              </div>
              <h4 className="text-xl font-semibold mb-2">3D Experiences</h4>
              <p>
                We specialize in crafting 3D AR/VR experiences and interactive virtual tours that captivate and immerse your audience.
              </p>
            </div>
            <div className="card-illustration md:w-1/2">
              <img src={experiencesImg} alt="3D Experience" className="w-full" />
            </div>
          </div>

          {/* Feature Card 6 */}
          <div className="feature-card col-span-5 md:col-span-6 lg:col-span-5 bg-gray-900 rounded-[24px] p-10 min-h-[300px] md:min-h-[300px] flex flex-col md:flex-row items-center gap-6 transition-all duration-300 ease-in-out">
            <div className="card-content md:w-1/2">
              <div className="card-icon mb-4 text-5xl text-white">
                <FaPalette />
              </div>
              <h4 className="text-xl font-semibold mb-2">Designs</h4>
              <p>
                We analyze everything about your business and your customers to provide the most suiting visuals.
              </p>
            </div>
            <div className="card-illustration md:w-1/2">
              <img src={uiImg} alt="UI/UX Design" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
