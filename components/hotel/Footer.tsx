import { Separator } from "@/components/ui/separator";
import { Phone, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">DAYS</div>
            <p className="text-blue-200 text-sm">
              Discover comfort and style with our affordable and elegant
              accommodation options worldwide.
            </p>
            <div className="flex space-x-4 mt-4">
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
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
              <div className="flex items-center space-x-2 bg-blue-800 rounded-lg p-2">
                <Shield className="w-6 h-6" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-blue-800 rounded-lg p-2">
                <Shield className="w-6 h-6" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-blue-800" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <div>123 Hotel St, Nice City, Country</div>
          <div>© 2024. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
