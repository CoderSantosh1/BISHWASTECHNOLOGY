import React from "react";
import { services } from "../Mock/Services";
import Navbar from "../component/Nav/Navbar";
import Footer from "../component/Footer";
import { FaArrowRight } from "react-icons/fa";
const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row bg-gray-200 text-center drop-shadow-xl">
        <div className="lg:w-1/2 rounded-lg overflow-hidden">
          <img
            className="w-full lg:max-w-screen-sm mx-auto mt-10   mb-10 rounded-md drop-shadow-xl
            bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 
            transition delay-150 duration-300 ease-in-out "
            src="https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            BISHWAS TECHNOLOGY.
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-500 mb-8">
            BISHWAS TECHNOLOGY Best of this time low price high quality output
            and made by the 3 to for project in real time applications
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-40
           hover:-translate-y-1 hover:scale-110 
           transition delay-150 duration-300 ease-in-out 
          "
          >
            <FaArrowRight className="animate-bounce  h-10 w-10" />
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
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLShCxB1XXzmjdutreGIPECbvpMUcMccxHsWIr65Ly11hf0A/viewform?vc=0&c=0&w=1&flr=0">
                  <h1 className="inline-flex items-center text-lg font-semibold">
                    {test.title}
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
                </a>
                <p className="mt-3 text-sm text-gray-600">{test.description}</p>
                <div className="mt-3 flex items-center space-x-2"></div>
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
// import React from "react";
// import { services } from "../Mock/Services";
// import Navbar from "../component/Nav/Navbar";
// import Footer from "../component/Footer";

// const Services = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col lg:flex-row bg-gray-200 text-center">
//         <div className="lg:w-1/2 rounded-lg overflow-hidden">
//           <img
//             className="w-full lg:max-w-screen-sm mx-auto mt-10"
//             src="https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg"
//             alt=""
//           />
//         </div>
//         <div className="lg:w-1/2 flex flex-col justify-center p-8">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//             BISHWAS TECHNOLOGY.
//           </h2>
//           <p className="text-2xl lg:text-3xl text-gray-500 mb-8">
//          BISHWAS TECHNOLOGY Best of this time low price high quality output and made by the 3 to for project in real time applications
//           </p>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Click me
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-row flex-wrap justify-center  mt-20 my-20 gap-6">
//         {services?.map((test) => (
//           <div
//             className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row"
//             key={test.id}
//           >
//             <div className="h-full w-full md:h-[200px] md:w-[300px]">
//               <img
//                 src={test.image_url}
//                 className="h-full w-full rounded-md object-cover"
//               />
//             </div>
//             <div>
//               <div className="p-4">
//                 <h1 className="inline-flex items-center text-lg font-semibold">
//                   {test.title}
//                 </h1>
//                 <p className="mt-3 text-sm text-gray-600">{test.description}</p>
//                 <div className="mt-3 flex items-center space-x-2">
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Services;
