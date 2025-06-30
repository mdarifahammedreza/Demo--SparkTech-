"use client";
import { FaRegUser } from "react-icons/fa";
import { IoIosWifi, IoMdResize, IoMdTv } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";

import { useState } from "react";

type RoomType = {
  name: string;
  beds: string;
  size: string;
  price: number;
  features: string[];
  guests: number;
  availability: number;
};

const roomData: RoomType[] = [
  {
    name: "Twin Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    price: 282,
    features: ["Room", "Air condition", "Bathroom", "TV", "WIFI"],
    guests: 2,
    availability: 4,
  },
  {
    name: "Deluxe Double Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    price: 282,
    features: ["Room", "Air condition", "Bathroom", "TV", "WIFI"],
    guests: 2,
    availability: 4,
  },
  {
    name: "Deluxe Double Room",
    beds: "2 single beds",
    size: "1,200 sq ft",
    price: 282,
    features: ["Room", "Air condition", "Bathroom", "TV", "WIFI"],
    guests: 2,
    availability: 4,
  },
];

export default function RoomTable() {
  const [selectedRooms, setSelectedRooms] = useState<number[]>(
    new Array(roomData.length).fill(0)
  );

  const handleSelectChange = (index: number, value: number) => {
    const updated = [...selectedRooms];
    updated[index] = value;
    setSelectedRooms(updated);
  };

  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-[#007DD0] text-white text-left text-lg">
            <th className="p-4">Room type</th>
            <th className="p-4">Number of guests</th>
            <th className="p-4">Price for 1 week</th>
            <th className="p-4">Your choices</th>
            <th className="p-4">Select rooms</th>
            <th className="p-4">Your choices</th>
          </tr>
        </thead>
        <tbody>
          {roomData.map((room, index) => (
            <tr key={index} className="border-t p-3">
              {/* Room type and features */}
              <td className=" p-4">
                <div className="font-medium text-base text-[#007DD0]">
                  {room.name}
                </div>
                <div className="text-xs text-gray-600">{room.beds}</div>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-2">
                  <p className="flex gap-1 justify-center items-center">
                    {" "}
                    <span>
                      <IoHomeOutline />
                    </span>
                    <span> {room.features[0]}</span>
                  </p>
                  <p className="flex gap-1 justify-center items-center">
                    <span>
                      <IoMdResize />
                    </span>
                    <span>{room.size}</span>
                  </p>
                  <p className="flex gap-1 justify-center items-center">
                    <span>
                      <TbAirConditioning />
                    </span>
                    <span>{room.features[1]}</span>
                  </p>
                  <p className="flex gap-1 justify-center items-center">
                    <span>
                      {" "}
                      <MdOutlineBathtub />
                    </span>
                    <span>{room.features[2]}</span>
                  </p>
                  <p className="flex gap-1 justify-center items-center">
                    <span>
                      <IoMdTv />
                    </span>
                    <span>{room.features[3]}</span>
                  </p>
                  <p className="flex gap-1 justify-center items-center">
                    <span>
                      <IoIosWifi />
                    </span>
                    <span>{room.features[4]}</span>
                  </p>
                </div>
              </td>

              {/* Guests */}
              <td className="p-4">
                <span className="text-xl flex gap-2">
                  <FaRegUser />
                  <FaRegUser />
                </span>
              </td>

              {/* Price */}
              <td className="p-4 font-bold text-lg">${room.price}</td>

              {/* Included */}
              <td className="p-4 text-sm">
                <div>Breakfast included</div>
                <div className="text-red-600 font-medium">
                  Only {room.availability} rooms left
                </div>
              </td>

              {/* Select rooms */}
              <td className="p-4">
                <select
                  className="border rounded-md px-3 py-1 text-sm"
                  value={selectedRooms[index]}
                  onChange={(e) =>
                    handleSelectChange(index, parseInt(e.target.value))
                  }
                >
                  {[0, 1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </td>

              {/* Reserve Button */}
              <td className="p-4">
                <button className="bg-[#007DD0] text-white px-4 py-2 rounded-full hover:bg-[#007DD0] transition">
                  Reserve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
