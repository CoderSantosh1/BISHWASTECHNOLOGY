import React from 'react'
import{job} from'./CareersMock'
const Careers = () => {
  return (
    <div>
    
    <div className="flex flex-col lg:flex-row bg-gray-200 text-center mt-20">
        <div className="lg:w-1/2 rounded-lg overflow-hidden">
          <img
            className="w-full lg:max-w-screen-sm mx-auto mt-10"
            src="https://www.colorado.edu/career/sites/default/files/styles/large/public/page/cs_ccj_slider.jpg?itok=kPeqCN3y"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            BISHWAS TECHNOLOGY.
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-500 mb-8">
          BISHWAS TECHNOLOGY has decided to keep their services overview lean and make their solutions & success stories a bit more robust so users can see for themselves how companies like their own can find success in the project.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>
        </div>
      </div>

    <div className="container w-full mx-auto py-12 text-center mt-10">
    <h1 className="text-4xl font-bold mb-8">Our jobs website</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
      {job?.map((job) => (
        <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{job.position}</h2>
          <p className="text-gray-600 mb-4">{job.location}</p>
          <p className="text-gray-800">{job.description}</p>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  </div>
  </div>
  )
}

export default Careers;