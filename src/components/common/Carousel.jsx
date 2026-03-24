import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Carousel = ({
  items = [],
  renderItem,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  autoPlay = true,
  autoPlayInterval = 3000,
  showArrows = true,
  showDots = true,
  className = "",
  containerClassName = "",
  arrowClassName = "bg-white/80 hover:bg-white text-gray-800 shadow-lg",
  dotActiveClassName = "w-6 bg-green-700",
  dotInactiveClassName = "w-1.5 bg-green-200",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewCount, setViewCount] = useState(itemsPerView.desktop);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateViewCount = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1024) setViewCount(itemsPerView.desktop);
    else if (width >= 768) setViewCount(itemsPerView.tablet);
    else setViewCount(itemsPerView.mobile);
  }, [itemsPerView]);

  useEffect(() => {
    updateViewCount();
    window.addEventListener("resize", updateViewCount);
    return () => window.removeEventListener("resize", updateViewCount);
  }, [updateViewCount]);

  const totalPages = Math.ceil(items.length / viewCount);

  const next = useCallback(() => {
    if (isAnimating || totalPages <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalPages]);

  const prev = useCallback(() => {
    if (isAnimating || totalPages <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalPages]);

  useEffect(() => {
    if (autoPlay && !isPaused && totalPages > 1) {
      const interval = setInterval(next, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, isPaused, next, autoPlayInterval, totalPages]);

  // Reset index if items or viewCount changes and currentIndex is out of bounds
  useEffect(() => {
    if (currentIndex >= totalPages && totalPages > 0) {
      setCurrentIndex(totalPages - 1);
    }
  }, [items, viewCount, totalPages, currentIndex]);

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {showArrows && totalPages > 1 && (
        <>
          <button
            onClick={prev}
            disabled={isAnimating}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 transition-all duration-300 disabled:opacity-50 ${arrowClassName}`}
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            disabled={isAnimating}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 transition-all duration-300 disabled:opacity-50 ${arrowClassName}`}
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </>
      )}

      <div className={`overflow-hidden w-full ${containerClassName}`}>
        <motion.div
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="flex"
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="w-full flex-shrink-0 grid gap-4 p-2 overflow-hidden"
              style={{
                gridTemplateColumns: `repeat(${viewCount}, minmax(0, 1fr))`,
              }}
            >
              {items
                .slice(pageIndex * viewCount, (pageIndex + 1) * viewCount)
                .map((item, itemIndex) => (
                  <div key={item.id || itemIndex} className="h-full">
                    {renderItem(item)}
                  </div>
                ))}
            </div>
          ))}
        </motion.div>
      </div>

      {showDots && totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(dotIndex);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                currentIndex === dotIndex ? dotActiveClassName : dotInactiveClassName
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
