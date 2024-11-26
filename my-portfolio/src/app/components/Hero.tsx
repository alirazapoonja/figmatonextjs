import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className='my-[66px] p-10 mx-auto md:w-[1299px] md:h-[704px] flex flex-col-reverse md:flex-row items-center justify-between'>

      {/* text div */}
      
      <div className='w-[90%] md:w-[681px] h-[722px] flex flex-col justify-between items-start '>
        <h1 className={`${inter.className} text-[60px] font-normal text-myblack`}>Let <b>your Shipping</b><br/><b>Rates Finds You!</b> <br/> in Our Website</h1>
        <p className={`${inter.className} text-[40px] font-normal text-myblack`}>We provide you best Cargo Freight <br/>rates with Worldwide Ports</p>
        <p className={`${inter.className} p-1 text-[40px] font-normal text-myblack`}>Port to Port Clearance <br/>Best Rates<br/>Best Service<br/>Door to Door Delivery</p>
        <button className={`${inter.className} w-[224px] h-[59px] text-[30px] font-normal bg-blue-600 text-white`}>Get Started </button>
      </div>

      {/* image div */}
      <div className='w-[529] h-[500] relative'>
        <Image className='z-50' src={"/images/carriers.png"} alt='Carrier' width={529} height={500}/>
      

        </div>
      </div>
  )
}

export default Hero

