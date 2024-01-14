import React from "react";
import { services } from "../Mock/Services";
import Navbar from "../component/Nav/Navbar";
import Footer from "../component/Footer";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row bg-gray-200 text-center">
        <div className="lg:w-1/2 rounded-lg overflow-hidden">
          <img
            className="w-full lg:max-w-screen-sm mx-auto mt-10"
            src="https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            BISHWAS TECHNOLOGY.
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-500 mb-8">
         BISHWAS TECHNOLOGY Best of this time low price high quality output and made by the 3 to for project in real time applications
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center  mt-20 my-20 gap-6">
        {services?.map((test) => (
          <div
            className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row"
            key={test.id}
          >
            <div className="h-full w-full md:h-[200px] md:w-[300px]">
              <img
                src={test.image_url}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div>
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {test.title}
                </h1>
                <p className="mt-3 text-sm text-gray-600">{test.description}</p>
                <div className="mt-3 flex items-center space-x-2">
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
