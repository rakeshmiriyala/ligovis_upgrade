import React from 'react';

const FooterSection = () => {
  return (
    <section className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-screen-2xl mx-auto">
        {/* Call to Action */}
        <div className="text-center mb-12">
          <a
            href="/en/contact/"
            className="inline-block bg-orange-500 text-white text-xl font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            <div>Interested?</div>
            <div>Get in touch</div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Google Reviews */}
          <div>
            <img
              src="https://wpmasters.nl/wp-content/themes/wp-masters/assets/images/logos/logo_google.svg"
              alt="Google logo"
              className="mb-4 w-28"
            />
            <div className="text-sm text-gray-600">
              <div className="text-2xl font-bold text-orange-500">4.8</div>
              <div className="text-yellow-400 flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.954L10 0l2.948 5.956 6.562.954-4.755 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <div>Based on 64 reviews</div>
              <div>
                powered by{' '}
                <span className="font-semibold text-blue-500">Google</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-700">
              {[
                ['Home', 'https://wpmasters.nl/en/'],
                ['Services', '/en/services/'],
                ['Portfolio', '/en/portfolio/'],
                ['Knowledge base', '/en/knowledge-base/'],
                ['About us', 'https://wpmasters.nl/en/about-wp-masters/'],
                ['Careers', '/en/careers/'],
                ['Contact', '/en/contact/']
              ].map(([label, href], i) => (
                <li key={i}>
                  <a href={href} className="hover:text-orange-500">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <div className="text-gray-700 text-sm space-y-2 mb-4">
              <div>
                <strong>WP Masters HQ</strong>
                <div>Overschiestraat 180 II</div>
                <div>1062 XK, Amsterdam</div>
                <div>Nederland</div>
              </div>
              <div>
                <strong>WP Masters India</strong>
                <div>Vardhman P-Mall, Unit 220</div>
                <div>110034, New Delhi</div>
                <div>India</div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <a href="mailto:info@wpmasters.nl" className="hover:text-orange-500">
                  info@wpmasters.nl
                </a>
              </li>
              <li>
                <a href="tel:0203038740" className="hover:text-orange-500">
                  020 30 38 740
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/wpmasters.nl/" target="_blank" rel="noreferrer">
                <img
                  src="https://wpmasters.nl/wp-content/themes/wp-masters/assets/images/icons/icon-instagram.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/wp-masters/mycompany/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://wpmasters.nl/wp-content/themes/wp-masters/assets/images/icons/icon-linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-2">Proud of our partnerships</p>
          <div className="flex justify-center items-center flex-wrap gap-4">
            {["googlepartner", "leadinfo", "mailchimp", "meta", "logotiktok", "taggrs"].map((name, i) => (
              <img
                key={i}
                src={`/media/logo-${name}.jpg`}
                alt={name}
                className="w-20 h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;