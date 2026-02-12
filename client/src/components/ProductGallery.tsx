/* Product Image Gallery Component
   - Image carousel with thumbnails
   - Click to view full size
   - Smooth transitions
*/

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative aspect-square bg-card rounded-lg overflow-hidden border-2 border-border group">
        <img
          src={images[currentIndex]}
          alt={`${productName} - תמונה ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Navigation Arrows - Only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={prevImage}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={nextImage}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Strip - Only show if more than 1 image */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <img
                src={image}
                alt={`${productName} - ממוזער ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
