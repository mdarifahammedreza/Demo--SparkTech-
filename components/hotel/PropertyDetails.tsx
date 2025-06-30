import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PropertyDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Type</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">4★</div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">0000</div>
            <div className="text-sm text-gray-600">Property Type</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              1 week, 2 adults, 1 child
            </div>
            <div className="text-sm text-gray-600">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">USD 86,112</div>
            <div className="text-sm text-gray-600">Total Cost</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
