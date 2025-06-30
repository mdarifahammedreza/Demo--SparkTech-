import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "hotel";
  hotelData?: {
    name: string;
    address: string;
    phone: string;
    rating: number;
    priceRange: string;
    amenities: string[];
  };
}

export default function SEOHead({
  title = "DAYF - El Aurassi Hotel | Luxury Hotel Booking in Algiers",
  description = "Book your luxury stay at El Aurassi Hotel in Algiers. Enjoy panoramic Mediterranean Sea views, world-class amenities, and exceptional service.",
  keywords = [
    "El Aurassi Hotel",
    "hotel booking Algiers",
    "luxury hotel Algeria",
    "Mediterranean Sea view hotel",
    "hotel Algiers",
    "DAYF hotel booking",
  ],
  image = "/logo/DAYF-logo.svg",
  url = "https://dayf-hotel-booking.com",
  type = "website",
  hotelData,
}: SEOHeadProps) {
  const baseUrl = "https://dayf-hotel-booking.com";
  const fullUrl = `${baseUrl}${url}`;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content="DAYF Hotel Booking" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="DAYF Hotel Booking" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@dayfhotels" />
      <meta name="twitter:creator" content="@dayfhotels" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#007DD0" />
      <meta name="msapplication-TileColor" content="#007DD0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="DAYF Hotels" />

      {/* Hotel-specific structured data */}
      {hotelData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: hotelData.name,
              description: description,
              url: fullUrl,
              telephone: hotelData.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Algiers",
                addressRegion: "Algiers Province",
                addressCountry: "DZ",
              },
              priceRange: hotelData.priceRange,
              starRating: {
                "@type": "Rating",
                ratingValue: hotelData.rating.toString(),
                bestRating: "5",
              },
              amenityFeature: hotelData.amenities.map((amenity) => ({
                "@type": "LocationFeatureSpecification",
                name: amenity,
                value: true,
              })),
              image: fullImageUrl,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      )}

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://images.pexels.com" />

      {/* Favicon and app icons */}
      <link rel="icon" href="/logo/icon.png" />
      <link rel="apple-touch-icon" href="/logo/icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}
