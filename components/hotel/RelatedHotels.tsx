import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedHotels.map((hotel, index) => (
            <div key={index} className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{hotel.name}</h3>
                <p className="text-sm text-gray-600">{hotel.location}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(hotel.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{hotel.rating}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <span className="text-xl font-bold">${hotel.price}</span>
                    <span className="text-sm text-gray-600"> per night</span>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
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
