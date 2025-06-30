import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Policies() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Policies</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Check-in</h4>
          <p className="text-sm text-gray-600">Available 24 hours</p>
          <p className="text-sm text-gray-600">
            You&apos;ll need to let the property know in advance what time
            you&apos;ll arrive.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Check-out</h4>
          <p className="text-sm text-gray-600">Available 24 hours</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Cancellation/prepayment</h4>
          <p className="text-sm text-gray-600">
            Cancellation and prepayment policies vary according to accommodation
            type.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Children and beds</h4>
          <p className="text-sm text-gray-600">
            Children 12 years and above will be charged as adults at this
            property.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">No age restriction</h4>
          <p className="text-sm text-gray-600">
            There is no age requirement for check-in
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Pets</h4>
          <p className="text-sm text-gray-600">Pets are not allowed</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Cash only</h4>
          <p className="text-sm text-gray-600">
            This property only accepts cash payments
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
