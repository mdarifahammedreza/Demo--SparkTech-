import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutProperty() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About this property</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed">
          El Aurassi Hotel is a luxurious 5-star resort that offers a sumptuous
          and harmonious experience tailored for both business and leisure
          travelers. With its stunning architecture and panoramic views of the
          Mediterranean Sea, our hotel provides an exceptional stay with
          world-class amenities and personalized service that exceeds
          expectations.
        </p>
      </CardContent>
    </Card>
  );
}
