import React from 'react';
import Navbar from './Navbar';
import FooterSection from './FooterSection';

const Contactus = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen px-4 py-20 bg-[#192a3a]">
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto mb-10 lg:mt-20 text-start px-20">
        <span className="text-sm uppercase text-indigo-600 tracking-wide font-semibold">Start a Project</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Let’s build something <span className="text-indigo-600">beautiful</span> together
        </h1>
        <p className="mt-4 text-lg text-white">
          We'd love to be your online partner. Describe your vision and we’ll get back to schedule an intro call.
        </p>
        <p className="mt-2 text-md text-white">
          Prefer a quick chat? Call us at{" "}
          <a href="tel:+31203038740" className="text-indigo-600 hover:underline">+31 20 30 38 740</a> or email{" "}
          <a href="mailto:info@wpmasters.nl" className="text-indigo-600 hover:underline">info@wpmasters.nl</a>.
        </p>
      </div>
      {/* Contact Form */}
      <div className="w-full max-w-7xl mx-auto px-20 p-6 ">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Interests */}
          <div>
              <h3 className="text-xl font-semibold text-white">I am interested in</h3>
              <div className="flex flex-wrap gap-4 mt-3">
                {["Branding and Design", "WordPress Development", "Digital Marketing"].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="bg-transparent border-2 hover:cursor-pointer border-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-600 hover:ring-4 hover:ring-indigo-300 transition-all duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          {/* Project Info */}
          <div>
            <h3 className="text-xl font-semibold text-white">About your project</h3>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block mb-1 font-medium text-white">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="First and last name"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-white">Company</label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium text-white">Email address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium text-white">Tell us about your project <span className="text-red-500">*</span></label>
                <textarea
                  required
                  rows="6"
                  placeholder="Message"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white"
                ></textarea>
              </div>
            </div>
          </div>
          {/* Budget */}
          <div>
            <h3 className="text-xl font-semibold text-white">Project budget</h3>
            <div className="grid gap-2 mt-3">
              {["1 - 5k", "6 - 15k", "16 - 30k", "31 - 50k", "50k+"].map((range, i) => (
                <label key={i} className="flex items-center gap-2 text-white">
                  <input type="radio" name="budget" required value={range} className="form-radio accent-indigo-600" />
                  <span>{range}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Terms */}
          <div>
            <label className="flex items-start gap-2 text-white">
              <input type="checkbox" required className="form-checkbox accent-indigo-600 mt-1" />
              <span>
                I accept the{" "}
                <a href="/en/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">
                  Terms and Conditions
                </a>.
              </span>
            </label>
          </div>
          {/* Submit */}
          <div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    <FooterSection/>
    </>
  );
};

export default Contactus;
