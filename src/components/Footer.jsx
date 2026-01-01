import React from "react";
import { assets } from "../assets/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-16 lg:gap-20 xl:gap-32 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-400 bg-black">
      <div className="flex flex-wrap justify-center lg:justify-start items-start gap-10 md:gap-[60px] xl:gap-[120px] text-center sm:text-left">
        <Link to={"/"} className="flex flex-col items-center sm:items-start">
          <img
            src={assets.logoImg}
            alt="logoImg"
            width={88}
            className="h-9 invert mb-2"
          />
          <span className="text-white uppercase text-xs font-extrabold tracking-[6px] relative bottom-1">
            Ridezon
          </span>
        </Link>

        <div>
          <p className="text-slate-100 font-semibold">Product</p>
          <ul className="mt-2 space-y-2">
            {["Home", "Support", "Pricing", "Affiliate"].map((item) => (
              <li key={item}>
                <a href="/" className="hover:text-[#FFBF00] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-slate-100 font-semibold">Resources</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-[#FFBF00] transition-colors">
                Company
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#FFBF00] transition-colors">
                Blogs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#FFBF00] transition-colors">
                Community
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-[#FFBF00] transition-colors flex items-center gap-2"
              >
                Careers
                <span className="text-xs text-white bg-[#FFBF00] rounded-md px-2 py-0.5">
                  We’re hiring!
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#FFBF00] transition-colors">
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-slate-100 font-semibold">Legal</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-[#FFBF00] transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#FFBF00] transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col max-md:items-center lg:items-end text-center lg:text-right gap-3 max-w-[320px] mx-auto lg:mx-0">
        <p>
          Find reliable cars with transparent pricing, verified inspections,
          flexible pickup and delivery options, and 24/7 customer support for a
          smooth rental or buying experience.
        </p>

        <div className="flex justify-center lg:justify-end items-center gap-4 mt-3">
          <img
            src={assets.facebook}
            alt="facebook"
            className="h-5 w-5 cursor-pointer hover:scale-110 transition-transform"
          />
          <img
            src={assets.instagram}
            alt="instagram"
            className="h-5 w-5 cursor-pointer hover:scale-110 transition-transform"
          />
          <img
            src={assets.twitter}
            alt="twitter"
            className="h-5 w-5 cursor-pointer hover:scale-110 transition-transform"
          />
          <img
            src={assets.linkedin}
            alt="linkedin"
            className="h-5 w-5 cursor-pointer hover:scale-110 transition-transform"
          />
        </div>

        <p className="mt-3 text-gray-500">
          © 2025{" "}
          <a href="/" className="hover:text-[#FFBF00] transition">
            Ridezon. All rights reserved.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
