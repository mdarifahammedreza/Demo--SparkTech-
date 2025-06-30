import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Train, Umbrella, Utensils } from "lucide-react";

export default function ExploreArea() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Explore the Area</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Side - Text Info */}
          <div className="space-y-6 col-span-3 grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Restaurants & cafes */}
            <div>
              <div className="flex items-center text-lg font-semibold mb-2 text-gray-900">
                <Utensils className="mr-2 h-5 w-5 text-gray-600" />
                Restaurants & Cafes
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>Blue Cafe</span>
                  <span>5 min walk</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Sunset Bistro</span>
                  <span>8 min walk</span>
                </div>
              </div>
            </div>

            {/* Shops & Markets */}
            <div>
              <div className="flex items-center text-lg font-semibold mb-2 text-gray-900">
                <ShoppingBag className="mr-2 h-5 w-5 text-gray-600" />
                Shops & Markets
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>Central Mall</span>
                  <span>10 min drive</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Local Market</span>
                  <span>6 min walk</span>
                </div>
              </div>
            </div>

            {/* Beaches */}
            <div>
              <div className="flex items-center text-lg font-semibold mb-2 text-gray-900">
                <Umbrella className="mr-2 h-5 w-5 text-gray-600" />
                Beaches
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>Les Dunes Beach</span>
                  <span>2 min walk</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Golden Shore</span>
                  <span>5 min drive</span>
                </div>
              </div>
            </div>

            {/* Public Transport */}
            <div>
              <div className="flex items-center text-lg font-semibold mb-2 text-gray-900">
                <Train className="mr-2 h-5 w-5 text-gray-600" />
                Public Transport
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>Riverdale Station</span>
                  <span>3 min walk</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Metro Hub</span>
                  <span>5 min walk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="relative h-72 md:h-auto min-h-[250px] bg-gray-200 rounded-lg overflow-hidden col-span-2">
            <iframe
              title="Static Map"
              src="https://maps.google.com/maps?q=48.8584,2.2945&z=14&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Optional button on map */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <button className="bg-white px-5 py-2 rounded-full text-blue-600 font-medium shadow hover:bg-gray-50 transition">
                Explore the Map
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
