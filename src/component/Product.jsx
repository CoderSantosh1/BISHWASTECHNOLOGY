import React from "react";
import { WebProduct } from "../Mock/josanData";
const Product = () => {
  return (
    <div className="text-center mx-10 mb-20 ">

<div className="max-w-md mx-auto bg-white my-10">
      <div className="text-center">
        <h1 className="text-2xl font-thin mt-4 "> SERVICES WE DELIVER{" "}</h1>
      </div>
      <div className="p-6">
        <h1 className="font-black text-xl mb-4"> Our Training Program </h1>
        <p className="text-gray-700 text-left">
        We are passionate about technology and believe in the power of
          software to transform the world. Our internship program is just one of
          the ways in which we are investing in the future of the industry.
        </p>
      </div>
    </div>     
      <div className="flex flex-row flex-wrap justify-center gap-6">
        {WebProduct?.map((test) => (
          <div
            key={test.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLShCxB1XXzmjdutreGIPECbvpMUcMccxHsWIr65Ly11hf0A/viewform?vc=0&c=0&w=1&flr=0">
              <img
                src={test.image_url}
                alt="Laptop"
                className="h-[200px] w-full rounded-t-md object-cover"
              />
            </a>
            <div className="p-4 mt-3">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {test.course_name}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                {test.course_details}
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLShCxB1XXzmjdutreGIPECbvpMUcMccxHsWIr65Ly11hf0A/viewform?vc=0&c=0&w=1&flr=0">
                <button
                  type="button"
                  className="mt-4 w-full rounded-2xl bg-blue-600 px-10 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Apply
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;


