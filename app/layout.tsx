import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAYF - El Aurassi Hotel | Luxury Hotel Booking in Algiers",
  description:
    "Book your luxury stay at El Aurassi Hotel in Algiers. Enjoy panoramic Mediterranean Sea views, world-class amenities, and exceptional service. Best rates guaranteed with free cancellation.",
  keywords: [
    "El Aurassi Hotel",
    "hotel booking Algiers",
    "luxury hotel Algeria",
    "Mediterranean Sea view hotel",
    "hotel Algiers",
    "DAYF hotel booking",
    "luxury accommodation Algeria",
    "hotel reservation Algiers",
    "5-star hotel Algeria",
    "business hotel Algiers",
  ],
  authors: [{ name: "DAYF Hotel Booking" }],
  creator: "DAYF Hotel Booking",
  publisher: "DAYF Hotel Booking",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dayf-hotel-booking.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      fr: "/fr",
      ar: "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dayf-hotel-booking.com",
    siteName: "DAYF Hotel Booking",
    title: "DAYF - El Aurassi Hotel | Luxury Hotel Booking in Algiers",
    description:
      "Book your luxury stay at El Aurassi Hotel in Algiers. Enjoy panoramic Mediterranean Sea views, world-class amenities, and exceptional service.",
    images: [
      {
        url: "/logo/DAYF-logo.svg",
        width: 1200,
        height: 630,
        alt: "El Aurassi Hotel - Luxury Hotel in Algiers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAYF - El Aurassi Hotel | Luxury Hotel Booking in Algiers",
    description:
      "Book your luxury stay at El Aurassi Hotel in Algiers. Enjoy panoramic Mediterranean Sea views, world-class amenities, and exceptional service.",
    images: ["/logo/DAYF-logo.svg"],
    creator: "@dayfhotels",
    site: "@dayfhotels",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  icons: {
    icon: "/logo/icon.png",
    shortcut: "/logo/icon.png",
    apple: "/logo/icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "El Aurassi Hotel",
              description:
                "Luxurious modern rooms with panoramic views of the Mediterranean Sea",
              url: "https://dayf-hotel-booking.com",
              telephone: "+213-21-23-45-67",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Boulevard des Martyrs",
                addressLocality: "Algiers",
                addressRegion: "Algiers Province",
                postalCode: "16000",
                addressCountry: "DZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.7538,
                longitude: 3.0588,
              },
              priceRange: "$$$",
              starRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
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
              ],
              image: [
                "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg",
                "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Sophie M.",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Breathtaking Views and Luxury Comfort! The hotel exceeded all expectations with stunning ocean views and impeccable service.",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Youssef H.",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody:
                    "Exceptional Stay with Excellent Amenities! Perfect location, amazing staff, and beautiful facilities. Highly recommended!",
                },
              ],
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "112",
                availability: "https://schema.org/InStock",
                url: "https://dayf-hotel-booking.com",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
