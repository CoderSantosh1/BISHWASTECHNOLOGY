import React from "react";
import Navbar from "../component/Nav/Navbar";
import Footer from "../component/Footer";
import { team } from "../Mock/Team";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const About = () => {
  return (
    <div className=" relative">
      <div className="fixed z-20 top-0 w-[100%]">
        <Navbar />
      </div>
      <div className="flex flex-col lg:flex-row bg-gray-200 text-center mt-20 ">
        <div className="lg:w-1/2 rounded-lg overflow-hidden">
          <img
            className="w-full lg:max-w-screen-sm mx-auto mt-10"
            src="https://img.freepik.com/premium-psd/brainstorming-…with-office-people-3d-illustration_434471-723.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
           BISHHWAS TECHNOLOGY
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-500 mb-8">
          Welcome to BISHWAS TECHNOLOGY, where Make the all student  for the better envoriment for the IT Hubbs, we have been dedicated to achive your next Goal. 
          Let's Meet our Team.
          </p>
        </div>
      </div>



      <div className="p-4 mt-20 text-center">
        <h1 className="font-bold mb-4 text-balance text-6xl">
          Get to know us
        </h1>
        <div className="mt-auto mx-4 md:mx-8 lg:mx-20">
          <p className="mb-4 text-left">
            Welcome to Bishwas Technology where innovation meets excellence. We
            are passionate about a brief description of what your company does.
          </p>
          <p className="mb-4 mt-8 text-balance text-left">
            <span className="text-2xl underline md:underline-offset-4">
              Bishwas Technology{" "}
            </span>{" "}
            &nbsp; are IT services and IT consultancy that specializes in
            creating innovative solutions for businesses. We are passionate
            about technology and believe in the power of software to transform
            the world. Our internship program is just one of the ways in which
            we are investing in the future of the industry.
          </p>
          <p className="mb-4 text-left">
            <span className="text-1xl underline md:underline-offset-2">
              Bishwas Technology{" "}
            </span>{" "}
            &nbsp; we believe practical knowledge is the key to success in the
            tech industry. Our aim is to help students lacking basic skills by
            offering hands-on learning through live projects and real-world
            examples. Our team consists of industry experts who are dedicated to
            equipping interns with the knowledge and skills needed to succeed in
            their careers. We foster an inclusive and supportive environment
            that encourages learning, growth, and creativity.
          </p>
        </div>
      </div>



      {/* <div className="flex flex-col sm:flex-row bg-gray-200 p-4 mt-5 text-center ">
        
          <div className="flex-1 sm:gap-10 mb-5 sm:mb-0 min-h-full w-full sm:w-64 mx-5">
            <div className="shadow-lg rounded-lg overflow-hidden mt-10">
              <div className="p-4">
                <h2 className=" font-bold mb-2 text-start text-5xl">
                  
                &nbsp;&nbsp; Our mission
                </h2>
                <p className=" text-start">
                  Software development is an iterative process, and the mission
                  includes continually improving software solutions. This
                  entails gathering feedback, identifying areas for enhancement,
                  and implementing updates to make the software more efficient,
                  user-friendly, and reliable. Continuous improvement also
                  involves staying up to date with the latest technologies,
                  tools, and industry trends.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 sm:gap-10 min-h-full w-full mx-7">
            <div className="shadow-lg rounded-lg overflow-hidden mt-10">
              <div className="p-4">
                <h2 className=" font-bold mb-2 text-left text-5xl">
                &nbsp;&nbsp; Our vision
                </h2>
                <p className="text-left">
                  The vision of software development is to create innovative
                  solutions that push the boundaries of technology. This
                  involves leveraging emerging technologies, exploring new
                  ideas, and developing software that brings novel approaches to
                  solving problems and improving the lives of users.
                </p>
              </div>
            </div>
          </div>
        
      </div> */}



      <div className="mx-auto max-w-7xl px-2 lg:px-0  my-10">
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
           OUR TEAMS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-xl">
          "Our team is made up of experienced and dedicated professionals who are passionate about our work. We are committed to providing our clients with the best possible service and support. We believe that our team is our greatest asset, and we are proud of the work that they do."
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((item) => (
            <div className="mx-auto w-[300px] rounded-md border">
              <img
                src={item.img}
                alt="Laptop"
                className="h-[200px] w-full rounded-t-md object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">{item.name}</h1>
                <h6 className="mt-3 font-medium">
                  {item.position}
                </h6>
                <p className="mt-3 text-sm text-gray-600">
                {item.bio}
                </p>
                <div className="mt-4 flex flex-wrap">
                  <div className="w-auto p-1.5">
                    <a href={item.link_url}>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <FaLinkedin />
                      </div>
                    </a>
                  </div>
                  <div className="w-auto p-1.5">
                    <a href={item.twt_url}>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <BsTwitterX />
                      </div>
                    </a>
                  </div>
                  <div className="w-auto p-1.5">
                    <a href={item.ins_url}>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <GrInstagram />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>














      </div>
      

      <Footer />
    </div>
  );
};

export default About;
