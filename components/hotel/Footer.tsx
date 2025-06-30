import { Separator } from "@/components/ui/separator";
import { Phone, Shield } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#00548C] text-white py-12 mt-16">
      <div className=" mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              {" "}
              <Image
                src="logo/DAYF-logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <p className="text-blue-200 text-sm">
              Discover comfort and style with our affordable and elegant
              accommodation options worldwide.
            </p>
            <div className="flex space-x-4 mt-4">
              <div className="w-8 h-8 bg-[#174c6e] rounded-full flex items-center justify-center">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-[#174c6e] rounded-full flex items-center justify-center">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-[#174c6e] rounded-full flex items-center justify-center">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div>support@dayshotel.com</div>
              <div>Help Center</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-sm text-blue-200">
              <div>About Us</div>
              <div>Careers</div>
              <div>Press</div>
              <div>Blog</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Download Our App</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 bg-[#174c6e]rounded-lg p-2">
                <Shield className="w-6 h-6" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-[#174c6e] rounded-lg p-2">
                <Shield className="w-6 h-6" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-[#174c6e]" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <div>123 Hotel St, Nice City, Country</div>
          <div>© 2024. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
