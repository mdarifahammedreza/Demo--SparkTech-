import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function ExploreArea() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Explore the Area</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Restaurants & cafes</span>
              <span className="text-gray-600">5 min walk</span>
            </div>
            <div className="flex justify-between">
              <span>Airport</span>
              <span className="text-gray-600">25 min drive</span>
            </div>
            <div className="flex justify-between">
              <span>Beaches</span>
              <span className="text-gray-600">2 min walk</span>
            </div>
            <div className="flex justify-between">
              <span>Shopping centers</span>
              <span className="text-gray-600">10 min drive</span>
            </div>
          </div>
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <MapPin className="w-8 h-8 text-gray-400" />
            <span className="ml-2 text-gray-600">Interactive Map</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
