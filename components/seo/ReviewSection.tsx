import { Star } from "lucide-react";

interface Review {
  id: string;
  author: {
    name: string;
    location: string;
  };
  rating: number;
  title?: string;
  content: string;
  date: string;
  verified?: boolean;
}

interface ReviewSectionProps {
  reviews: Review[];
  hotelName: string;
  averageRating: number;
  totalReviews: number;
}

export default function ReviewSection({
  reviews,
  hotelName,
  averageRating,
  totalReviews,
}: ReviewSectionProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotelName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toString(),
      reviewCount: totalReviews.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
      },
      reviewBody: review.content,
      datePublished: review.date,
      name: review.title || `${hotelName} Review`,
    })),
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Review Summary */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Guest Reviews
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="flex">{renderStars(averageRating)}</div>
            <span className="text-lg font-semibold text-gray-900">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <p className="text-gray-600">
            Based on {totalReviews} verified reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              itemScope
              itemType="https://schema.org/Review"
            >
              <meta itemProp="datePublished" content={review.date} />

              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3
                    className="font-semibold text-gray-900"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">{review.author.name}</span>
                  </h3>
                  <p className="text-sm text-gray-500">
                    {review.author.location}
                  </p>
                </div>
                {review.verified && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Verified
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex mr-2">{renderStars(review.rating)}</div>
                <div
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta
                    itemProp="ratingValue"
                    content={review.rating.toString()}
                  />
                  <meta itemProp="bestRating" content="5" />
                </div>
              </div>

              {/* Review Title */}
              {review.title && (
                <h4 className="font-medium text-gray-900 mb-2">
                  {review.title}
                </h4>
              )}

              {/* Review Content */}
              <p
                className="text-gray-700 leading-relaxed"
                itemProp="reviewBody"
              >
                {review.content}
              </p>

              {/* Review Date */}
              <div className="mt-4 text-sm text-gray-500">{review.date}</div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
