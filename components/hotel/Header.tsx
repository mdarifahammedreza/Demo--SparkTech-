"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { TbMessageCircleUser } from "react-icons/tb";

export default function Header() {
  const languages = [
    { code: "US", label: "English", flag: "Image/flag/US.png" },
    { code: "France", label: "French", flag: "Image/flag/france.png" },
    { code: "Arab", label: "Arabic", flag: "Image/flag/arab.png" },
  ];
  const [selectedLang, setSelectedLang] = useState("en");

  const currentLang = languages.find((l) => l.code === selectedLang);

  return (
    <header className="bg-[#E9F6FF] ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-blue-600">
              <Image
                src="logo/DAYF-logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-500 font-semibold hover:text-blue-600 hover:underline transition-colors underline-offset-4"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-500 font-semibold hover:text-blue-600 hover:underline transition-colors underline-offset-4"
              >
                Hotels
              </a>
              <a
                href="#"
                className="text-gray-500 font-semibold hover:text-blue-600 hover:underline transition-colors underline-offset-4"
              >
                Flights
              </a>
              <a
                href="#"
                className="text-gray-500 font-semibold hover:text-blue-600 hover:underline transition-colors underline-offset-4"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-500 font-semibold hover:text-blue-600 hover:underline transition-colors underline-offset-4"
              >
                Contact Us
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Select
              defaultValue={selectedLang}
              onValueChange={(value) => setSelectedLang(value)}
            >
              <SelectTrigger className="max-w-[4.5rem] h-10 rounded-full border border-[#007DD0] justify-center items-center gap-2 text-[#007DD0] text-semibold bg-transparent">
                <BiDollarCircle />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center space-x-2">
                      <p>example</p>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              defaultValue={selectedLang}
              onValueChange={(value) => setSelectedLang(value)}
            >
              <SelectTrigger className="max-w-[4.5rem] h-10 rounded-full border border-[#007DD0] justify-center items-center gap-2 text-[#007DD0] text-semibold bg-transparent">
                {currentLang?.flag ? (
                  <Image
                    src={currentLang.flag}
                    alt={currentLang.code + " flag"}
                    width={24}
                    height={24}
                  />
                ) : (
                  <span className="text-lg">🌐</span>
                )}
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={lang.flag}
                        alt={lang.code + " flag"}
                        width={20}
                        height={20}
                      />
                      <span>{lang.code}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              size="sm"
              className="h-10 rounded-full border border-[#007DD0] justify-center items-center gap-2 text-semibold bg-transparent"
            >
              <span className="text-[#007DD0]">List your property </span>
              <span className="text-[#007DD0]">
                <MdArrowOutward />
              </span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-10 rounded-full border border-[#007DD0] justify-center items-center  text-semibold bg-white/50 "
            >
              <span className="text-[#007DD0] font-semibold">
                <TbMessageCircleUser />
              </span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-10 rounded-full border border-[#007DD0] justify-center items-center gap-2 text-semibold bg-white/50 "
            >
              <span className="text-[#007DD0] font-semibold">
                <CiUser />
              </span>
              <span className="text-[#007DD0]">sunan</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
