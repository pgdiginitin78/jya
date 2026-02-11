import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const TestimonialsSection = () => {

  const testimonialList = [
    {
      testimonialId: 101,
      fullName: "Asha Patil",
      programTitle: "Mindful Living Retreat",
      avatarUrl:
        "https://img.freepik.com/free-photo/portrait-happy-indian-woman-smiling_53876-146875.jpg",
      shortReview:
        "The retreat reset my priorities and restored emotional balance...",
      fullReview:
        "The mindful living retreat helped me reset emotionally and mentally. I returned home with stronger clarity, sustainability practices, wholesome food choices, and a structured morning ritual. The yogic sessions and silence periods were transformative.",
    },
    {
      testimonialId: 102,
      fullName: "Ravi Kumar",
      programTitle: "Community Barter Circle",
      avatarUrl:
        "https://img.freepik.com/free-photo/happy-bearded-man-smiling_23-2148215325.jpg",
      shortReview:
        "The barter community changed how I value exchanges, it was meaningful...",
      fullReview:
        "Being part of the community barter circle helped me trade organic vegetables for handcrafted items without involving currency. It improved relationships, built trust, and supported mindful consumption.",
    },
    {
      testimonialId: 103,
      fullName: "Sahana Mehta",
      programTitle: "Corporate Well-Being Workshop",
      avatarUrl:
        "https://img.freepik.com/free-photo/smiling-businesswoman-outdoors_23-2149291335.jpg",
      shortReview:
        "Our workplace productivity improved significantly after the training...",
      fullReview:
        "The well-being workshop helped reduce burnout, improve mindfulness in decision-making, and opened communication among teams. Leaders learned emotional clarity and stress-balancing practices.",
    },
    {
      testimonialId: 104,
      fullName: "Arjun Rao",
      programTitle: "Kitchen Sustainability Program",
      avatarUrl:
        "https://img.freepik.com/free-photo/portrait-smiling-indian-man-green-background_53876-146876.jpg",
      shortReview:
        "The sustainability program helped us make better food decisions...",
      fullReview:
        "Our household now follows zero-waste kitchen practices, composting, and mindful meal planning. Ingredient swap list and eco-lifestyle toolkit were very useful.",
    },
    {
      testimonialId: 201,
      fullName: "Dr. Nisha Kulkarni",
      programTitle: "Panchakarma Detox Experience",
      avatarUrl:
        "https://img.freepik.com/free-photo/medium-shot-smiley-woman-sitting-chair_23-2148300706.jpg",
      shortReview:
        "My chronic inflammation reduced after the detox therapies...",
      fullReview:
        "After completing the 14-day Panchakarma cleanse, my gut health improved drastically. Abhyanga, Virechana therapy and medicated steam sessions reduced inflammation, fatigue and sleeplessness. The Ayurvedic consultation was deeply insightful and customized.",
    },
    {
      testimonialId: 202,
      fullName: "Meera Shinde",
      programTitle: "Ayurvedic Food & Dosha Balancing",
      avatarUrl:
        "https://img.freepik.com/free-photo/portrait-indian-young-woman-enjoying-weekend_23-2148370453.jpg",
      shortReview:
        "I finally understood what foods suit my lifestyle and body type...",
      fullReview:
        "The dosha analysis was very accurate. I have transitioned to sattvic meals, warm digestive spices, herbal tea, and mindful eating windows. Seasonal meal charts provided were highly practical.",
    },
    {
      testimonialId: 203,
      fullName: "Rahul Deshmukh",
      programTitle: "Ayurvedic Wellness Coaching",
      avatarUrl:
        "https://img.freepik.com/free-photo/smiling-young-indian-businessman_496169-102.jpg",
      shortReview: "My weight dropped naturally without aggressive dieting...",
      fullReview:
        "With guidance on circadian eating, yoga for metabolism and Ayurvedic herbs, I lost 7 kg without restrictive dieting. Evening stress eating habit reduced through breath-work practices.",
    },
    {
      testimonialId: 204,
      fullName: "Priya Dandekar",
      programTitle: "Herbal Healing Consultation",
      avatarUrl:
        "https://img.freepik.com/free-photo/smiling-female-lifestyle_23-2149242860.jpg",
      shortReview:
        "Herbal supplements helped regulate my hormonal imbalance...",
      fullReview:
        "I was guided through a therapeutic combination of Shatavari, Brahmi and gut cleansing herbs. I noticed reduced bloating, stable menstrual cycles, and improvement in mood fluctuations.",
    },
    {
      testimonialId: 205,
      fullName: "Manoj Pillai",
      programTitle: "Therapeutic Ayurvedic Massage Therapy",
      avatarUrl:
        "https://img.freepik.com/free-photo/happy-man-outdoor-having-coffee_23-2148536809.jpg",
      shortReview: "Lower back pain eased after consistent oil therapy...",
      fullReview:
        "The medicated warm oil sessions reduced stiffness and improved spinal mobility. Kati-basti treatment sessions were extremely effective. Follow-up yoga stretches are now part of my routine.",
    },
    {
      testimonialId: 206,
      fullName: "Sneha Kamat",
      programTitle: "Yoga-Therapy for Stress Management",
      avatarUrl:
        "https://img.freepik.com/free-photo/happy-young-indian-woman-posing_53876-142692.jpg",
      shortReview:
        "Daily anxiety reduced and sleep improved after guided practice...",
      fullReview:
        "Customized yoga-therapy sessions including pranayama, chanting and guided relaxation helped my emotional stability, mental focus and sleep cycle. Evening anxiety episodes reduced within 3 weeks.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonialList.length / cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, totalSlides]);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    document.body.style.overflow = "auto";
  };

  // Get visible testimonials
  const visibleTestimonials = testimonialList.slice(
    currentIndex * cardsPerView,
    currentIndex * cardsPerView + cardsPerView,
  );

  return (
    <>
      <div className="max-w-[95rem] mx-auto">
        <section className="py-3 ">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl text-[#25381f] w-full font-bold tracking-wide">
              Testimonials
            </h2>
            <div className="flex justify-end items-center space-x-2 pr-2">
              <button
                onClick={handlePrev}
                className=" bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <ArrowBackIosIcon
                  sx={{
                    fontSize: 18,
                    color: "#374151",
                    marginLeft: "4px",
                  }}
                />
              </button>
              <button
                onClick={handleNext}
                className=" bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <NavigateNextIcon
                  sx={{
                    fontSize: 24,
                    color: "#374151",
                  }}
                />
              </button>
            </div>
          </div>

          <div className="testimonialsSwiper fadeUp mt-3">
            <div className="swiper-wrapper">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] py-4">
                {visibleTestimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.testimonialId}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="testimonial-card bg-white rounded-lg border cursor-pointer hover:shadow-xl transition-all p-6"
                    onClick={() => openModal(testimonial)}
                  >
                    <p className="text-[#263d21] leading-relaxed">
                      {testimonial.shortReview}
                    </p>
                    <button className="text-blue-600 underline text-sm mt-2">
                      Read more
                    </button>

                    <div className="flex items-center gap-3 mt-5">
                      <img
                        src={testimonial.avatarUrl}
                        alt="testimonial avatar"
                        className="w-12 h-12 rounded-full object-cover"
                         loading="lazy"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.fullName}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {testimonial.programTitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-2 pb-4 w-full">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#25381f] w-8"
                      : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <AnimatePresence>
          {selectedTestimonial && (
            <motion.div
              id="testimonialModal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="fadeUp bg-white max-w-md w-[90%] rounded-xl p-6 relative shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-3 right-4 h-8 w-8 rounded-full bg-red-100 border border-red-600 flex items-center justify-center text-red-600 font-bold text-xl leading-none hover:bg-red-200 transition-colors"
                >
                  ×
                </button>

                <div id="modalContent">
                  <img
                    src={selectedTestimonial.avatarUrl}
                    alt="testimonial avatar"
                    className="w-16 h-16 mx-auto rounded-full mb-3 object-cover"
                     loading="lazy"
                  />
                  <h3 className="text-lg text-center font-semibold">
                    {selectedTestimonial.fullName}
                  </h3>
                  <p className="text-sm text-center text-gray-500">
                    {selectedTestimonial.programTitle}
                  </p>
                  <p className="text-[#263d21] text-sm mt-4 leading-relaxed">
                    {selectedTestimonial.fullReview}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default TestimonialsSection;
