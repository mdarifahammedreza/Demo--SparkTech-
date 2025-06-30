import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

interface RelatedHotel {
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
}

interface RelatedHotelsProps {
  relatedHotels: RelatedHotel[];
}

export default function RelatedHotels({ relatedHotels }: RelatedHotelsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>You may also like</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedHotels.map((hotel, index) => (
            <div key={index} className="space-y-3">
              {/* Image container */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Hotel Info */}
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">{hotel.name}</h3>
                <p className="text-sm text-gray-600">{hotel.location}</p>

                {/* Star Rating */}
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(hotel.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{hotel.rating}</span>
                </div>

                {/* Price + Book */}
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <span className="text-xl font-bold">${hotel.price}</span>
                    <span className="text-sm text-gray-600"> / night</span>
                  </div>
                  <Button size="sm" className="bg-[#007DD0] hover:bg-[#005f9e]">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
