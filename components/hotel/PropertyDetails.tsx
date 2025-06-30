import { BiSwim } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { IoWifiOutline } from "react-icons/io5";
import { MdLocalDining } from "react-icons/md";
import { SiPolywork } from "react-icons/si";
import {
  TbAirConditioning,
  TbMessageCircleUser,
  TbPhotoHexagon,
} from "react-icons/tb";
import { Button } from "../ui/button";

export default function PropertyDetails() {
  return (
    <section>
      <SubHeader />
      <Property />
      <Features />
    </section>
  );
}

export function SubHeader() {
  return (
    <div className="py-5">
      <Button className="bg-transparent text-gray-500 text-lg pl-0 hover:underline underline-offset-4 hover:text-sky-600 hover:bg-transparent font-light">
        Over View
      </Button>
      <Button className="bg-transparent text-gray-500 text-lg hover:underline underline-offset-4 hover:text-sky-600 hover:bg-transparent font-light">
        Features
      </Button>
      <Button className="bg-transparent text-gray-500 text-lg hover:underline underline-offset-4 hover:text-sky-600 hover:bg-transparent font-light">
        Reviews
      </Button>
      <Button className="bg-[#007DD0] text-white text-lg  hover:bg-[#005f9e] gap-2 rounded-full font-light">
        <TbMessageCircleUser />
        <span>Message</span>
      </Button>
    </div>
  );
}

export function Property() {
  return (
    <section>
      <div className="flex gap-5 text-lg font-semibold">
        <p>Property Type</p>
        <p>Property Type</p>
      </div>
      <div className="flex py-3 gap-5">
        <div className="flex gap-2 items-center">
          <p className="border h-10 w-10 text-xl flex justify-center items-center rounded-sm">
            <CiHome />
          </p>
          <p>Resorts</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="border h-10 w-10 text-xl flex justify-center items-center rounded-sm">
            <TbPhotoHexagon />
          </p>
          <p>12000 sqft</p>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section>
      <div className="flex gap-5 text-lg font-semibold max-w-xl">
        <p>Features</p>
      </div>
      <div className="flex py-3 gap-5">
        <div className="flex gap-2 items-center">
          <p className="border h-10 w-10 text-xl flex justify-center items-center rounded-sm">
            <IoWifiOutline />
          </p>
          <p>wifi</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="border h-10 w-10 text-xl flex justify-center items-center rounded-sm">
            <MdLocalDining />
          </p>
          <p>Dining</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="border h-10 w-10 text-xl flex justify-center items-center rounded-sm">
            <BiSwim />
          </p>
          <p>Swimming Pool</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="border h-10 w-10 text-xl flex justify-center items-center rounded-sm">
            <TbAirConditioning />
          </p>
          <p>Air Conditioning</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="border h-10 w-10 text-xl flex justify-center items-center rounded-sm">
            <SiPolywork />
          </p>
          <p>Gym</p>
        </div>
      </div>
    </section>
  );
}
