import React from "react";
import AppLayout from "./layout/AppLayout";
// import BITS from "./assets/BITS.png";
import { FaLocationArrow, FaLocationCrosshairs, FaLocationPin, FaLocationPinLock, FaLockOpen, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className=" bg-slate-1000 ">
        <AppLayout>
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row text-[#444] w-full justify-between py-4 px-4 flex-wrap">
            {/* Company Information */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mt-5 text-white">
              <h1 className="font-bold text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl mb-6 text-white">
                {/* <img src={BITS} alt="" /> */}
                <h1>BISHWAS Technology</h1>
              </h1>
              <div className="flex flex-col gap-3 w-full sm:w-full md:w-[300px] lg:w-[300px] xl:w-[300px] text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                <a
                  className="hover:underline hover:font-semibold flex flex-row "
                  href="/"
                >
                  <span className="flex flex-row gap-2 text-lg">
                    <FaLocationCrosshairs className="mt-1.5" />
                  Delhi india
                  </span>
                </a>
                <a
                  className="hover:underline hover:font-semibold flex flex-row"
                  href="/"
                >
                  <span className="flex flex-row gap-2 text-lg">
                    <FaMessage className="mt-1.5" />
                    technologybishwas99@gmail.com
                  </span>
                </a>
                <a className="hover:underline hover:font-semibold " href="/">
                  <span className="flex flex-row gap-3">
                    <LuPhoneCall className="mt-1.5" />
                    :(+91) 6201553036 /7857948521
                  </span>
                </a>
              </div>
            </div>

            {/* Information Links */}
            <div className="w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mt-5 text-white">
              <h1 className="font-bold text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl mb-6 text-white">
                Information
              </h1>
              <div className="flex flex-col gap-3 w-full sm:w-full md:w-[300px] lg:w-[300px] xl:w-[300px] text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                <a className="hover:underline hover:font-semibold " href="/home">
                  Home
                </a>
                <a className="hover:underline hover:font-semibold " href="/about">
                  About Us
                </a>
                <a className="hover:underline hover:font-semibold " href="/">
                  Our School
                </a>
                <a className="hover:underline hover:font-semibold " href="/">
                  Innovations
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mt-5 text-white">
              <h1 className="font-bold text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl mb-6 text-white">
                Quick link
              </h1>
              <div className="flex flex-col gap-3 w-full sm:w-full md:w-[300px] lg:w-[300px] xl:w-[300px] text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                <a className="hover:underline hover:font-semibold " href="/service">
                  Services
                </a>
                <a className="hover:underline hover:font-semibold " href="/">
                  Project
                </a>
                <a className="hover:underline hover:font-semibold " href="/carer">
                  Careers
                </a>
                <a className="hover:underline hover:font-semibold " href="/Contact">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Our Policies and Social Links */}
            <div className="w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mt-5  text-white">
              <h1 className="font-bold text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl mb-4 text-white">
                Our Policies
              </h1>
              <a className="hover:underline hover:font-semibold " href="/">
                Our Flier
              </a>
              <div className="flex py-4">
                <h1 className="font-bold text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl mb-4">
                  Follow Us On <br />
                  <span className="flex flex-row gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 mt-2">
                    <FaSquareXTwitter />
                    <FaLinkedin />
                    <FaFacebookSquare />
                  </span>
                </h1>
                {/* Additional content goes here if needed */}
              </div>
            </div>
          </div>

          {/* Block Image Component */}
          <div className="w-full sm:w-full md:w-1/2 lg:w-3/4 xl:w-3/4 text-white text-center sm:text-left md:text-left lg:text-left xl:text-left mt-4">
            <p>© 2023 technologyishwas@gmail.com. All Rights Reserved</p>
          </div>
        </AppLayout>
      </div>
    </footer>
  );
}
