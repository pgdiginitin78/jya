import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import weddingCeremonyImg from "../../asset/galleryPage/galleryBanner/weddingceremony.jpg";
import img1 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img1.jpg";
import img2 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img2.jpg";
import img3 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img3.jpg";
import img4 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img4.jpg";
import img5 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img5.jpg";
import img6 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img6.jpg";
import img7 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img7.jpg";
import BailPolaImg1 from "../../asset/galleryPage/communityCeremony/BailPola2025/img1.jpg";
import BailPolaImg2 from "../../asset/galleryPage/communityCeremony/BailPola2025/img2.jpg";
import BailPolaImg3 from "../../asset/galleryPage/communityCeremony/BailPola2025/img3.jpg";
import BailPolaImg4 from "../../asset/galleryPage/communityCeremony/BailPola2025/img4.jpg";
import BailPolaImg5 from "../../asset/galleryPage/communityCeremony/BailPola2025/img5.jpg";
import Dasara2025Img1 from "../../asset/galleryPage/communityCeremony/Dasara2025/img1.jpg";
import Dasara2025Img2 from "../../asset/galleryPage/communityCeremony/Dasara2025/img2.jpeg";
import Dasara2025Img3 from "../../asset/galleryPage/communityCeremony/Dasara2025/img3.jpeg";
import Dasara2025Img4 from "../../asset/galleryPage/communityCeremony/Dasara2025/img4.jpg";
import Dasara2025Img5 from "../../asset/galleryPage/communityCeremony/Dasara2025/img5.jpg";
import Dasara2025Img6 from "../../asset/galleryPage/communityCeremony/Dasara2025/img6.jpg";
import Diwali2025Img1 from "../../asset/galleryPage/communityCeremony/Diwali2025/img1.jpg";
import Diwali2025Img2 from "../../asset/galleryPage/communityCeremony/Diwali2025/img2.jpg";
import Diwali2025Img3 from "../../asset/galleryPage/communityCeremony/Diwali2025/img3.jpg";
import Diwali2025Img4 from "../../asset/galleryPage/communityCeremony/Diwali2025/img4.jpg";
import Diwali2025Img5 from "../../asset/galleryPage/communityCeremony/Diwali2025/img5.jpg";
import Diwali2025Img6 from "../../asset/galleryPage/communityCeremony/Diwali2025/img6.jpg";
import Diwali2025Img7 from "../../asset/galleryPage/communityCeremony/Diwali2025/img7.jpg";
import Diwali2025Img8 from "../../asset/galleryPage/communityCeremony/Diwali2025/img8.jpg";
import GudiPadwa2025Img1 from "../../asset/galleryPage/communityCeremony/GudiPadwa2025/img1.jpg";
import GudiPadwa2025Img2 from "../../asset/galleryPage/communityCeremony/GudiPadwa2025/img2.jpg";
import GudiPadwa2025Img4 from "../../asset/galleryPage/communityCeremony/GudiPadwa2025/img4.jpg";
import GudiPadwa2025Img5 from "../../asset/galleryPage/communityCeremony/GudiPadwa2025/img5.jpg";
import GudiPadwa2025Img6 from "../../asset/galleryPage/communityCeremony/GudiPadwa2025/img6.jpg";
import GudiPadwa2025Img7 from "../../asset/galleryPage/communityCeremony/GudiPadwa2025/img7.jpg";
import GudiPadwa2025Img8 from "../../asset/galleryPage/communityCeremony/GudiPadwa2025/img8.jpg";
import WeddingImg1 from "../../asset/galleryPage/communityCeremony/Wedding/img1.jpg";
import WeddingImg2 from "../../asset/galleryPage/communityCeremony/Wedding/img2.jpg";
import WeddingImg3 from "../../asset/galleryPage/communityCeremony/Wedding/img3.jpg";
import WeddingImg4 from "../../asset/galleryPage/communityCeremony/Wedding/img4.jpg";
import warliArt from "../../asset/galleryPage/warliArt.jpg";
import wellnessretreats from "../../asset/galleryPage/galleryBanner/wellnessretreats.jpg";
import cultureevent from "../../asset/galleryPage/galleryBanner/cultureevent.jpg";
import yoga1 from "../../asset/galleryPage/communityCeremony/wellness&retreats/yoga/img1.jpg";
import yoga2 from "../../asset/galleryPage/communityCeremony/wellness&retreats/yoga/img2.jpg";
import yoga3 from "../../asset/galleryPage/communityCeremony/wellness&retreats/yoga/img3.jpeg";
import yoga4 from "../../asset/galleryPage/communityCeremony/wellness&retreats/yoga/img4.jpg";
import yoga5 from "../../asset/galleryPage/communityCeremony/wellness&retreats/yoga/img5.jpg";
import ayurveda1 from "../../asset/galleryPage/communityCeremony/wellness&retreats/ayurveda/img1.jpg";
import ayurveda2 from "../../asset/galleryPage/communityCeremony/wellness&retreats/ayurveda/img2.jpg";
import AkshaytrutiyaImg1 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img1.jpg";
import AkshaytrutiyaImg2 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img2.jpg";
import AkshaytrutiyaImg3 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img3.jpg";
import AkshaytrutiyaImg4 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img4.jpg";
import AkshaytrutiyaImg5 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img5.jpg";
import AkshaytrutiyaImg6 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img6.jpg";
import AkshaytrutiyaImg7 from "../../asset/galleryPage/communityCeremony/Akshaytrutiya/img7.jpg";
import CommonLoader from "../../components/common/commonLoader/CommonLoader";

const galleryData = [
  {
    name: "Community Ceremony",
    image: weddingCeremonyImg,
    children: [
      {
        name: "Akshaytrutiya 2024",
        images: [img1, img2, img3, img4, img5, img6, img7],
      },
      {
        name: "Bail Pola 2025",
        images: [
          BailPolaImg1,
          BailPolaImg2,
          BailPolaImg3,
          BailPolaImg4,
          BailPolaImg5,
        ],
      },
      {
        name: "Dasara 2025",
        images: [
          Dasara2025Img1,
          Dasara2025Img2,
          Dasara2025Img3,
          Dasara2025Img4,
          Dasara2025Img5,
          Dasara2025Img6,
        ],
      },
      {
        name: "Diwali 2025",
        images: [
          Diwali2025Img1,
          Diwali2025Img2,
          Diwali2025Img3,
          Diwali2025Img4,
          Diwali2025Img5,
          Diwali2025Img6,
          Diwali2025Img7,
          Diwali2025Img8,
        ],
      },
      {
        name: "Gudi Padwa 2025",
        images: [
          GudiPadwa2025Img1,
          GudiPadwa2025Img2,
          GudiPadwa2025Img4,
          GudiPadwa2025Img5,
          GudiPadwa2025Img6,
          GudiPadwa2025Img7,
          GudiPadwa2025Img8,
        ],
      },
      {
        name: "Wedding 2025",
        images: [WeddingImg1, WeddingImg2, WeddingImg3, WeddingImg4],
      },
    ],
  },
  {
    name: "Wellness Retreats",
    image: wellnessretreats,
    children: [
      {
        name: "Yoga Retreat",
        images: [yoga1, yoga2, yoga3, yoga4, yoga5],
      },
      {
        name: "Ayurveda Camp",
        images: [ayurveda1, ayurveda2],
      },
    ],
  },
  {
    name: "Cultural Events",
    image: cultureevent,
    children: [
      {
        name: "Akshaytrutiya 2024",
        images: [
          AkshaytrutiyaImg1,
          AkshaytrutiyaImg2,
          AkshaytrutiyaImg3,
          AkshaytrutiyaImg4,
          AkshaytrutiyaImg5,
          AkshaytrutiyaImg6,
          AkshaytrutiyaImg7,
        ],
      },
      {
        name: "Bail Pola 2025",
        images: [
          BailPolaImg1,
          BailPolaImg2,
          BailPolaImg3,
          BailPolaImg4,
          BailPolaImg5,
        ],
      },
      {
        name: "Dasara 2025",
        images: [
          Dasara2025Img1,
          Dasara2025Img2,
          Dasara2025Img3,
          Dasara2025Img4,
          Dasara2025Img5,
          Dasara2025Img6,
        ],
      },
      {
        name: "Diwali 2025",
        images: [
          Diwali2025Img1,
          Diwali2025Img2,
          Diwali2025Img3,
          Diwali2025Img4,
          Diwali2025Img5,
          Diwali2025Img6,
          Diwali2025Img7,
          Diwali2025Img8,
        ],
      },
      {
        name: "Gudi Padwa 2025",
        images: [
          GudiPadwa2025Img1,
          GudiPadwa2025Img2,
          GudiPadwa2025Img4,
          GudiPadwa2025Img5,
          GudiPadwa2025Img6,
          GudiPadwa2025Img7,
          GudiPadwa2025Img8,
        ],
      },
    ],
  },
];

const GalleryCard = ({ item, index, activeIndex, onClick, level }) => {
  const getPosition = () => {
    const totalItems = level === 0 ? galleryData.length : 5;
    let offset = index - activeIndex;

    if (offset > totalItems / 2) offset -= totalItems;
    if (offset < -totalItems / 2) offset += totalItems;

    if (offset === 0) return { x: 0, scale: 1, zIndex: 5, opacity: 1 };
    if (offset === -1)
      return { x: -260, scale: 0.85, zIndex: 4, opacity: 0.85 };
    if (offset === 1) return { x: 260, scale: 0.85, zIndex: 4, opacity: 0.85 };
    if (offset === -2) return { x: -440, scale: 0.7, zIndex: 3, opacity: 0.5 };
    if (offset === 2) return { x: 440, scale: 0.7, zIndex: 3, opacity: 0.5 };
    return { x: offset < 0 ? -640 : 640, scale: 0.6, zIndex: 1, opacity: 0 };
  };

  const position = getPosition();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 40;
    const y = (e.clientY - rect.top - rect.height / 2) / 40;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  let imgSrc = "";
  if (level === 0) {
    imgSrc = item.image;
  } else if (level === 1) {
    imgSrc = item.images[0];
  } else {
    imgSrc = item;
  }

  return (
    <motion.div
      initial={{ x: position.x, scale: 0.6, opacity: 0 }}
      animate={{
        x: position.x,
        scale: position.scale,
        opacity: position.opacity,
        zIndex: position.zIndex,
        y: index === activeIndex ? -18 : 0,
      }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute w-[250px] sm:w-[280px] md:w-[300px] h-[350px] sm:h-[390px] md:h-[420px] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl cursor-pointer"
      style={{ zIndex: position.zIndex }}
    >
      <motion.img
        src={imgSrc}
         loading="lazy"
        alt={item.name || ""}
        className="w-full h-full object-cover"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ duration: 0.3 }}
      />
      {item.name && (
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-5 right-4 sm:right-5 text-white text-base sm:text-lg font-semibold drop-shadow-lg">
          {item.name}
        </div>
      )}
    </motion.div>
  );
};

const PreviewModal = ({
  isOpen,
  onClose,
  currentImage,
  images,
  onImageSelect,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center z-50 p-4"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          src={currentImage}
          alt="Preview"
           loading="lazy"
          className="max-w-[90vw] sm:max-w-[80vw] max-h-[60vh] sm:max-h-[70vh] rounded-2xl mb-4 object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <div
          className="flex gap-2 sm:gap-3 overflow-x-auto max-w-[90vw] sm:max-w-[80vw] pb-2"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
               loading="lazy"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-10 sm:w-[70px] sm:h-[50px] object-cover rounded-lg cursor-pointer transition-all ${
                img === currentImage
                  ? "opacity-100 ring-2 ring-white"
                  : "opacity-50"
              }`}
              onClick={() => onImageSelect(img)}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function GalleryApp() {
  const [level, setLevel] = useState(0);
  const [index, setIndex] = useState(0);
  const [currentCommunity, setCurrentCommunity] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const intervalRef = useRef(null);

  const items = () => {
    return level === 0
      ? galleryData
      : level === 1
        ? currentCommunity.children
        : currentEvent.images;
  };

  // FIXED: Breadcrumb now shows proper navigation path
  const getBreadcrumb = () => {
    if (level === 0) return "Gallery";
    if (level === 1) return `Gallery / ${currentCommunity.name}`;
    return `Gallery / ${currentCommunity.name} / ${currentEvent.name}`;
  };

  const handleCardClick = (item) => {
    if (level === 0) {
      setLevel(1);
      setCurrentCommunity(item);
      setIndex(0);
    } else if (level === 1) {
      setLevel(2);
      setCurrentEvent(item);
      setIndex(0);
    } else {
      setPreviewImage(item);
      setPreviewOpen(true);
    }
  };

  const handleBack = () => {
    if (level === 2) {
      setLevel(1);
      setCurrentEvent(null);
      setIndex(0);
    } else if (level === 1) {
      setLevel(0);
      setCurrentCommunity(null);
      setIndex(0);
    }
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items().length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + items().length) % items().length);
  };

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % items().length);
    }, 3500);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [level, currentCommunity, currentEvent]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 200) {
        if (e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index, level]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 ">
      <div
        className="pt-[150px] md:pt-[0px] md:mt-[80px] relative min-h-screen bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(${warliArt})`,
          filter: "saturate(0.85) contrast(0.95)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/15 backdrop-blur-sm pointer-events-none z-[1]" />

        <div className="relative z-10">
          <div
            className="fixed top-[83px] md:top-6 left-1/2 md:left-4 -translate-x-1/2 md:translate-x-0 
                text-white text-xs sm:text-sm md:text-base z-10 
                bg-black/30 px-3 py-1.5 rounded-lg backdrop-blur-sm w-auto"
          >
            {getBreadcrumb()}
          </div>

          {level > 0 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleBack}
              className="fixed top-32 md:top-16 left-4 sm:left-5 
                      text-white cursor-pointer text-xs sm:text-sm md:text-base 
                      z-10 hover:scale-110 transition-transform 
                      bg-black/30 px-3 py-1.5 rounded-lg backdrop-blur-sm"
            >
              ← Back
            </motion.button>
          )}

          <button
            onClick={toggleFullscreen}
            className="fixed top-4 right-4 sm:top-5 sm:right-5 
  text-white cursor-pointer text-xl sm:text-2xl md:text-3xl 
  z-10 hover:scale-110 transition-transform"
          >
            ⛶
          </button>

          <div className="min-h-screen flex items-center justify-center relative px-4">
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 bg-white/15 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full text-2xl sm:text-3xl flex items-center justify-center hover:bg-white/25 transition-all"
            >
              ‹
            </button>

            <div
              className="relative w-full max-w-[1400px] h-[400px] sm:h-[460px] flex justify-center"
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
            >
              {items().map((item, i) => (
                <GalleryCard
                  key={i}
                  item={item}
                  index={i}
                  activeIndex={index}
                  onClick={() => handleCardClick(item)}
                  level={level}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 bg-white/15 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full text-2xl sm:text-3xl flex items-center justify-center hover:bg-white/25 transition-all"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <PreviewModal
        isOpen={previewOpen}
        onClose={() => setPreviewOpen(false)}
        currentImage={previewImage}
        images={currentEvent?.images || []}
        onImageSelect={setPreviewImage}
      />
    </div>
  );
}
