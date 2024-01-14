import React from 'react'
import Careers from '../Careers/Careers'
import Footer from '../Footer';
import Navbar from './Navbar';
const Carers = () => {
  return (
    <div>
      <div className="fixed z-20 top-0 w-[100%]">
          <Navbar />
        </div>
        <Careers/>
        <Footer/>
    </div>
  )
}

export default Carers