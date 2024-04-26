"use client"
import Image from "next/image";
import insta from "/public/assets/insta.png";
import dhoni from "/public/assets/dhoni.jpg";
import { IoMenu } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="shadow-sm border-b ">
      <div className="flex justify-between max-w-6xl items-center m-auto">
        <div>
          <Image src={insta} alt="" width={150} height={500} />
        </div>

        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <BsSearch className="h-5 w-5 text-gray-500 " />
          </div>
          <input
            type="text"
            placeholder="search"
            className="bg-gray-50 block w-full pl-10 p-1"
          />
        </div>
        <div className="flex justify-end items-center space-x-4">
          <IoHomeSharp size={25} />
          <div className="relative ">
            <RiMessengerLine size={25} />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-600 rounded-full flex items-center justify-center animate-pulse text-white">
              8
            </div>
          </div>
          {/* <IoMenu size={25} /> */}
          <div className="relative ">
            <FaHeart size={25} />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-600 rounded-full flex items-center justify-center animate-pulse text-white">
              10
            </div>
          </div>

          <FaCirclePlus size={25} />
          <div className="relative ">
            <HiUserGroup size={25} />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-600 rounded-full flex items-center justify-center animate-pulse text-white">
              8
            </div>
          </div>
          <div className="relative ">
            <FaPaperPlane size={25} />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-600 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <Image
            src={dhoni}
            alt=""
            className="rounded-full  w-[36px] h-[36px]"
          />
        </div>
      </div>
    </div>
  );
}
