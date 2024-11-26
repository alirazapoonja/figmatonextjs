import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';

// google font
const inter = Inter({ subsets: ["latin"] });


const Footer = () => {
  return (
    <div className='bg-mynavibarcolor space-y-6  flex flex-col items-center justify-evenly h-[243px]'>
            <div className='w-[1204px] h-[209px] flex space-x-12'>
                <Link href={''}><Image src={"/images/cardboard.png"} alt="cardboard" width={383} height={122}/></Link>
                <Link href={''}><Image src={"/images/logistic.png"} alt="Logistic Van" width={198} height={147}/></Link>
                <Link href={''}><Image src={"/images/drycargo.png"} alt="Ship" width={125} height={116}/></Link>
                <Link href={''}><Image src={"/images/parcel.png"} alt="parcel" width={144} height={120}/></Link>
              
        
        
      </div>
      <p className={`${inter.className} text-center font-normal text-[24px]`}>Copyright@2023 All rights Reserved</p>
            
    </div>
  )
}

export default Footer
