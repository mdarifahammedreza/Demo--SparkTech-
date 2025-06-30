"use client";

import Image from "next/image";

interface ImageGalleryProps {
  hotelImages: string[];
  selectedImage: number;
  setSelectedImage: (index: number) => void;
}

export default function ImageGallery({
  hotelImages,
  selectedImage,
  setSelectedImage,
}: ImageGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="relative h-[30rem] rounded-lg overflow-hidden grid grid-cols-4 grid-rows-2 gap-2">
        <div className="relative col-span-3 row-span-2">
          <Image
            src={hotelImages[selectedImage]}
            alt="Hotel room"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105 overflow-hidden"
            sizes="(max-width: 1024px) 100vw, 800px"
            priority
          />
        </div>
        <div className="relative">
          <Image
            src={hotelImages[selectedImage + 1]}
            alt="Hotel room"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 800px"
            priority
          />
        </div>
        <div className="relative">
          <Image
            src={hotelImages[selectedImage + 2]}
            alt="Hotel room"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 800px"
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-10 gap-2">
        {hotelImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`h-20 rounded-md overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? "border-blue-600"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`View ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
