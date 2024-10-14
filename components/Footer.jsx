import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#555] py-8 font-sans">
      <div className="mx-auto flex max-w-screen-xl flex-wrap justify-around gap-4 px-4">
        <div className="mb-4 min-w-[200px] flex-1">
          <h3 className="mb-4 text-xl">About Us</h3>
          <p>We are a company dedicated to</p>
          <p>creating amazing web experiences.</p>
        </div>
        <div className="mb-4 min-w-[200px] flex-1">
          <h3 className="mb-4 text-xl">Quick Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="/" className="no-underline hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/services" className="no-underline hover:underline">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="no-underline hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 min-w-[200px] flex-1">
          <h3 className="mb-4 text-xl">Connect</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-2xl"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-2xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <br />
          <div>
            <p> ch21b081@smail.iitm.ac.in</p>
            <p> +91 91429 40445</p>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-4 text-center">
        <p>&copy; {currentYear} Ystoxx. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
