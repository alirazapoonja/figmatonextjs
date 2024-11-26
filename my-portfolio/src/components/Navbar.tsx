import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from 'next/image'

// google font
const inter = Inter({ subsets: ["latin"] });

// /Navbar items
const Navbar = () => {
    return (
    <div>
      <ul className={`${inter.className} flex flex-row items-center justify-end
          h-[154px] w-[1529px] font-normal text-[40px] 
            space-x-12 `}>

        <Link href={''}><Image src={"/images/poonja.png"} alt="parcel" width={83} height={62}/></Link>
        <Link href={''}><li>Home</li></Link>
        <Link href={''}><li>About</li></Link>
        <Link href={''}><li>Contact</li></Link>
        <Link href={''}><li>Project</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
