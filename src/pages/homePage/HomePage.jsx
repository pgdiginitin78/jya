import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaStethoscope } from "react-icons/fa";
import ManishaSuryawanshiImg from "../../asset/aboutMore/founders/manishaSuryawanshi.png";
import ConsciousLivingIcon from "../../asset/aboutPage/mission/ConsciousLiving.png";
import EcosystemIcon from "../../asset/aboutPage/mission/Ecosystem.png";
import LearningIcon from "../../asset/aboutPage/mission/Learning.png";
import WellnessIcon from "../../asset/aboutPage/mission/Wellness.png";
import collectivelearningIcon from "../../asset/aboutPage/ourVision/CollectiveLearning.png";
import enrichedlifeIcon from "../../asset/aboutPage/ourVision/EnrichedLife.png";
import innerstrengthIcon from "../../asset/aboutPage/ourVision/InnerStrength.png";
import naturalwisdomIcon from "../../asset/aboutPage/ourVision/naturalwisdom.png";
import SustainablesystemsIcon from "../../asset/aboutPage/ourVision/SustainableSystems.png";
import thrivingecosystemsIcon from "../../asset/aboutPage/ourVision/ThrivingEcosystems.png";
import BodyIcon from "../../asset/aboutPage/philosophy/Body.png";
import CommunityIcon from "../../asset/aboutPage/philosophy/Community.png";
import MindIcon from "../../asset/aboutPage/philosophy/Mind.png";
import NatureIcon from "../../asset/aboutPage/philosophy/Nature.png";
import DailyRitualImg from "../../asset/blogs/Daily Rituals.png";
import panchakaramaImg from "../../asset/blogs/panchakarama.png";
import yogaclassImg from "../../asset/blogs/yogaclass.jpg";
import corporateMindfulnessWorkshopsImg from "../../asset/communityProgram/Corporate Mindfulness Workshops.png";
import guidedForestTherapyWalkImg from "../../asset/communityProgram/Guided Forest Therapy Walk.png";
import outDoorLeavingImg from "../../asset/communityProgram/Out Door Leaving.png";
import sisnorToursImg from "../../asset/communityProgram/Sisnor Tours.png";
import swagramDarshanImg from "../../asset/communityProgram/swagramDarshan.png";
import weekendDigitalDetoxCampImg from "../../asset/communityProgram/Weekend Digital Detox Camp.png";
import massageTherapyImg from "../../asset/gallary-stories/massagetherapy.png";
import morningYogaImg from "../../asset/gallary-stories/morningyoga.jpg";
import SattvicFoodImg from "../../asset/gallary-stories/SattvicFood.jpg";
import TurmericImg from "../../asset/gallary-stories/Turmeric.webp";
import culturistHealerImg from "../../asset/learningcourses/CulturistHealer.png";
import ingeniousLifestyleImg from "../../asset/learningcourses/IngeniousLifestyle.png";
import inventionWisdomImg from "../../asset/learningcourses/InventionWisdom.png";
import learningCourseImg from "../../asset/learningcourses/LearningCourse.png";
import rootHealerImg from "../../asset/learningcourses/rootHealer.jpg";
import therapistImg from "../../asset/learningcourses/Therapist.png";
import welfareHomeExpertImg from "../../asset/learningcourses/WelfareHomeExpert.png";
import FoodImg from "../../asset/newherosection/food.jpg";
import hairSpaImg from "../../asset/newherosection/hairspa.jpg";
import headMassageImg from "../../asset/newherosection/headmassage.jpg";
import headMassagesImg from "../../asset/newherosection/headmassages.jpg";
import meditationImg from "../../asset/newherosection/meditation.jpg";
import TrackingImg from "../../asset/newherosection/tracking.png";
import YogaImg from "../../asset/newherosection/yoga.jpg";
import barterExchangeImg from "../../asset/ourServices/barterExchange.jpg";
import communityLivingImg from "../../asset/ourServices/communityLiving.jpg";
import ecoAgroTourismImg from "../../asset/ourServices/EcoAgroTourism.jpg";
import learningProgramImg from "../../asset/ourServices/learningProgram.jpg";
import wellnessAndRetreatImg from "../../asset/ourServices/wellness&Retreat.jpg";
import wellnessImg from "../../asset/testimonals/wellness.jpg";
import EventCalendar from "../eventCalander/EventCalender";
import TestimonialsSection from "./TestimonialsSection";
import BookAppointment from "../appointementBookingForm/BookAppointment";

export default function HomePage() {
  const [typedLineIndex, setTypedLineIndex] = useState(0);
  const [typedCharIndex, setTypedCharIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(2);
  const [aboutSectionActiveIndex, setAboutSectionActiveIndex] = useState(0);
  const [aboutSectionPaused, setAboutSectionPaused] = useState(false);
  const [ourServicesSectionStartIndex, setOurServicesSectionStartIndex] =
    useState(0);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStories, setModalStories] = useState([]);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [galleryItemsPerView, setGalleryItemsPerView] = useState(3);
  const [isGalleryAutoPlaying, setIsGalleryAutoPlaying] = useState(true);
  const [isGalleryAnimating, setIsGalleryAnimating] = useState(false);
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [openBookAppointmentModal, setOpenBookAppointmentModal] =
    useState(false);

  const containerRef = useRef(null);

  const articleList = [
    {
      id: 1,
      title: "Ayurvedic Daily Rituals for Long Vitality",
      description:
        "Dinacharya routines to improve digestion, sleep, glow, immunity & emotional clarity.",
      image: DailyRitualImg,
      buttonText: "Read Insights →",
    },
    {
      id: 2,
      title: "Podcast: Seeds of Wellness",
      description:
        "Healing conversations with practitioners about emotional resilience & balanced living.",
      image: wellnessImg,
      buttonText: "Listen Episode →",
    },
    {
      id: 3,
      title: "What is Panchakarma Actually Healing?",
      description:
        "Deep explanation of Vamanam, Virechanam, Basti & Nasya procedures & benefits.",
      image: panchakaramaImg,
      buttonText: "Explore Process →",
    },
    {
      id: 4,
      title: "Yoga for Nervous System Reset",
      description:
        "Breathwork routines for reducing cortisol spikes, anxiety & improving sleep.",
      image: yogaclassImg,
      buttonText: "Learn Practices →",
    },
    {
      id: 5,
      title: "Gut Healing Herbs & Seasonal Diet",
      description:
        "Understanding CCF tea, Triphala, buttermilk blends, and fermented grains.",
      image:
        "https://img.freepik.com/free-photo/ayurvedic-medicine-ingredients_23-2149374180.jpg",
      buttonText: "View Herbs →",
    },
  ];

  const teamSectionMembersList = useMemo(
    () => [
      {
        name: "Dr. Kiran Suryavanshi",
        role: "Head, MD — Vision & clinical oversight",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      },
      {
        name: "Dr. Manisha Suryavanshi",
        role: "Co-founder — Community & learning",
        image: ManishaSuryawanshiImg,
      },
      {
        name: "Guest Experts",
        role: "Advisors in ecology, Ayurveda & education",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      },
    ],
    [],
  );

  const communityProgramSectionEventList = useMemo(
    () => [
      {
        icon: swagramDarshanImg,
        title: "Swagram Darshan",
        desc: "Reconnect with mindful practices & nourishing food in nature.",
        buttons: ["Register", "Details"],
      },
      {
        icon: corporateMindfulnessWorkshopsImg,
        title: "Corporate Mindfulness Workshops",
        desc: "Boost clarity, focus & collaboration with mindful work practices.",
        buttons: ["Register"],
      },
      {
        icon: sisnorToursImg,
        title: "Sisnor Tours",
        desc: "Join our local eco-initiative to restore green cover.",
        buttons: ["Register (Free)"],
      },
      {
        icon: weekendDigitalDetoxCampImg,
        title: "Weekend Digital Detox Camp",
        desc: "Unplug from screens and reconnect with nature & yourself.",
        buttons: ["Register", "Details"],
      },
      {
        icon: outDoorLeavingImg,
        title: "Out Door Leaving",
        desc: "A deep calming night under the moon for introspection.",
        buttons: ["Join"],
      },
      {
        icon: guidedForestTherapyWalkImg,
        title: "Guided Forest Therapy Walk",
        desc: "Slow, mindful walking practice to reconnect with your senses.",
        buttons: ["Register"],
      },
    ],
    [],
  );

  const learningCoursesSectionList = useMemo(
    () => [
      {
        title: "Root Healer",
        image: rootHealerImg,
      },
      {
        title: "Therapist",
        image: therapistImg,
      },
      {
        title: "Culturist Healer",
        image: culturistHealerImg,
      },
      {
        title: "Welfare Home Expert",
        image: welfareHomeExpertImg,
      },
      {
        title: "Invention Wisdom",
        image: inventionWisdomImg,
      },
      {
        title: "Ingenious Lifestyle",
        image: ingeniousLifestyleImg,
      },
    ],
    [],
  );

  const ourServicesSectionList = useMemo(
    () => [
      {
        title: "Wellness & Retreats",
        img: wellnessAndRetreatImg,
        description: "Healing retreats, therapy sessions & wellness camps.",
        points: [
          "Mindfulness & Meditation",
          "Corporate Wellbeing",
          "Detox & Body Healing",
        ],
        buttonText: "Book Retreat",
        bgClass: "bg-[#FFF3E6]",
      },
      {
        title: "Barter Marketplace",
        img: barterExchangeImg,
        description: "Trade products or skills with zero money exchange.",
        points: ["Goods Exchange", "Skill Swap", "Community Support"],
        buttonText: "Start Bartering",
        bgClass: "bg-[#E4F7FF]",
      },
      {
        title: "Eco / Agro Tourism",
        img: ecoAgroTourismImg,
        description: "Village stays, farming activities, forest exploration.",
        points: ["Farm Stay", "Nature Trails", "Village Culture"],
        buttonText: "Plan Stay",
        bgClass: "bg-[#E8FFE7]",
      },
      {
        title: "Community Living",
        img: communityLivingImg,
        description: "Live as a community with shared learning and growth.",
        points: [
          "Collaborative Lifestyle",
          "Skill Sharing",
          "Supportive Living",
        ],
        buttonText: "Join Community",
        bgClass: "bg-[#FFE8F3]",
      },
      {
        title: "Learning Programs",
        img: learningProgramImg,
        description: "Workshops, training & skill development activities.",
        points: [
          "Farming Training",
          "Wellness Skills",
          "Craft & Lifestyle Learning",
        ],
        buttonText: "Start Learning",
        bgClass: "bg-[#FFFADA]",
      },
    ],
    [],
  );

  const aboutSectionSlides = useMemo(
    () => [
      {
        id: "philosophy",
        label: "Our Philosophy",
        badge: "Mind • Body • Nature • Community",
        description:
          "A holistic approach that harmonises the inner world with the outer environment, nurturing every dimension of life.",
        nodes: [
          {
            icon: MindIcon,
            title: "Mind",
            text: "Cultivating awareness, mindfulness, emotional balance, and purpose.",
            gradient: "from-purple-50 via-white to-purple-100/60",
            border: "border-purple-100",
          },
          {
            icon: BodyIcon,
            title: "Body",
            text: "Nurturing physical health through natural living, right nutrition, movement, and healing.",
            gradient: "from-blue-50 via-white to-blue-100/60",
            border: "border-blue-100",
          },
          {
            icon: NatureIcon,
            title: "Nature",
            text: "Living in sync with our environment by adopting sustainable practices that nourish the planet.",
            gradient: "from-emerald-50 via-white to-emerald-100/60",
            border: "border-emerald-100",
          },
          {
            icon: CommunityIcon,
            title: "Community",
            text: "Building meaningful connections, promoting shared learning, and growing together.",
            gradient: "from-amber-50 via-white to-amber-100/60",
            border: "border-amber-100",
          },
        ],
      },
      {
        id: "vision",
        label: "Our Vision",
        badge: "A regenerative future",
        description:
          "Creating Sustainable & Self-Sufficient Humans for Generations",
        nodes: [
          {
            icon: naturalwisdomIcon,
            title: "Natural Wisdom",
            text: "Reviving natural wisdom and blending it seamlessly with modern living.",
            gradient: "from-emerald-50 via-white to-emerald-100/60",
            border: "border-emerald-100",
          },
          {
            icon: SustainablesystemsIcon,
            title: "Sustainable Systems",
            text: "Encouraging sustainable living systems that protect and empower future generations.",
            gradient: "from-teal-50 via-white to-teal-100/60",
            border: "border-teal-100",
          },
          {
            icon: innerstrengthIcon,
            title: "Inner Strength",
            text: "Cultivating inner resilience, self-reliance, and conscious decision-making.",
            gradient: "from-blue-50 via-white to-blue-100/60",
            border: "border-blue-100",
          },
          {
            icon: thrivingecosystemsIcon,
            title: "Thriving Ecosystems",
            text: "Creating environments where individuals, communities, and nature evolve together.",
            gradient: "from-purple-50 via-white to-purple-100/60",
            border: "border-purple-100",
          },
          {
            icon: enrichedlifeIcon,
            title: "Enriched Life",
            text: "Our aim is not just to extend life, but to enrich it—for today and generations to come.",
            gradient: "from-yellow-50 via-white to-yellow-100/60",
            border: "border-yellow-100",
          },
          {
            icon: collectivelearningIcon,
            title: "Collective Learning",
            text: "Learning and growing together as a circle of conscious individuals.",
            gradient: "from-sky-50 via-white to-sky-100/60",
            border: "border-sky-100",
          },
        ],
      },
      {
        id: "mission",
        label: "Our Mission",
        badge: "Wellness • Learning • Ecosystem • Conscious Living",
        description:
          "To build a living, breathing ecosystem of wellness, learning, and sustainability that people can experience and belong to.",
        nodes: [
          {
            icon: WellnessIcon,
            title: "Wellness",
            text: "Offering holistic healing programs and retreats that rejuvenate mind, body, and energy.",
            gradient: "from-rose-50 via-white to-rose-100/60",
            border: "border-rose-100",
          },
          {
            icon: LearningIcon,
            title: "Learning",
            text: "Sharing practical skills—from organic farming to holistic therapies—for sustainable livelihoods.",
            gradient: "from-amber-50 via-white to-amber-100/60",
            border: "border-amber-100",
          },
          {
            icon: EcosystemIcon,
            title: "Ecosystem",
            text: "Fostering a self-sustaining environment through eco-tourism, barter services, and community initiatives.",
            gradient: "from-emerald-50 via-white to-emerald-100/60",
            border: "border-emerald-100",
          },
          {
            icon: ConsciousLivingIcon,
            title: "Conscious Living",
            text: "Guiding people toward mindful choices that honor themselves, others, and the planet.",
            gradient: "from-indigo-50 via-white to-indigo-100/60",
            border: "border-indigo-100",
          },
        ],
      },
    ],
    [],
  );

  const typingLines = useMemo(
    () => ["Nurturing 100 Years Of", "Effective Living."],
    [],
  );

  const slides = useMemo(
    () => [
      { id: 1, src: YogaImg, alt: "Yoga" },
      { id: 2, src: FoodImg, alt: "Food" },
      { id: 3, src: TrackingImg, alt: "Tracking" },
      { id: 4, src: meditationImg, alt: "Meditation" },
      { id: 5, src: headMassageImg, alt: "Head Massage" },
      { id: 6, src: hairSpaImg, alt: "Hair Spa" },
      { id: 7, src: headMassagesImg, alt: "Massage" },
    ],
    [],
  );

  useEffect(() => {
    if (typedLineIndex >= typingLines.length) return;

    const currentLine = typingLines[typedLineIndex];

    const t = setTimeout(
      () => {
        if (typedCharIndex <= currentLine.length) {
          setTypedCharIndex((p) => p + 1);
        } else {
          setTypedLineIndex((p) => p + 1);
          setTypedCharIndex(0);
        }
      },
      typedCharIndex <= currentLine.length ? 65 : 400,
    );

    return () => clearTimeout(t);
  }, [typedCharIndex, typedLineIndex, typingLines]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const typedText = useMemo(() => {
    const before = typingLines.slice(0, typedLineIndex).join("\n");
    const current = typingLines[typedLineIndex] || "";
    const currentTyped = current.substring(0, typedCharIndex);

    return before ? `${before}\n${currentTyped}` : currentTyped;
  }, [typedLineIndex, typedCharIndex, typingLines]);

  const getOffset = (index) => {
    const total = slides.length;
    let offset = index - activeIndex;

    if (offset < -2) offset += total;
    if (offset > 2) offset -= total;

    return offset;
  };

  const getSlideClasses = (offset) => {
    const base =
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500";

    if (offset === 0) {
      return `${base} w-[180px] h-[240px] sm:w-[220px] sm:h-[280px] md:w-[260px] md:h-[320px] lg:w-[300px] lg:h-[360px] 2xl:w-[400px] 2xl:h-[540px] z-30`;
    }

    if (offset === -1 || offset === 1) {
      return `${base} w-[140px] h-[200px] sm:w-[170px] sm:h-[230px] md:w-[200px] md:h-[260px] lg:w-[230px] lg:h-[290px] 2xl:w-[330px] 2xl:h-[480px] z-20 opacity-90`;
    }

    if (offset === -2 || offset === 2) {
      return `${base} w-[100px] h-[160px] sm:w-[120px] sm:h-[180px] md:w-[150px] md:h-[210px] lg:w-[180px] lg:h-[240px] 2xl:w-[280px] 2xl:h-[440px] z-10 opacity-60`;
    }

    return "hidden";
  };

  const getSlideTransform = (offset) => {
    if (offset === 0) return "translate(-50%, -50%) scale(1)";
    if (offset === -1) return "translate(-110%, -50%) scale(0.92)";
    if (offset === 1) return "translate(10%, -50%) scale(0.92)";
    if (offset === -2) return "translate(-170%, -50%) scale(0.82)";
    if (offset === 2) return "translate(70%, -50%) scale(0.82)";
    return "translate(-50%, -50%) scale(0.7)";
  };

  // about jya

  const handleAboutSectionNext = () => {
    setAboutSectionActiveIndex(
      (prev) => (prev + 1) % aboutSectionSlides.length,
    );
  };

  const handleAboutSectionPrev = () => {
    setAboutSectionActiveIndex(
      (prev) =>
        (prev - 1 + aboutSectionSlides.length) % aboutSectionSlides.length,
    );
  };

  useEffect(() => {
    if (aboutSectionPaused) return;

    const aboutSectionInterval = setInterval(() => {
      handleAboutSectionNext();
    }, 8000);

    return () => clearInterval(aboutSectionInterval);
  }, [aboutSectionPaused, aboutSectionSlides.length]);

  const aboutSectionActiveSlide = aboutSectionSlides[aboutSectionActiveIndex];

  // our services

  const handleOurServicesSectionNext = () => {
    setOurServicesSectionStartIndex((prev) => {
      const nextIndex = prev + 3;
      return nextIndex >= ourServicesSectionList.length ? 0 : nextIndex;
    });
  };

  const handleOurServicesSectionPrev = () => {
    setOurServicesSectionStartIndex((prev) => {
      const nextIndex = prev - 3;
      return nextIndex < 0
        ? Math.max(ourServicesSectionList.length - 3, 0)
        : nextIndex;
    });
  };

  const ourServicesSectionVisibleServices = ourServicesSectionList.slice(
    ourServicesSectionStartIndex,
    ourServicesSectionStartIndex + 3,
  );

  // gallary section

  const filters = [
    { id: "all", label: "All Practices" },
    { id: "herbs", label: "Herbs & Spices" },
    { id: "yoga", label: "Yoga & Meditation" },
    { id: "wellness", label: "Wellness & Healing" },
    { id: "lifestyle", label: "Lifestyle & Diet" },
  ];

  const stories = [
    {
      id: 1,
      category: "herbs",
      title: "The Power of Turmeric",
      excerpt: "Golden spice for immunity and healing",
      image: TurmericImg,
      author: "Dr. Priya Sharma",
      date: "Dec 5, 2024",
      content:
        "Turmeric has been used in Ayurveda for thousands of years as a powerful anti-inflammatory agent...",
    },
    {
      id: 2,
      category: "yoga",
      title: "Morning Yoga Rituals",
      excerpt: "Start your day with ancient practices",
      image: morningYogaImg,
      author: "Yogi Arjun Patel",
      date: "Dec 3, 2024",
      content:
        "The ancient practice of Surya Namaskar (Sun Salutation) energizes the body...",
    },
    {
      id: 3,
      category: "wellness",
      title: "Ayurvedic Massage Therapy",
      excerpt: "Abhyanga for body and soul",
      image: massageTherapyImg,
      author: "Maya Desai",
      date: "Nov 30, 2024",
      content:
        "Abhyanga, the traditional Ayurvedic oil massage, is a cornerstone of preventive healthcare...",
    },
    {
      id: 4,
      category: "herbs",
      title: "Ashwagandha Benefits",
      excerpt: "Ancient adaptogen for modern stress",
      image:
        "https://assets.clevelandclinic.org/transform/8fe65f4e-04aa-4f24-81eb-d01daf7b6b77/Ashwagandha-winter-cherry-1703497855",
      author: "Dr. Rajesh Kumar",
      date: "Nov 28, 2024",
      content:
        'Ashwagandha, known as the "strength of the stallion," is one of the most revered herbs...',
    },
    {
      id: 5,
      category: "lifestyle",
      title: "Ayurvedic Daily Routine",
      excerpt: "Dinacharya for balanced living",
      image:
        "https://assets.clevelandclinic.org/transform/LargeFeatureImage/2d536049-b17c-4b88-b1e3-85f78f7d9fea/Ayurveda-173877738-770x533-1_jpg",
      author: "Sanjana Reddy",
      date: "Nov 25, 2024",
      content:
        "Dinacharya, the Ayurvedic daily routine, synchronizes your body with natural circadian rhythm...",
    },
    {
      id: 6,
      category: "wellness",
      title: "Herbal Tea Rituals",
      excerpt: "Healing brews from nature",
      image:
        "https://tastythriftytimely.com/wp-content/uploads/2021/09/Turmeric-Latte-4.jpg",
      author: "Kavita Joshi",
      date: "Nov 22, 2024",
      content:
        "Ayurvedic herbal teas are carefully crafted blends designed to balance the doshas...",
    },
    {
      id: 7,
      category: "yoga",
      title: "Pranayama Breathing",
      excerpt: "Master the life force through breath",
      image:
        "https://plus.unsplash.com/premium_photo-1661476140414-616180169219?q=60",
      author: "Guru Vikram Singh",
      date: "Nov 20, 2024",
      content:
        "Pranayama, the science of breath control, is a fundamental pillar of yoga...",
    },
    {
      id: 8,
      category: "lifestyle",
      title: "Sattvic Food Philosophy",
      excerpt: "Eating for clarity and purity",
      image: SattvicFoodImg,
      author: "Chef Ananya Verma",
      date: "Nov 18, 2024",
      content:
        "Sattvic foods are pure, fresh, and naturally nourishing ingredients that promote clarity...",
    },
    {
      id: 9,
      category: "herbs",
      title: "Holy Basil - Tulsi",
      excerpt: "The queen of herbs in Ayurveda",
      image:
        "https://i.pinimg.com/1200x/d8/b6/70/d8b670d33c4476f11c6f4dd41ec9d3b9.jpg",
      author: "Dr. Meera Iyer",
      date: "Nov 15, 2024",
      content:
        "Tulsi (Holy Basil) is revered as a sacred plant in Ayurveda, known for healing properties...",
    },
    {
      id: 10,
      category: "wellness",
      title: "Ayurvedic Face Care",
      excerpt: "Natural beauty from within",
      image:
        "https://static.wixstatic.com/media/ed3c94_96a0f9c6d0a34e378952b6c79462fe6b~mv2.jpg",
      author: "Lakshmi Nair",
      date: "Nov 12, 2024",
      content:
        "Ayurvedic skincare focuses on natural ingredients and holistic approaches...",
    },
    {
      id: 11,
      category: "yoga",
      title: "Meditation for Inner Peace",
      excerpt: "Dhyana practice for mindfulness",
      image:
        "https://i.pinimg.com/736x/64/14/26/641426ef75aa9f3b03d3218774329eeb.jpg",
      author: "Swami Anand",
      date: "Nov 10, 2024",
      content:
        "Meditation or Dhyana is the practice of focusing the mind to achieve clarity...",
    },
    {
      id: 12,
      category: "lifestyle",
      title: "Ayurvedic Sleep Practices",
      excerpt: "Restore with quality rest",
      image:
        "https://i.pinimg.com/736x/a1/98/23/a19823f5f4952ddeb6df9f1cbf8b275d.jpg",
      author: "Dr. Arun Menon",
      date: "Nov 8, 2024",
      content:
        "Quality sleep is essential in Ayurveda for maintaining health and vitality...",
    },
  ];

  const filteredStories =
    currentFilter === "all"
      ? stories
      : stories.filter((s) => s.category === currentFilter);

  useEffect(() => {
    const updateGalleryItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setGalleryItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setGalleryItemsPerView(2);
      } else {
        setGalleryItemsPerView(1);
      }
    };

    updateGalleryItemsPerView();
    window.addEventListener("resize", updateGalleryItemsPerView);
    return () =>
      window.removeEventListener("resize", updateGalleryItemsPerView);
  }, []);

  useEffect(() => {
    setCurrentGalleryIndex(0);
  }, [currentFilter]);

  useEffect(() => {
    if (!isGalleryAutoPlaying || filteredStories.length <= galleryItemsPerView)
      return;
    const galleryAutoPlayInterval = setInterval(() => {
      handleGalleryNext();
    }, 3000);

    return () => clearInterval(galleryAutoPlayInterval);
  }, [
    currentGalleryIndex,
    isGalleryAutoPlaying,
    filteredStories.length,
    galleryItemsPerView,
  ]);

  const totalGallerySlides = Math.ceil(
    filteredStories.length / galleryItemsPerView,
  );

  const handleGalleryPrevious = () => {
    if (isGalleryAnimating) return;
    setIsGalleryAnimating(true);
    setCurrentGalleryIndex((prev) => {
      if (prev === 0) {
        return totalGallerySlides - 1;
      }
      return prev - 1;
    });
    setTimeout(() => setIsGalleryAnimating(false), 500);
  };

  const handleGalleryNext = () => {
    if (isGalleryAnimating) return;
    setIsGalleryAnimating(true);
    setCurrentGalleryIndex((prev) => {
      if (prev === totalGallerySlides - 1) {
        return 0;
      }
      return prev + 1;
    });
    setTimeout(() => setIsGalleryAnimating(false), 500);
  };

  const handleGalleryDotClick = (galleryIndex) => {
    if (isGalleryAnimating) return;
    setIsGalleryAnimating(true);
    setCurrentGalleryIndex(galleryIndex);
    setTimeout(() => setIsGalleryAnimating(false), 500);
  };

  //Blogs

  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setCardsToShow(3);
      } else if (width >= 1024) {
        setCardsToShow(3);
      } else if (width >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const maxIndex = articleList.length - cardsToShow;

  const scrollToIndex = (i) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth = container.children[0].offsetWidth;
    const gap = 24;

    container.scrollTo({
      left: (cardWidth + gap) * i,
      behavior: "smooth",
    });

    setIndex(i);
  };

  const next = () => {
    const newIndex = index >= maxIndex ? 0 : index + 1;
    scrollToIndex(newIndex);
  };

  const prev = () => {
    const newIndex = index <= 0 ? maxIndex : index - 1;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [index, maxIndex]);

  const openBlog = (id) => {
    window.location.href = `/Blogs.html?blog=${id}`;
  };

  return (
    <>
      <div className="pt-16 px-4 md:px-10 2xl:px-20">
        <div className="w-full py-8 md:py-10 2xl:py-24">
          <section className="w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-center">
              <div className="space-y-6  z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="font-extrabold leading-tight"
                >
                  <span className="block text-[36px] md:text-[44px] tracking-tight text-[#111111] whitespace-pre-line">
                    {typedText}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.35 }}
                  className="text-[18px] md:text-[20px] text-[#1a1d1a] max-w-xl leading-relaxed"
                >
                  An initiative to integrate ancient wisdom with modern living
                  through wellness, nature, community and conscious lifestyle.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.55 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:flex items-center lg:flex-wrap gap-3 pt-2 z-50"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="px-[18px] py-2 rounded-xl font-semibold text-[#263d21] bg-[#dcfce7] border-2 border-[#263d21] hover:bg-[#263d21] hover:text-white transition-colors duration-300 whitespace-nowrap"
                  >
                    Start Self-Discovery Game
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="px-[18px] py-2 rounded-xl font-semibold text-white bg-[#263d21] hover:bg-[#1b3318] transition-colors duration-300 whitespace-nowrap"
                  >
                    Become a JYA Member
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() => {
                      setOpenBookAppointmentModal(true);
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative px-6 py-2.5 rounded-xl font-semibold text-[#263d21] overflow-visible mt-3 lg:mt-0"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-xl p-[1.5px] bg-gradient-to-r from-[#263d21] via-green-600 to-[#263d21]"
                      whileHover={{
                        backgroundPosition: ["0% 50%", "100% 50%"],
                        boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)",
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                      style={{ backgroundSize: "200% 100%" }}
                    >
                      <div className="h-full w-full rounded-[10px] bg-green-100"></div>
                    </motion.div>
                    <span className="relative flex items-center justify-center gap-2 whitespace-nowrap z-10 animate-pulse">
                      <motion.span
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaStethoscope className="text-lg" />
                      </motion.span>
                      Consult Doctor
                    </span>
                  </motion.button>
                </motion.div>
              </div>
              <div className="flex justify-center lg:justify-end items-center z-0 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-12">
                <div className="relative h-[390px] 2xl:h-[480px] w-full  overflow-visible">
                  {slides.map((slide, index) => {
                    const offset = getOffset(index);
                    return (
                      <motion.div
                        key={slide.id}
                        onClick={() => setActiveIndex(index)}
                        className={getSlideClasses(offset)}
                        animate={{
                          transform: getSlideTransform(offset),
                          opacity:
                            offset === 0
                              ? 1
                              : offset === -1 || offset === 1
                                ? 0.92
                                : 0.6,
                        }}
                        transition={{ duration: 0.55, ease: "easeInOut" }}
                      >
                        <img
                          loading="lazy"
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />

                        <div
                          className={`absolute inset-0 ${
                            offset === 0 ? "bg-black/0" : "bg-black/15"
                          } transition-all duration-500`}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <section id="about" className="py-2 pt-5 px-6 lg:px-10">
          <div className="max-w-[95rem] mx-auto">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider text-[#263d21] text-left sm:text-left flex items-center gap-2">
                <span>About JYA</span>
              </h2>

              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={handleAboutSectionPrev}
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-50 transition"
                  aria-label="Previous"
                >
                  <svg
                    className="w-10 h-5 text-neutral-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  {aboutSectionSlides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setAboutSectionActiveIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === aboutSectionActiveIndex
                          ? "w-7 bg-emerald-600"
                          : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                      }`}
                      aria-label={`Go to ${slide.label}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleAboutSectionNext}
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-50 transition"
                  aria-label="Next"
                >
                  <svg
                    className="w-10 h-5 text-neutral-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className="rounded-3xl bg-white/70 backdrop-blur-sm border h-[480px] border-neutral-200/70 shadow-[0_18px_60px_rgba(15,23,42,0.08)] overflow-hidden"
              onMouseEnter={() => setAboutSectionPaused(true)}
              onMouseLeave={() => setAboutSectionPaused(false)}
            >
              <div className="p-6 md:p-8">
                <AnimatePresence>
                  <motion.div
                    key={aboutSectionActiveSlide.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.45 }}
                  >
                    <div className="grid lg:grid-cols-[340px,1fr] items-start gap-6">
                      <div className="space-y-5">
                        <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-100">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                          {aboutSectionActiveSlide.badge}
                        </div>

                        <div>
                          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
                            {aboutSectionActiveSlide.label}
                          </h2>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {aboutSectionActiveSlide.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
                        {aboutSectionActiveSlide.nodes.map((node, idx) => (
                          <motion.div
                            key={node.title}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.07 }}
                            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${node.gradient} p-5 border ${node.border}`}
                          >
                            <div className="flex items-start space-x-3">
                              <div
                                className={`w-10 h-10 flex items-center justify-center rounded-full border ${node.border} flex-shrink-0 bg-white/60`}
                              >
                                <img
                                  src={node.icon}
                                  alt={node.title}
                                  loading="lazy"
                                  className="w-6 h-6 object-contain"
                                  draggable={false}
                                />
                              </div>

                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-semibold text-neutral-900 mb-1">
                                  {node.title}
                                </h3>
                                <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                                  {node.text}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="services" className="py-4 px-4 md:px-10">
        <section id="ourServicesSection" className="">
          <div className="max-w-[95rem] mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-[#263d21] tracking-wide">
                Our Services
              </h2>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleOurServicesSectionPrev}
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-50 transition"
                  aria-label="Previous"
                >
                  <svg
                    className="w-10 h-5 text-neutral-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleOurServicesSectionNext}
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-50 transition"
                  aria-label="Next"
                >
                  <svg
                    className="w-10 h-5 text-neutral-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {ourServicesSectionVisibleServices.map((service, index) => (
                  <motion.div
                    key={`${service.title}-${ourServicesSectionStartIndex}`}
                    initial={{ opacity: 0, y: 25, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.45, delay: index * 0.12 }}
                    className={`rounded-2xl border border-gray-200 shadow-md hover:shadow-xl overflow-hidden transition ${service.bgClass}`}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={service.img}
                        loading="lazy"
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-110 transition duration-700"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60" />
                      <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                        {service.title}
                      </h3>
                    </div>

                    <div className="p-5 flex flex-col h-full">
                      <p className="text-sm text-[#263d21] mb-3 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="text-sm text-[#263d21] space-y-1 mb-4">
                        {service.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2">
                            <span className="mt-[2px] text-green-700">✔</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex justify-end">
                        <button className="bg-[#263d21] rounded px-3 py-1 text-white">
                          {service.buttonText}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </section>
      <section id="services" className="py-4 px-4 md:px-10">
        <section className=" py-12 max-w-[95rem] mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl  overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-white to-green-50">
              <div className="h-56 md:h-full relative overflow-hidden">
                <img
                  src={learningCourseImg}
                  loading="lazy"
                  alt="Learning & Courses"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden" />

                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white md:hidden drop-shadow-lg">
                  Learning & Courses
                </h3>
              </div>

              <div className="p-6 col-span-2">
                <h3 className="text-2xl xl:text-3xl tracking-tight font-bold text-[#263d21] mb-3 hidden md:block group-hover:text-green-800 transition">
                  Learning & Courses
                </h3>

                <p className="text-[#263d21] text-sm mb-6 leading-relaxed group-hover:translate-x-[3px] transition duration-500">
                  Hands-on learning: Organic farming, wellness therapies, rural
                  management, and certified vocational training.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {learningCoursesSectionList.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      whileHover={{ y: -8 }}
                      className="bg-white rounded-xl overflow-hidden border border-green-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-green-300"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={item.image}
                          loading="lazy"
                          alt={item.title}
                          className="w-full h-36 object-cover bg-bottom hover:scale-110 transition duration-700"
                          draggable={false}
                        />
                      </div>

                      <div className="p-3 text-center">
                        <h4 className="font-semibold text-[#263d21]">
                          {item.title}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </section>
      </section>
      <div>
        <EventCalendar />
      </div>

      <section id="events" className="py-5 px-4 md:px-10">
        <div className="max-w-[95rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-7"
          >
            <h3 className="text-3xl md:text-3xl font-bold tracking-wider text-[#263d21]">
              Community Program
            </h3>
            <p className="text-[#263d21] mt-2 text-sm md:text-base">
              Experience wellness, mindfulness & nature-inspired programs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {communityProgramSectionEventList.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-all" />

                <div className="relative flex items-center space-x-2 mb-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    loading="lazy"
                    className="w-20 h-20 object-contain"
                    draggable={false}
                  />

                  <h4 className="text-base font-semibold text-gray-900 group-hover:text-[#263d21] transition">
                    {item.title}
                  </h4>
                </div>

                <p className="relative text-[#263d21] text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="relative mt-5 flex gap-3 flex-wrap">
                  {item.buttons.map((btn) => (
                    <Button
                      key={btn}
                      variant="contained"
                      //   onClick={() =>
                      //     handleCommunityProgramSectionAction(item.title, btn)
                      //   }
                      sx={{
                        backgroundColor: "#263d21",
                        borderRadius: "10px",
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "13px",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        "&:hover": { backgroundColor: "#1c2a18" },
                      }}
                    >
                      {btn}
                    </Button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-7 px-4 md:px-10 w-full">
        <div className="max-w-[95rem] mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-bold text-[#263d21] mb-4"
          >
            Guided by Masters, Experts & Nature Advocates
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {teamSectionMembersList.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-lg p-4 shadow text-center border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-28 h-28 rounded-full mx-auto object-cover"
                  draggable={false}
                />

                <h4 className="mt-3 font-semibold">{member.name}</h4>

                <p className="text-xs text-[#263d21]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 bg-gradient-to-b from-amber-50/30 to-green-50/30">
        <div className="w-full mx-auto max-w-[95rem]">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 via-green-700 to-emerald-700 bg-clip-text text-transparent">
              Gallery
            </h2>
            <p className="text-green-800/80 text-lg max-w-2xl mx-auto">
              Discover ancient wisdom and natural healing through authentic
              Ayurvedic practices
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setCurrentFilter(f.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  currentFilter === f.id
                    ? "bg-green-700 text-white shadow-lg shadow-green-200 scale-105"
                    : "bg-white/80 text-green-800 border-2 border-green-100 hover:border-green-300 hover:bg-green-50/50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div
            className="relative px-12"
            onMouseEnter={() => setIsGalleryAutoPlaying(false)}
            onMouseLeave={() => setIsGalleryAutoPlaying(true)}
          >
            {filteredStories.length > galleryItemsPerView && (
              <>
                <button
                  onClick={handleGalleryPrevious}
                  disabled={isGalleryAnimating}
                  className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-amber-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous gallery slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleGalleryNext}
                  disabled={isGalleryAnimating}
                  className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-amber-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next gallery slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="">
              <div className="w-full overflow-hidden">
                <motion.div
                  animate={{ x: `-${currentGalleryIndex * 100}%` }}
                  transition={{
                    type: "tween",
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="flex"
                >
                  {Array.from({ length: totalGallerySlides }).map(
                    (_, pageIdx) => (
                      <div key={pageIdx} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-3">
                          {filteredStories
                            .slice(
                              pageIdx * galleryItemsPerView,
                              (pageIdx + 1) * galleryItemsPerView,
                            )
                            .map((story) => (
                              <motion.div
                                key={story.id}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                className="w-full"
                              >
                                <div
                                  onClick={() => {
                                    setModalStories(story);
                                    setModalOpen(true);
                                  }}
                                  className="cursor-pointer rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-300 h-full border border-green-100/50"
                                >
                                  <div className="relative overflow-hidden h-64 bg-gradient-to-br from-amber-100 to-green-100">
                                    <img
                                      src={story.image}
                                      loading="lazy"
                                      alt={story.title}
                                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-green-800 shadow-md">
                                      {
                                        filters.find(
                                          (f) => f.id === story.category,
                                        )?.label
                                      }
                                    </div>
                                  </div>

                                  <div className="p-6">
                                    <h3 className="text-xl font-bold text-green-900 mb-2 line-clamp-2">
                                      {story.title}
                                    </h3>
                                    <p className="text-green-700/80 mb-4 text-sm line-clamp-2">
                                      {story.excerpt}
                                    </p>

                                    <div className="flex justify-between items-center text-sm text-green-600/70 pt-4 border-t border-green-100">
                                      <span className="font-medium">
                                        {story.author}
                                      </span>
                                      <span>{story.date}</span>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                        </div>
                      </div>
                    ),
                  )}
                </motion.div>
              </div>
            </div>

            {filteredStories.length > galleryItemsPerView && (
              <div className="flex justify-center gap-2 mt-3">
                {Array.from({ length: totalGallerySlides }).map(
                  (_, galleryDotIndex) => (
                    <button
                      key={galleryDotIndex}
                      onClick={() => handleGalleryDotClick(galleryDotIndex)}
                      disabled={isGalleryAnimating}
                      className={`transition-all duration-300 rounded-full disabled:cursor-not-allowed ${
                        currentGalleryIndex === galleryDotIndex
                          ? "w-8 h-2.5 bg-green-700"
                          : "w-2.5 h-2.5 bg-green-300 hover:bg-green-400"
                      }`}
                      aria-label={`Go to gallery slide ${galleryDotIndex + 1}`}
                    />
                  ),
                )}
              </div>
            )}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-16">
              <p className="text-green-700 text-lg">
                No stories found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
      {modalOpen && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto">
            {modalStories && (
              <>
                <div className="w-full rounded-xl overflow-hidden mb-4">
                  <img
                    src={modalStories.image}
                    alt="Story"
                    loading="lazy"
                    className="w-full h-auto max-h-96 object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold text-[#263d21] my-2">
                  {modalStories.title}
                </h2>

                <p className="text-gray-500 mb-4">
                  {modalStories.author} •&nbsp;
                  {modalStories.date}
                </p>

                <p>{modalStories.content}</p>
              </>
            )}
          </Box>
        </Modal>
      )}

      <section
        id="articleSection"
        className="py-5 md:py-6 overflow-hidden max-w-[95rem] mx-auto"
      >
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between mb-6 items-center gap-6 w-full">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl font-semibold tracking-tight flex items-center gap-3 text-[#1c3016]"
          >
            Resources — Blog & Podcast
          </motion.h3>

          <a
            href="#"
            className="text-[#1c3b15] text-sm tracking-wide font-semibold underline-offset-4 hover:underline hover:scale-105 transition"
          >
            View All →
          </a>
        </div>

        <div className="relative px-8 md:px-8">
          <button
            onClick={prev}
            disabled={index === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20
          w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            disabled={index === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20
               w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div
            ref={containerRef}
            className="flex gap-4 md:gap-6 overflow-hidden py-4"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {articleList.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
              rounded-3xl bg-white border border-gray-200 shadow-sm group cursor-pointer
              hover:shadow-xl transition-all overflow-hidden"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="rounded-t-3xl h-48 md:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-base md:text-lg font-bold text-[#21381a] line-clamp-1">
                    {item.title}
                  </h2>

                  <p className="text-[#263d21] text-sm mt-2 line-clamp-2">
                    {item.description}
                  </p>

                  <Button
                    variant="text"
                    sx={{
                      color: "#153310",
                      textTransform: "none",
                      fontWeight: 600,
                      padding: 0,
                      marginTop: "8px",
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {item.buttonText}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-3">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-amber-700 w-8"
                    : "bg-amber-400 hover:bg-[#1c3016]/50 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {openBookAppointmentModal && (
        <BookAppointment
          open={openBookAppointmentModal}
          handleClose={() => {
            setOpenBookAppointmentModal(false);
          }}
        />
      )}
    </>
  );
}
