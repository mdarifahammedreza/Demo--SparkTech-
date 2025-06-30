import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

interface GuestReviewsProps {
  reviews: Review[];
}

export default function GuestReviews({ reviews }: GuestReviewsProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>What Our Guests Say</CardTitle>
          <Button variant="outline">See All</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{review.date}</span>
              </div>
              <h4 className="font-semibold">{review.comment.split("!")[0]}!</h4>
              <p className="text-gray-700 text-sm">
                {review.comment.split("!")[1]}
              </p>
              <div className="flex items-center space-x-2">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="text-xs">
                    {review.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-600">
                  {review.name}, {review.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
