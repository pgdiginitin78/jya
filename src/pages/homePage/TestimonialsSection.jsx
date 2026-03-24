import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Carousel from "../../components/common/Carousel";

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
    shortReview: "My chronic inflammation reduced after the detox therapies...",
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
    shortReview: "Herbal supplements helped regulate my hormonal imbalance...",
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

const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="max-w-[95rem] px-4 md:px-10 mx-auto">
        <section className="py-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#263d21]">
              What Our Community Says
            </h2>
          </div>

          <Carousel
            items={testimonialList}
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
            autoPlayInterval={3000}
            renderItem={(testimonial) => (
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-4 flex flex-col h-full cursor-pointer"
                onClick={() => openModal(testimonial)}
              >
                <div className="grid justify-center items-center gap-4 mt-2 pt-2 border-t border-gray-50 w-full">
                <div className="grid justify-center items-center">
                    <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.fullName}
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-green-50"
                  />
                </div>
                  <div className="grid justify-center items-center text-center w-full">
                    <h4 className="font-bold text-gray-900 leading-tight">
                      {testimonial.fullName}
                    </h4>
                    <p className="text-xs text-green-700 font-medium uppercase tracking-wider mt-1">
                      {testimonial.programTitle}
                    </p>
                  </div>
                </div>
                <p className="text-[#263d21] leading-relaxed mb-6 italic text-center">
                  {testimonial.shortReview}
                </p>
                <button className="text-green-700 font-semibold text-sm hover:underline mt-auto text-end">
                  Read Full Story →
                </button>
              </motion.div>
            )}
            arrowClassName="bg-[#263d21] text-white"
          />
        </section>

        <AnimatePresence>
          {selectedTestimonial && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white max-w-lg w-full rounded-2xl p-8 relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-4 right-4 h-10 w-10 rounded-full bg-gray-50 hover:bg-red-50 hover:text-red-500 transition-colors flex items-center justify-center font-bold text-xl"
                >
                  ✕
                </button>

                <div className="text-center">
                  <img
                    src={selectedTestimonial.avatarUrl}
                    alt={selectedTestimonial.fullName}
                    loading="lazy"
                    className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-green-50 shadow-md"
                  />
                  <h3 className="text-2xl font-bold text-[#263d21]">
                    {selectedTestimonial.fullName}
                  </h3>
                  <p className="text-green-700 font-medium italic mb-6">
                    {selectedTestimonial.programTitle}
                  </p>
                  <div className="w-12 h-1 bg-green-100 mx-auto mb-6 rounded-full" />
                  <p className="text-gray-700 text-lg leading-relaxed text-left italic">
                    “{selectedTestimonial.fullReview}”
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
