import { BiSwim } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { IoHomeOutline, IoWifiOutline } from "react-icons/io5";
import { MdLocalDining } from "react-icons/md";
import { SiPolywork } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import {
  TbAirConditioning,
  TbMessageCircleUser,
  TbPhotoHexagon,
} from "react-icons/tb";
import { Button } from "../ui/button";
import RoomTable from "./RoomTable";

export default function PropertyDetails() {
  return (
    <section>
      <SubHeader />
      <Property />
      <Features />
      <Availability />
      <RoomTable />
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
export function Availability() {
  return (
    <section>
      <div className="flex gap-5 text-lg font-semibold">
        <p>Availability</p>
      </div>
      <div className="border border-[#007DD0] rounded-lg mt-2 p-5 flex justify-between items-center">
        <div className="flex flex-col justify-start gap-2">
          <p>Check-in</p>
          <div className="flex justify-start items-center gap-2 bg-slate-300 px-4 py-3 rounded-full">
            <p className="bg-[#007DD0] p-2 rounded-full text-white">
              <SlCalender />
            </p>
            <input type="date" className="bg-slate-300" />
          </div>
        </div>
        <div className="flex flex-col justify-start gap-2">
          <p>Check-out</p>
          <div className="flex justify-start items-center gap-2 bg-slate-300 px-4 py-3 rounded-full">
            <p className="bg-[#007DD0] p-2 rounded-full text-white">
              <SlCalender />
            </p>
            <input type="date" className="bg-slate-300" />
          </div>
        </div>
        <div className="flex flex-col justify-start gap-2">
          <p>Check-in</p>
          <div className="flex justify-start items-center gap-2 bg-slate-300 px-4 py-3 rounded-full">
            <p className="bg-[#007DD0] p-2 rounded-full text-white ">
              <IoHomeOutline />
            </p>
            <p>2 Adults - 0 Children - 1 Room</p>
          </div>
        </div>
        <p className="bg-[#007DD0] text-white rounded-full p-2 px-10">Search</p>
      </div>
    </section>
  );
}
