import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Amenity {
  icon: React.ElementType;
  name: string;
}

interface AmenitiesListProps {
  amenities: Amenity[];
}

export default function AmenitiesList({ amenities }: AmenitiesListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Amenities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-2">
              <amenity.icon className="w-5 h-5 text-blue-600" />
              <span className="text-sm">{amenity.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
