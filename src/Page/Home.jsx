import React from 'react'
import Navbar from '../component/Nav/Navbar'
import Slider from '../component/Slider/Slider'

import Footer from '../component/Footer'
import Product from '../component/Product'



const Home = () => {
  return (
   
     <div className=" relative">
      <div className="fixed z-20 top-0 w-[100%]">
        <Navbar/>
      </div>
      <Slider className="z-0" /> 
      <Product/>  
      <Footer/>
    </div>
 
  )
}

export default Home;