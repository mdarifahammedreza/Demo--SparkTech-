import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Users } from "lucide-react";

interface RoomType {
  id: number;
  name: string;
  size: string;
  guests: number;
  beds: string;
  price: number;
  amenities: string[];
  availability: string;
}

interface RoomAvailabilityProps {
  roomTypes: RoomType[];
}

export default function RoomAvailability({ roomTypes }: RoomAvailabilityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Availability</CardTitle>
        <div className="flex items-center space-x-4 mt-4">
          <div className="flex items-center space-x-2">
            <CalendarDays className="w-4 h-4" />
            <span className="text-sm">Mon 25 June 2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarDays className="w-4 h-4" />
            <span className="text-sm">Sat 29 June 2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">2 Adults • 0 Children • 1 Room</span>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {roomTypes.map((room) => (
            <div
              key={room.id}
              className="border rounded-lg p-4 hover:border-blue-300 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div>
                  <h3 className="font-semibold">{room.name}</h3>
                  <p className="text-sm text-gray-600">{room.size}</p>
                  <p className="text-sm text-gray-600">{room.beds}</p>
                </div>
                <div className="space-y-1">
                  {room.amenities.map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-sm text-green-600 font-medium">
                    {room.availability}
                  </p>
                  <p className="text-sm text-gray-600">Free cancellation</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">${room.price}</div>
                  <Button className="mt-2 bg-blue-600 hover:bg-blue-700">
                    Select room
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
