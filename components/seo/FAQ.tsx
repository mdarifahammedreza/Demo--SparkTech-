import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
}: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              aria-expanded={openItems.includes(index)}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-semibold text-gray-900 pr-4">
                {item.question}
              </span>
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>

            {openItems.includes(index) && (
              <div id={`faq-answer-${index}`} className="px-6 pb-4 bg-gray-50">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Predefined FAQ items for hotel booking
export const hotelFAQItems: FAQItem[] = [
  {
    question: "What is the check-in and check-out time?",
    answer:
      "Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability.",
  },
  {
    question: "Do you offer free cancellation?",
    answer:
      "Yes, we offer free cancellation up to 24 hours before your scheduled arrival date. Cancellations made within 24 hours may be subject to a fee.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer:
      "Breakfast is included for Deluxe Rooms and Suites. For Standard Rooms, breakfast can be added for an additional fee of $15 per person per day.",
  },
  {
    question: "Do you have parking available?",
    answer:
      "Yes, we offer complimentary parking for all guests. The parking area is secure and monitored 24/7.",
  },
  {
    question: "Is the hotel pet-friendly?",
    answer:
      "Unfortunately, we do not allow pets at this time. We recommend contacting local pet boarding services for assistance.",
  },
  {
    question: "What amenities are available in the rooms?",
    answer:
      "All rooms include free WiFi, air conditioning, private bathroom, flat-screen TV, and daily housekeeping. Additional amenities vary by room type.",
  },
  {
    question: "How far is the hotel from the airport?",
    answer:
      "El Aurassi Hotel is approximately 20 minutes from Houari Boumediene Airport. We can arrange airport transfers for an additional fee.",
  },
  {
    question: "Do you have a swimming pool?",
    answer:
      "Yes, we have an outdoor swimming pool with panoramic views of the Mediterranean Sea. The pool is open from 7:00 AM to 10:00 PM.",
  },
];
