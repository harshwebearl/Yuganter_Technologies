import React from 'react';
import { Link } from 'react-router-dom';
const logo = '/Yuganter_Technologies.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="YugAntar Technologies" className="w-16 h-16 mr-4 rounded-full object-contain" />
              
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-secondary-300 group-hover:to-primary-300">
                YugAntar Technologies <br />
                <span className="text-sm md:text-base font-medium">
                  & Training Institute
                </span>
              </h1>
            </div>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 max-w-md">
              YugAntar Technologies Ahmedabad - Leading software development company in Navrangpura offering web development, mobile app solutions, and IT consultancy for businesses in Gujarat.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">

              {/* Facebook */}
              <a href="https://www.facebook.com/share/16Ao4uJg7S/" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X */}
              <a href="https://x.com/YugATechnologie" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-500 flex items-center justify-center transition-all duration-300 hover:scale-110 text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="28" width="28">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/yugantar_technologies?igsh=Z2Q5cXMxaXg2dm93" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-6 text-secondary-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>About Us</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>Courses</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>Blog</Link></li>
              <li><Link to="/internship" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>Internships</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-6 text-secondary-400">Contact Info</h3>

            <ul className="space-y-4 text-gray-300">

              {/* Address */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>204, 2nd Floor, Yash Aqua, Vijay Cross Road, Navrangpura, Ahmedabad - 380009</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:info@yugantartechnologies.com" className="hover:text-secondary-400 transition-colors">
                  info@yugantartechnologies.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>

                <div className="flex flex-col">
                  <a href="tel:+916355582605" className="hover:text-secondary-400 transition-colors">
                    +91 6355582605
                  </a>
                  <a href="tel:+917859982605" className="hover:text-secondary-400 transition-colors">
                    +91 7859982605
                  </a>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© {currentYear} YugAntar Technologies – All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}