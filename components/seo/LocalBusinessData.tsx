interface LocalBusinessDataProps {
  businessName: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  phone: string;
  email?: string;
  website: string;
  openingHours: string[];
  priceRange: string;
  categories: string[];
  images: string[];
}

export default function LocalBusinessData({
  businessName,
  description,
  address,
  coordinates,
  phone,
  email,
  website,
  openingHours,
  priceRange,
  categories,
  images,
}: LocalBusinessDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: businessName,
    description: description,
    url: website,
    telephone: phone,
    email: email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    },
    openingHoursSpecification: openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(" ")[0],
      opens: hours.split(" ")[1],
      closes: hours.split(" ")[3],
    })),
    priceRange: priceRange,
    image: images,
    category: categories,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Free WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Fitness Center",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Restaurant",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Room Service",
        value: true,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.facebook.com/dayfhotels",
      "https://www.instagram.com/dayfhotels",
      "https://twitter.com/dayfhotels",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

// Predefined data for El Aurassi Hotel
export const elAurassiHotelData = {
  businessName: "El Aurassi Hotel",
  description:
    "Luxurious modern rooms with panoramic views of the Mediterranean Sea in Algiers, Algeria",
  address: {
    street: "Boulevard des Martyrs",
    city: "Algiers",
    state: "Algiers Province",
    postalCode: "16000",
    country: "DZ",
  },
  coordinates: {
    latitude: 36.7538,
    longitude: 3.0588,
  },
  phone: "+213-21-23-45-67",
  email: "info@elaurassi.dayf.com",
  website: "https://dayf-hotel-booking.com",
  openingHours: [
    "Monday 00:00-23:59",
    "Tuesday 00:00-23:59",
    "Wednesday 00:00-23:59",
    "Thursday 00:00-23:59",
    "Friday 00:00-23:59",
    "Saturday 00:00-23:59",
    "Sunday 00:00-23:59",
  ],
  priceRange: "$$$",
  categories: ["Hotel", "Luxury Hotel", "Business Hotel", "Resort"],
  images: [
    "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
  ],
};
