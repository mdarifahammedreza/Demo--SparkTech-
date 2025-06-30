"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface BookingSidebarProps {
  checkIn: string;
  setCheckIn: (val: string) => void;
  checkOut: string;
  setCheckOut: (val: string) => void;
  guests: string;
  setGuests: (val: string) => void;
  children: string;
  setChildren: (val: string) => void;
}

export default function BookingSidebar({
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guests,
  setGuests,
  children,
  setChildren,
}: BookingSidebarProps) {
  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Book your stay</span>
          <div className="text-right">
            <div className="text-2xl font-bold">$86</div>
            <div className="text-sm text-gray-600">per night</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="checkin">Check-in</Label>
            <Input
              id="checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="checkout">Check-out</Label>
            <Input
              id="checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="guests">Adults</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Adult</SelectItem>
                <SelectItem value="2">2 Adults</SelectItem>
                <SelectItem value="3">3 Adults</SelectItem>
                <SelectItem value="4">4 Adults</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="children">Children</Label>
            <Select value={children} onValueChange={setChildren}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 Children</SelectItem>
                <SelectItem value="1">1 Child</SelectItem>
                <SelectItem value="2">2 Children</SelectItem>
                <SelectItem value="3">3 Children</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>$86 × 4 nights</span>
            <span>$344</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Service fee</span>
            <span>$48</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Taxes</span>
            <span>$32</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$424</span>
          </div>
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
          Reserve Now
        </Button>
        <p className="text-xs text-gray-600 text-center">
          You won&apos;t be charged yet
        </p>
      </CardContent>
    </Card>
  );
}
