"use client";

import AboutProperty from "@/components/hotel/AboutProperty";
import ExploreArea from "@/components/hotel/ExploreArea";
import Footer from "@/components/hotel/Footer";
import GuestReviews from "@/components/hotel/GuestReviews";
import Header from "@/components/hotel/Header";
import ImageGallery from "@/components/hotel/ImageGallery";
import Policies from "@/components/hotel/Policies";
import PropertyDetails from "@/components/hotel/PropertyDetails";
import RelatedHotels from "@/components/hotel/RelatedHotels";
import Breadcrumb from "@/components/seo/Breadcrumb";
import LocalBusinessData, {
  elAurassiHotelData,
} from "@/components/seo/LocalBusinessData";
import { Button } from "@/components/ui/button";
import {
  Car,
  Coffee,
  Dumbbell,
  Star,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
import { useState } from "react";

const hotelImages = [
  "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
  "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
  "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
  "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg",
  "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
  "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg",
  "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
  "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg",
  "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg",
];

const amenities = [
  { icon: Wifi, name: "Free WiFi" },
  { icon: Car, name: "Parking" },
  { icon: Dumbbell, name: "Fitness Center" },
  { icon: Coffee, name: "Restaurant" },
  { icon: Utensils, name: "Room Service" },
  { icon: Waves, name: "Swimming Pool" },
];

const roomTypes = [
  {
    id: 1,
    name: "Standard Room",
    size: "25 m²",
    guests: 2,
    beds: "1 Queen bed",
    price: 112,
    amenities: ["Free WiFi", "Air conditioning", "Bathroom"],
    availability: "Only 4 rooms left",
  },
  {
    id: 2,
    name: "Deluxe Room",
    size: "35 m²",
    guests: 2,
    beds: "1 King bed",
    price: 162,
    amenities: ["Free WiFi", "Air conditioning", "Balcony", "Mini bar"],
    availability: "Breakfast included",
  },
  {
    id: 3,
    name: "Suite",
    size: "55 m²",
    guests: 4,
    beds: "1 King bed + 1 Sofa bed",
    price: 242,
    amenities: ["Free WiFi", "Air conditioning", "Living area", "Kitchenette"],
    availability: "Breakfast included",
  },
];

const reviews = [
  {
    name: "Sophie M.",
    location: "France",
    rating: 5,
    comment:
      "Breathtaking Views and Luxury Comfort! The hotel exceeded all expectations with stunning ocean views and impeccable service.",
    date: "Oct 15, 2024",
  },
  {
    name: "Youssef H.",
    location: "Morocco",
    rating: 5,
    comment:
      "Exceptional Stay with Excellent Amenities! Perfect location, amazing staff, and beautiful facilities. Highly recommended!",
    date: "Oct 12, 2024",
  },
];

// SEO-optimized reviews for ReviewSection component
const seoReviews = [
  {
    id: "1",
    author: {
      name: "Sophie M.",
      location: "France",
    },
    rating: 5,
    title: "Breathtaking Views and Luxury Comfort",
    content:
      "The hotel exceeded all expectations with stunning ocean views and impeccable service.",
    date: "2024-10-15",
    verified: true,
  },
  {
    id: "2",
    author: {
      name: "Youssef H.",
      location: "Morocco",
    },
    rating: 5,
    title: "Exceptional Stay with Excellent Amenities",
    content:
      "Perfect location, amazing staff, and beautiful facilities. Highly recommended!",
    date: "2024-10-12",
    verified: true,
  },
  {
    id: "3",
    author: {
      name: "Ahmed K.",
      location: "Algeria",
    },
    rating: 4,
    title: "Great Business Hotel",
    content:
      "Perfect for business travelers. Clean rooms, good WiFi, and excellent conference facilities.",
    date: "2024-10-10",
    verified: true,
  },
];

const relatedHotels = [
  {
    name: "Sofitel Algiers Hamma Garden",
    location: "Algiers",
    rating: 4.8,
    price: 299,
    image: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg",
  },
  {
    name: "Sheraton Club des Pins Resort",
    location: "Algiers",
    rating: 4.6,
    price: 249,
    image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
  },
  {
    name: "Hilton Alger",
    location: "Algiers",
    rating: 4.7,
    price: 189,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
  {
    name: "Sheraton Club des Pins Resort",
    location: "Algiers",
    rating: 4.6,
    price: 249,
    image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
  },
  {
    name: "Hilton Alger",
    location: "Algiers",
    rating: 4.7,
    price: 189,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
  {
    name: "Hilton Alger",
    location: "Algiers",
    rating: 4.7,
    price: 189,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
  {
    name: "Hilton Alger",
    location: "Algiers",
    rating: 4.7,
    price: 189,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
  {
    name: "Hilton Alger",
    location: "Algiers",
    rating: 4.7,
    price: 189,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [children, setChildren] = useState("0");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* SEO Structured Data */}
      <LocalBusinessData {...elAurassiHotelData} />

      <div className="mx-auto px-4 sm:px-6 lg:px-24 py-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: "Hotels", href: "/hotels" },
            { label: "El Aurassi Hotel" },
          ]}
        />

        <div>
          {/* Main Content */}
          <div className="">
            {/* Hotel Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-5">
                    El Aurassi Hotel - Luxury Accommodation in Algiers
                  </h1>
                  <p className="text-gray-600 flex items-center mt-1">
                    Luxurious modern rooms with panoramic views of the
                    Mediterranean Sea in the heart of Algiers, Algeria
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Star className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    Share
                  </Button>
                  <Button className="bg-[#007DD0] hover:bg-[#005f9e]">
                    Reserve
                  </Button>
                </div>
              </div>
            </div>
            <ImageGallery
              hotelImages={hotelImages}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
            <PropertyDetails />

            <AboutProperty />
            <ExploreArea />
            <GuestReviews reviews={reviews} />

            <Policies />
            <RelatedHotels relatedHotels={relatedHotels} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
