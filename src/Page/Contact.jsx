import React from "react";
import Navbar from "../component/Nav/Navbar";
import Footer from "../component/Footer";
import { FaArrowRight } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row bg-gray-200 text-center drop-shadow-xl">
        <div className="lg:w-1/2 rounded-lg overflow-hidden">
          <img
            className="w-full lg:max-w-screen-sm mx-auto mt-10   mb-10 rounded-md drop-shadow-xl
            bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 
            transition delay-150 duration-300 ease-in-out 
            "
            src="https://imghelps.org/wp-content/uploads/2022/08/group-friends-spending-time-together.png"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Make contact with us.
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-500 mb-8">
            Any type of query fill the form.
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
      <div className="mx-auto max-w-2xl p-8 mt-10 my-20 bg-gray-100 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h1>

        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-center"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
// import React from "react";
// import Navbar from "../component/Nav/Navbar";
// import Footer from "../component/Footer";
// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col lg:flex-row bg-gray-200 text-center">
//         <div className="lg:w-1/2 rounded-lg overflow-hidden">
//           <img
//             className="w-full lg:max-w-screen-sm mx-auto mt-10"
//             src="https://images.picxy.com/cache/2020/6/20/fe0c73b4bd6c586c170e64d5ef6d8607.jpg"
//             alt=""
//           />
//         </div>
//         <div className="lg:w-1/2 flex flex-col justify-center p-8">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//           Make contact with us.
//           </h2>
//           <p className="text-2xl lg:text-3xl text-gray-500 mb-8">
//          Any type of query  fill the form.
//           </p>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Click me
//           </button>
//         </div>
//       </div>
//       <div className="mx-auto max-w-2xl p-8 mt-10 my-20 bg-gray-100 rounded-md shadow-md">
//         <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
//           Contact Us
//         </h1>

//         <form>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-gray-600 text-sm font-medium mb-2"
//             >
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               placeholder="John Doe"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-600 text-sm font-medium mb-2"
//             >
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               placeholder="john@example.com"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="message"
//               className="block text-gray-600 text-sm font-medium mb-2"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               placeholder="Type your message here..."
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-center"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;
