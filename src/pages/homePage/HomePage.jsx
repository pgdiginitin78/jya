import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaStethoscope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ManishaSuryawanshiImg from "../../asset/aboutMore/founders/ManishaSuryavanshi.png";
import SantoshSuryavanshi from "../../asset/aboutMore/founders/Vaidya Santosh Suryawanshi.png";
import VaishaliHolmukhe from "../../asset/aboutMore/founders/Vaishali Holmukhe.png"
import { blogData } from "../../constants/blogData";

import corporateMindfulnessWorkshopsImg from "../../asset/communityProgram/Corporate Mindfulness Workshops.png";
import guidedForestTherapyWalkImg from "../../asset/communityProgram/Guided Forest Therapy Walk.png";
import outDoorLeavingImg from "../../asset/communityProgram/Out Door Leaving.png";
import sisnorToursImg from "../../asset/communityProgram/Sisnor Tours.png";
import swagramDarshanImg from "../../asset/communityProgram/swagramDarshan.png";
import weekendDigitalDetoxCampImg from "../../asset/communityProgram/Weekend Digital Detox Camp.png";
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
import Carousel from "../../components/common/Carousel";
import BookAppointment from "../appointementBookingForm/BookAppointment";
import TestimonialsSection from "./TestimonialsSection";
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
import AshwagandhaImage from "../../asset/blogs/Ashwagandha.png";
import AyurvedicDailyRoutine from "../../asset/blogs/Ayurvedic Daily Routine.png";
import HerbalTea from "../../asset/blogs/Herbal Tea Rituals.png";
import AyurvedicMassageImg from "../../asset/blogs/Massage Therapy.png";
import MorningYogaImage from "../../asset/blogs/Morning Yoga.png";
import PranayamaBreathing from "../../asset/blogs/Pranayama Breathing.png";
import SattvicDiet from "../../asset/blogs/Sattvic Food Philosophy.png";
import TurmericImage from "../../asset/blogs/Turmeric.png";
import CancelButtonModal from "../../components/common/button/CancelButtonModal";
import CommonButton from "../../components/common/button/CommonButton";


const ayurvedaArticles = [
  {
    id: 1,
    heading: "The Power of Turmeric",
    category: "herbs",
    title:
      "The Power of Turmeric : India's Golden Gift Through the Lens of Ayurveda",
    body: 'For centuries, turmeric, or Haldi, has held a sacred place in Indian households, not merely as a spice but as a symbol of healing, purity, and balance. In Ayurveda, turmeric is revered as one of nature\'s most powerful medicinal herbs, known for its ability to restore harmony within the body. Ancient Ayurvedic texts describe turmeric as a "Kaphahara" and "Kusthaghna" herb: one that helps balance the doshas, purify the blood, improve digestion, and support radiant skin and immunity. Its warming nature stimulates Agni, the digestive fire, helping the body eliminate toxins (Ama) that are believed to be the root cause of many imbalances. This is why turmeric has traditionally been used in everything from herbal milk and healing pastes to skincare rituals and detox remedies. In Ayurveda, turmeric is not seen as a quick cure. It is viewed as a daily wellness ally that works gently and consistently to strengthen the body from within.',
    benefitsIntro: "Some of its widely celebrated Ayurvedic benefits include :",
    image: TurmericImage,
    benefits: [
      "Supporting immunity and natural healing",
      "Promoting healthy digestion and metabolism",
      "Purifying the blood and improving skin health",
      "Helping maintain joint and muscular comfort",
      "Supporting respiratory wellness",
    ],
    closing:
      "What makes turmeric truly powerful is its versatility. Whether consumed with warm milk, blended with ghee, added to meals, or applied externally, Ayurveda emphasises that turmeric works best when used mindfully and consistently. In today's fast-paced world, where wellness is often reduced to trends, turmeric reminds us of a deeper truth rooted in Ayurveda: True healing begins with balance, simplicity, and nature. The golden spice of India is a timeless tradition of holistic well-being passed down through generations.",
  },
  {
    id: 2,
    category: "yoga",
    heading: "Morning Yoga Rituals",
    title: "Morning Yoga Rituals : Learning Through Ancient Practices",
    body: "In the wisdom of ancient Indian traditions, mornings were never meant to begin in haste. They were designed to begin with awareness, stillness, and alignment of the body, mind, and breath. This is where the practice of morning yoga rituals finds its true essence. In Ayurvedic and yogic philosophy, the early hours before sunrise, known as Brahma Muhurta, are considered the most powerful time of the day. It is believed that the mind is calm, energy is pure, and the body is naturally receptive to healing and balance during these sacred hours. Morning yoga was never just exercise; it was a ritual of awakening. Ancient yogic practices focused not only on physical movement but also on creating harmony within. Gentle stretches, mindful breathing, Surya Namaskar, meditation, and grounding practices were designed to awaken life force energy (prana) and prepare the body for the day ahead. These rituals continue to hold immense relevance today because they offer something modern lifestyles often lack: presence and balance.",
    benefitsIntro: "A mindful morning yoga practice can help :",
    image: MorningYogaImage,
    benefits: [
      "Improve flexibility and circulation",
      "Support mental clarity and focus",
      "Balance energy levels naturally",
      "Calm the nervous system",
      "Enhance breath awareness and posture",
      "Create emotional steadiness throughout the day",
    ],
    closing:
      "But beyond the physical benefits, yoga teaches discipline, awareness, and connection with oneself and with nature's rhythm. Ancient traditions believed that how we begin our morning shapes the quality of our entire day. Even a few moments of conscious movement and breath can transform scattered energy into centered intention. In a world driven by speed and constant stimulation, morning yoga rituals invite us to slow down and return to simplicity. Because yoga is about alignment within and around us, and perhaps that is why these ancient practices continue to endure: they heal not just the body but also the way we live.",
  },
  {
    id: 3,
    heading: "Ayurvedic Massage Therapy",
    category: "wellness",
    title:
      "Ayurvedic Massage Therapy : The Ancient Art of Healing Through Touch",
    body: "In Ayurveda, healing is not viewed as treating symptoms alone. It is about restoring balance: physically, mentally, and energetically. Among the many healing traditions of Ayurveda, massage therapy, or Abhyanga, holds a deeply respected place. More than relaxation, Ayurvedic massage is considered a daily wellness ritual that nourishes the body, calms the mind, and supports the flow of vital energy (prana). Using warm herbal oils infused with medicinal ingredients, Ayurvedic massage works gently yet deeply on the body's energy channels, tissues, and nervous system. The oils are carefully chosen according to an individual's dosha: Vata, Pitta, or Kapha, helping bring the body back into natural harmony. Ancient Ayurvedic texts describe Abhyanga as a practice that promotes longevity, strength, restful sleep, and overall vitality. Unlike conventional massage therapies that focus primarily on muscle tension, Ayurvedic massage takes a holistic approach. It is designed to support circulation, encourage detoxification, improve energy flow, and calm the senses.",
    benefitsIntro:
      "Some of the traditional benefits associated with Ayurvedic massage include :",
    image: AyurvedicMassageImg,
    benefits: [
      "Relaxation of the body and nervous system",
      "Improved blood circulation and lymphatic flow",
      "Nourishment of the skin and tissues",
      "Relief from fatigue and stiffness",
      "Better sleep and emotional balance",
      "Support for overall well-being and vitality",
    ],
    closing:
      "One of the most beautiful aspects of Ayurvedic massage is its intention. Every movement is mindful, rhythmic, and therapeutic, creating not only physical ease but also mental stillness. Today, where stress has become a constant companion, these ancient healing therapies remind us of the importance of slowing down and reconnecting with ourselves. Ayurvedic massage is not simply about comfort; it is about care, balance, and restoration. A timeless ritual where healing begins with the power of touch.",
  },
  {
    id: 4,
    heading: "Ashwagandha",
    category: "herbs",
    title:
      "Ashwagandha : Ayurveda's Ancient Herb for Strength, Balance, and Vitality",
    body: 'In Ayurveda, Ashwagandha is often referred to as the "Strength of the Stallion" - a symbol of vitality, endurance, and resilience. Its very name comes from the Sanskrit words "Ashwa" (horse) and "Gandha" (smell), reflecting the belief that the herb imparts the strength and stamina of a horse.',
    image:AshwagandhaImage,
    sanskritVerseIntro: "An ancient Ayurvedic verse describes Ashwagandha as :",
    sanskritVerse: '"Balya Rasayana Chaiva"',
    sanskritMeaning:
      "meaning that which nourishes strength and rejuvenates the body.",
    body2:
      "For thousands of years, Ashwagandha has been treasured in Ayurvedic healing traditions as a powerful Rasayana, a rejuvenating herb believed to support longevity, energy, mental clarity, and overall wellness. In today's fast-paced world, where stress, fatigue, and imbalance have become increasingly common, Ashwagandha continues to hold immense relevance because of its calming and restorative nature. Ayurveda views ashwagandha as an adaptogenic herb, one that helps the body adapt to physical and emotional stress while restoring internal balance.",
    benefitsIntro:
      "Traditionally, Ashwagandha has been associated with supporting :",
    benefits: [
      "Natural energy and stamina",
      "Stress management and relaxation",
      "Mental focus and clarity",
      "Better sleep quality",
      "Strength and vitality",
      "Overall immunity and wellness",
    ],
    uniquenessNote:
      "What makes Ashwagandha unique is that it does not work as a temporary stimulant. Instead, Ayurveda believes it nourishes the body gradually, helping build resilience from within.",
    consumptionIntro:
      "Including Ashwagandha in daily life can be simple and mindful. Traditionally, it is consumed.",
    traditionalConsumption: [
      "With warm milk before bedtime",
      "Mixed with honey or ghee",
      "As part of herbal formulations",
      "In Ayurvedic wellness routines under proper guidance",
    ],
    closing:
      "Ayurveda emphasises consistency and balance over excess. Even small daily rituals with herbs like ashwagandha can create long-term wellness benefits when practised mindfully. More than just an herb, Ashwagandha represents an ancient philosophy of healing: one that teaches us that true strength is not only physical but also mental and emotional. Ashwagandha reminds us of the importance of restoration, grounding, and inner balance.",
  },
  {
    id: 5,
    heading: "Ayurvedic Daily Routine",
    category: "lifestyle",
    title: "Ayurvedic Daily Routine : Ancient Practices for Modern Well-Being",
    body: "Long before wellness became a trend, Ayurveda taught a simple yet profound truth: Health is created through daily habits. In Ayurvedic wisdom, the concept of Dinacharya, or daily routine, is considered one of the most powerful ways to maintain balance, prevent illness, and live in harmony with nature. Rather than focusing only on treatment, Ayurveda emphasises living in alignment with the body's natural rhythms. Ancient sages believed that how we begin, nourish, and end our day directly influences our physical, mental, and emotional well-being.",
    image:AyurvedicDailyRoutine,
    sections: [
      {
        heading: "Beginning the Day with Awareness",
        description:
          "Ayurveda recommends waking up during Brahma Muhurta, the peaceful early morning hours before sunrise. This time is believed to support mental clarity, calmness, and spiritual balance.",
        practicesIntro: "Simple morning rituals traditionally include :",
        practices: [
          "Drinking warm water to awaken digestion",
          "Tongue cleaning for oral detoxification",
          "Oil pulling to support oral hygiene",
          "Gentle yoga and stretching",
          "Meditation and breathwork for mental clarity",
        ],
        note: "These practices are designed to awaken the body gradually and prepare the mind for the day ahead.",
      },
      {
        heading: "Nourishing the Body Mindfully",
        description:
          "Ayurveda places great importance on conscious eating habits. Meals are traditionally consumed fresh, warm, and according to one's body constitution (dosha).",
        practicesIntro: "Ancient Ayurvedic principles encourage :",
        practices: [
          "Eating at regular times",
          "Avoiding overeating",
          "Supporting digestion with herbs and spices",
          "Consuming seasonal and natural foods",
        ],
        note: "The focus is not only on what we eat but also on how we eat calmly, gratefully, and without distraction.",
      },
      {
        heading: "The Role of Movement and Stillness",
        description:
          "Daily movement through yoga, walking, or stretching is encouraged to keep the body active and energy flowing. At the same time, Ayurveda recognises the importance of rest, silence, and emotional balance. Practices such as self-massage (Abhyanga), meditation, and mindful breathing help calm the nervous system and restore inner balance.",
      },
      {
        heading: "Ending the Day with Calmness",
        description:
          "Ayurveda teaches that evenings should be slower and lighter. Reducing stimulation, eating early dinners, and preparing the body for restful sleep are considered essential for long-term wellness. A balanced daily routine creates better sleep, improved digestion, stable energy, and a calmer state of mind.",
      },
    ],
    closingHeading: "Ancient Wisdom for Modern Life",
    closing:
      "In today's fast-paced world, stress, irregular schedules, and overstimulation have disconnected many people from natural rhythms. Ayurvedic daily practices offer a gentle reminder that wellness does not always require complexity. Sometimes, healing begins with simple rituals practiced consistently. An Ayurvedic lifestyle is not about perfection. It is about balance, awareness, and living in harmony with ourselves and nature. Ancient practices that continue to guide modern well-being, one mindful day at a time.",
  },
  {
    id: 6,
    ading: "Herbal Tea Rituals",
    category: "wellness",
    title: "Herbal Tea Rituals : Ancient Blends for Modern Wellness",
    body: "In Ayurveda, healing is often found in the simplest daily rituals. Among them, herbal teas have long been cherished not only as comforting beverages but as natural wellness tonics that nourish the body, calm the mind, and restore balance. Unlike ordinary tea consumed out of habit, Ayurvedic herbal teas are prepared with intention. Every herb, spice, and ingredient is selected carefully to support the body's natural rhythms and overall well-being. For centuries, Indian households have brewed herbal infusions using ingredients from the kitchen and garden, turning everyday moments into healing rituals.",
    image:HerbalTea,
    sections: [
      {
        heading: "The Composition of Ayurvedic Herbal Teas",
        description:
          "Ayurvedic herbal teas are traditionally made using combinations of herbs, roots, flowers, and spices known for their therapeutic qualities.",
        ingredientsIntro: "Some commonly used ingredients include :",
        ingredients: [
          {
            name: "Tulsi (Holy Basil)",
            benefit: "known for its calming and immunity-supporting properties",
          },
          {
            name: "Ginger",
            benefit: "supports digestion and warmth in the body",
          },
          {
            name: "Turmeric",
            benefit: "valued for purification and overall wellness",
          },
          {
            name: "Cinnamon",
            benefit: "helps balance metabolism and circulation",
          },
          { name: "Cardamom", benefit: "promotes digestion and freshness" },
          { name: "Fennel", benefit: "soothing for digestion and bloating" },
          {
            name: "Ashwagandha",
            benefit: "supports stress balance and vitality",
          },
          {
            name: "Lemongrass & Mint",
            benefit: "refreshing herbs that calm the senses",
          },
        ],
        note: "These ingredients are often blended based on seasonal needs, body constitution (dosha), and wellness goals.",
      },
      {
        heading: "More Than a Beverage",
        description:
          "In Ayurveda, herbal tea is not treated as a quick remedy. It is considered a mindful daily practice that gently supports the body over time.",
        benefitsIntro: "Warm herbal infusions are believed to :",
        benefits: [
          "Stimulate digestion (Agni)",
          "Support detoxification",
          "Improve circulation",
          "Calm the nervous system",
          "Enhance immunity and vitality",
          "Promote mental clarity and relaxation",
        ],
        note: "Because they are naturally caffeine-free in many cases, Ayurvedic teas are also valued for creating calm energy without overstimulation.",
      },
      {
        heading: "The Ritual of Preparation",
        description:
          "One of the most beautiful aspects of herbal tea rituals is the process itself. The slow brewing of herbs and spices encourages pause, mindfulness, and presence. The aroma of freshly crushed ginger, simmering tulsi leaves, or warm cinnamon creates a sensory experience that feels grounding and restorative. In ancient traditions, these rituals were moments of self-care, an opportunity to reconnect with the body and mind amidst daily life.",
      },
    ],
  },
  {
    id: 7,
    heading: "Pranayama Breathing",
    category: "yoga",
    title:
      "Pranayama Breathing : The Ancient Science of Breath and Inner Balance",
    body: "In the ancient yogic traditions of India, breath was never seen as merely a biological function. It was understood as prana, the vital life force that flows through the body and sustains physical, mental, and spiritual well-being.",
    body2:
      'This understanding gave rise to the practice of pranayama: the conscious regulation of breath. Derived from the Sanskrit words "Prana" (life energy) and "Ayama" (expansion or control), Pranayama is considered one of the most powerful tools in yoga and Ayurveda for creating inner balance and harmony.',
    body3:
      "Ancient yogic texts describe breath as the bridge between the body and mind. When the breath is calm, the mind becomes calm. When the breath is disturbed, the mind often follows. This is why pranayama was traditionally practised not only for physical wellness but also for mental clarity, emotional stability, and spiritual awareness.",
    image:PranayamaBreathing,
    sections: [
      {
        heading: "The Essence of Pranayama",
        description:
          "Pranayama involves mindful breathing techniques that regulate the rhythm, depth, and flow of breath. These practices are designed to improve the movement of energy throughout the body while calming the nervous system.",
        techniquesIntro:
          "Some traditional forms of pranayama include the following :",
        techniques: [
          {
            name: "Anulom Vilom",
            description:
              "alternate nostril breathing for balance and mental calmness",
          },
          {
            name: "Kapalbhati",
            description: "cleansing breath technique for energy and clarity",
          },
          {
            name: "Bhramari",
            description: "humming bee breath for relaxation and stress relief",
          },
          {
            name: "Ujjayi",
            description:
              "deep rhythmic breathing to improve focus and awareness",
          },
          {
            name: "Sheetali",
            description: "cooling breath for calming excess heat and tension",
          },
        ],
        note: "Each technique serves a unique purpose and is practised mindfully according to individual needs.",
      },
      {
        heading: "The Benefits of Conscious Breathing",
        description:
          "Ayurveda and yoga have long emphasised that proper breathing supports overall health and vitality.",
        benefitsIntro:
          "Regular Pranayama practice is traditionally associated with :",
        benefits: [
          "Improved lung capacity and respiratory health",
          "Reduced stress and mental fatigue",
          "Better concentration and emotional balance",
          "Enhanced energy flow and vitality",
          "Support for restful sleep and relaxation",
          "Greater mindfulness and self-awareness",
        ],
        note: "More importantly, Pranayama teaches us to slow down and reconnect with ourselves in a world that constantly pulls attention outward.",
      },
      {
        heading: "A Daily Ritual for Modern Living",
        description:
          "Today, stress, anxiety, and overstimulation have made conscious breathing more relevant than ever. Even a few minutes of mindful breathwork each day can create a noticeable shift in energy, focus, and calmness.",
        note: "Pranayama requires no equipment, no complex setup, and no rush. Only awareness. It is a reminder that one of the most powerful healing tools has always been within us: our breath.",
      },
    ],
    closing:
      "An ancient practice that continues to guide modern well-being, one mindful inhale and exhale at a time.",
  },
  {
    id: 8,
    heading: "Sattvic Food Philosophy",
    category: "lifestyle",
    title: "Sattvic Food Philosophy : Nourishing the Body, Mind, and Spirit",
    body: "In Ayurveda and Yogic traditions, food is considered far more than physical nourishment. It is believed to influence not only the body but also the mind, emotions, and overall state of consciousness.",
    body2:
      "Among the ancient dietary principles of Ayurveda, the concept of Sattvic food holds a deeply respected place. Rooted in simplicity, purity, and balance, the Sattvic way of eating is designed to promote clarity, vitality, calmness, and inner harmony.",
    sattvaMeaning:
      'The word "Sattva" in Sanskrit represents purity, balance, peace, and awareness. Foods that are considered Sattvic are believed to carry these same qualities into the body and mind.',
    image: SattvicDiet,
    sections: [
      {
        heading: "What is Sattvic Food?",
        description:
          "A Sattvic diet traditionally includes fresh, natural, and wholesome foods that are light, nourishing, and easy to digest.",
        foodsIntro: "These foods often include :",
        foods: [
          "Fresh fruits and vegetables",
          "Whole grains",
          "Nuts and seeds",
          "Milk and ghee (traditionally prepared)",
          "Herbal teas",
          "Lentils and legumes",
          "Mild spices and natural ingredients",
        ],
        note: "Ayurveda emphasises food that is seasonal, freshly prepared, and consumed mindfully. Highly processed, stale, overly spicy, or excessively stimulating foods are generally avoided in Sattvic philosophy, as they are believed to disturb mental and physical balance.",
      },
      {
        heading: "Food as Energy",
        description:
          "One of the most profound teachings of Ayurveda is that food carries energy. The way food is grown, prepared, and consumed influences its effect on the body.",
        practicesIntro: "Sattvic eating encourages :",
        practices: [
          "Eating in a calm environment",
          "Cooking with mindfulness",
          "Gratitude before meals",
          "Balanced portions",
          "Conscious chewing and digestion",
        ],
        note: "The focus is not only on nutrition but also on creating harmony within.",
      },
      {
        heading: "The Benefits of a Sattvic Lifestyle",
        benefitsIntro: "Traditionally, a Sattvic diet is associated with :",
        benefits: [
          "Better digestion and metabolism",
          "Improved mental clarity and focus",
          "Balanced energy levels",
          "Emotional calmness and stability",
          "Greater mindfulness and well-being",
          "Support for yogic and meditative practices",
        ],
        note: "Rather than promoting restriction, the Sattvic philosophy encourages awareness and balance in everyday living.",
      },
      {
        heading: "Ancient Wisdom for Modern Wellness",
        description:
          "In today's fast-moving world filled with processed foods and hurried eating habits, the Sattvic approach offers a return to simplicity and intentional living.",
        note: "It reminds us that wellness does not always come from extremes. Sometimes, it begins with choosing foods that feel natural, grounding, and nourishing.",
      },
    ],
    body3:
      "Because in Ayurveda, food is not just fuel. It is energy, awareness, and a reflection of how we care for ourselves.",
    closing:
      "A timeless philosophy where nourishment begins with purity, balance, and mindful living.",
  },
];



export default function HomePage() {
  const [typedLineIndex, setTypedLineIndex] = useState(0);
  const [typedCharIndex, setTypedCharIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(2);
  const [aboutSectionActiveIndex, setAboutSectionActiveIndex] = useState(0);
  const [aboutSectionPaused, setAboutSectionPaused] = useState(false);
  const [currentFilter, setCurrentFilter] = useState({
    id: "all",
    label: "All",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStories, setModalStories] = useState([]);
  const [openBookAppointmentModal, setOpenBookAppointmentModal] =
    useState(false);

  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const teamSectionMembersList = useMemo(
    () => [
      {
        name: "Dr. Santosh Suryavanshi",
        role: "CEO & Promotor : JnanaYogAyu Pvt. Ltd.",
        image: SantoshSuryavanshi,
      },
      {
        name: "Dr. Manisha Suryavanshi",
        role: "Co-founder — Community & learning",
        image: ManishaSuryawanshiImg,
      },
      {
        name: "Vaishali Holmukhe",
        role: "Homoeopathy",
        image: VaishaliHolmukhe,
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
        buttons: ["Details"],
      },
      {
        icon: corporateMindfulnessWorkshopsImg,
        title: "Corporate Mindfulness Workshops",
        desc: "Boost clarity, focus & collaboration with mindful work practices.",
        buttons: ["Details"],
      },
      {
        icon: sisnorToursImg,
        title: "Sisnor Tours",
        desc: "Join our local eco-initiative to restore green cover.",
        buttons: ["Details"],
      },
      {
        icon: weekendDigitalDetoxCampImg,
        title: "Weekend Digital Detox Camp",
        desc: "Unplug from screens and reconnect with nature & yourself.",
        buttons: ["Details"],
      },
      {
        icon: outDoorLeavingImg,
        title: "Out Door Leaving",
        desc: "A deep calming night under the moon for introspection.",
        buttons: ["Details"],
      },
      {
        icon: guidedForestTherapyWalkImg,
        title: "Guided Forest Therapy Walk",
        desc: "Slow, mindful walking practice to reconnect with your senses.",
        buttons: ["Details"],
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

  const handleAboutSectionNext = useCallback(() => {
    setAboutSectionActiveIndex(
      (prev) => (prev + 1) % aboutSectionSlides.length,
    );
  }, [aboutSectionSlides.length]);

  const handleAboutSectionPrev = useCallback(() => {
    setAboutSectionActiveIndex(
      (prev) =>
        (prev - 1 + aboutSectionSlides.length) % aboutSectionSlides.length,
    );
  }, [aboutSectionSlides.length]);

  useEffect(() => {
    if (aboutSectionPaused) return;

    const aboutSectionInterval = setInterval(() => {
      handleAboutSectionNext();
    }, 8000);

    return () => clearInterval(aboutSectionInterval);
  }, [aboutSectionPaused, aboutSectionSlides.length, handleAboutSectionNext]);

  const aboutSectionActiveSlide = aboutSectionSlides[aboutSectionActiveIndex];

  const filters = [
    { id: "herbs", label: "Herbs" },
    { id: "yoga", label: "Yoga" },
    { id: "wellness", label: "Wellness" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "all", label: "All" },
  ];

  const filteredStories = useMemo(() => {
    if (currentFilter.id === "all") return ayurvedaArticles;
    return ayurvedaArticles.filter(
      (story) => story.category?.toLowerCase() === currentFilter.id?.toLowerCase()
    );
  }, [currentFilter, ayurvedaArticles]);

  const openBlog = (id) => {
    navigate(`/blog/${id}`);
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
              className="rounded-[9px] bg-white/70 backdrop-blur-sm border h-[480px] border-neutral-200/70 shadow-[0_18px_60px_rgba(15,23,42,0.08)] overflow-hidden"
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
            <div className="mb-6">
              <Carousel
                items={ourServicesSectionList}
                itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
                autoPlayInterval={3000}
                renderItem={(service) => (
                  <motion.div
                    initial={{ opacity: 0, y: 25, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`rounded-2xl border border-gray-200 shadow-md hover:shadow-xl overflow-hidden transition h-full ${service.bgClass}`}
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

                      <div className="flex justify-end mt-auto">
                        <button className="bg-[#263d21] rounded px-3 py-1 text-white">
                          {service.buttonText}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              />
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

                <div className="relative mt-5 flex justify-end">
                  {item.buttons.map((btn) => (
                    <Button
                      key={btn}
                      variant="contained"
                      //   onClick={() =>
                      //     handleCommunityProgramSectionAction(item.title, btn)
                      //   }
                      sx={{
                        backgroundColor: "#263d21",
                        borderRadius: "5px",
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
                  className="w-36 h-36 rounded-full mx-auto object-cover"
                  draggable={false}
                />

                <h4 className="mt-3 font-semibold">{member.name}</h4>

                <p className="text-xs text-[#263d21]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 px-4 md:px-10">
        <div className="w-full mx-auto max-w-[95rem]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-amber-700 via-green-700 to-emerald-700 bg-clip-text text-transparent">
              Blogs & Insights
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setCurrentFilter(f.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentFilter.label === f.label
                    ? "bg-green-700 text-white shadow-lg shadow-green-200 "
                    : "bg-white/80 text-green-800 border-2 border-green-100 hover:border-green-300 hover:bg-green-50/50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div>
            <Carousel
              items={filteredStories}
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
              autoPlayInterval={3000}
              renderItem={(story) => (
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full pb-4"
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
                        {filters.find((f) => f.id === story.category)?.label}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-green-900 mb-2 line-clamp-2">
                        {story.title}
                      </h3>
                      <p className="text-green-700/80 mb-4 text-sm line-clamp-2">
                        {story.excerpt}
                      </p>
                      <div className="flex justify-end">
                        <CommonButton
                          type="button"
                          label="Read More"
                          className="bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-200"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              arrowClassName="bg-[#263d21] text-white"
            />
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
      {console.log("modalStories", modalStories)}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box className="absolute left-1/2 top-1/2 w-[94%] sm:w-[90%] md:w-[820px] max-h-[92vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-[30px] bg-[#fdfcf8] shadow-[0_25px_80px_rgba(0,0,0,0.18)] outline-none">
          {modalStories && (
            <>
              <div className="relative h-[240px] sm:h-[380px] overflow-hidden rounded-t-[30px]">
                <img
                  src={modalStories.image}
                  alt={modalStories.title}
                  loading="lazy"
                  className="h-full w-full object-cover bg-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <CancelButtonModal onClick={() => setModalOpen(false)} />

                <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8">
                  <div className="mb-3 inline-flex items-center rounded-full border border-[#e9d9aa]/30 bg-[#c6a24d]/20 px-4 py-1 text-xs font-medium tracking-wide text-[#fff3cf] backdrop-blur-md">
                    {modalStories.heading}
                  </div>

                  <h2 className="max-w-3xl text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                    {modalStories.title}
                  </h2>
                </div>
              </div>

              <div className="space-y-6 p-5 sm:p-8">
                {modalStories.body && (
                  <p className="text-[15px] sm:text-base leading-8 text-[#5f5f5f]">
                    {modalStories.body}
                  </p>
                )}

                {modalStories.sanskritVerse && (
                  <div className="rounded-3xl border border-[#eee5d0] bg-white p-5 text-center shadow-sm">
                    <p className="mb-2 text-sm uppercase tracking-[3px] text-[#a48b57]">
                      {modalStories.sanskritVerseIntro}
                    </p>

                    <h3 className="text-2xl font-semibold italic text-[#263d21]">
                      {modalStories.sanskritVerse}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#666]">
                      {modalStories.sanskritMeaning}
                    </p>
                  </div>
                )}

                {modalStories.body2 && (
                  <p className="text-[15px] sm:text-base leading-8 text-[#5f5f5f]">
                    {modalStories.body2}
                  </p>
                )}

                {modalStories.body3 && (
                  <p className="text-[15px] sm:text-base leading-8 text-[#5f5f5f]">
                    {modalStories.body3}
                  </p>
                )}

                {modalStories.benefitsIntro && modalStories.benefits && (
                  <div className="rounded-3xl border border-[#ede6d8] bg-[#faf7f0] p-5 sm:p-6">
                    <h3 className="mb-5 text-xl font-semibold text-[#263d21]">
                      {modalStories.benefitsIntro}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {modalStories.benefits.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-2xl border border-[#efe7d6] bg-white px-4 py-3"
                        >
                          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#b38b2d]" />

                          <p className="text-sm leading-6 text-[#555]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {modalStories.uniquenessNote && (
                  <div className="rounded-3xl bg-[#263d21] p-5">
                    <p className="text-sm sm:text-base leading-7 text-[#f6f1e7]">
                      {modalStories.uniquenessNote}
                    </p>
                  </div>
                )}

                {modalStories.consumptionIntro && (
                  <div className="rounded-3xl border border-[#ece4d4] bg-white p-5 sm:p-6">
                    <h3 className="mb-4 text-xl font-semibold text-[#263d21]">
                      {modalStories.consumptionIntro}
                    </h3>

                    <div className="space-y-3">
                      {modalStories.traditionalConsumption?.map(
                        (item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 rounded-2xl bg-[#faf7f0] px-4 py-3"
                          >
                            <div className="mt-2 h-2 w-2 rounded-full bg-[#b38b2d]" />

                            <p className="text-sm text-[#555] leading-6">
                              {item}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {modalStories.sections?.map((section, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-[#ece4d4] bg-white p-5 sm:p-6 shadow-sm"
                  >
                    <h3 className="mb-3 text-2xl font-semibold text-[#263d21]">
                      {section.heading}
                    </h3>

                    {section.description && (
                      <p className="text-[15px] sm:text-base leading-8 text-[#5f5f5f] mb-4">
                        {section.description}
                      </p>
                    )}

                    {section.practicesIntro && (
                      <p className="mb-4 font-medium text-[#7d6842]">
                        {section.practicesIntro}
                      </p>
                    )}

                    {section.ingredientsIntro && (
                      <p className="mb-4 font-medium text-[#7d6842]">
                        {section.ingredientsIntro}
                      </p>
                    )}

                    {section.techniquesIntro && (
                      <p className="mb-4 font-medium text-[#7d6842]">
                        {section.techniquesIntro}
                      </p>
                    )}

                    {section.foodsIntro && (
                      <p className="mb-4 font-medium text-[#7d6842]">
                        {section.foodsIntro}
                      </p>
                    )}

                    {section.benefitsIntro && (
                      <p className="mb-4 font-medium text-[#7d6842]">
                        {section.benefitsIntro}
                      </p>
                    )}

                    {section.practices && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {section.practices.map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-2xl bg-[#faf7f0] px-4 py-3 text-sm leading-6 text-[#555]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.foods && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {section.foods.map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-2xl bg-[#faf7f0] px-4 py-3 text-sm leading-6 text-[#555]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.benefits && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {section.benefits.map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-2xl bg-[#faf7f0] px-4 py-3 text-sm leading-6 text-[#555]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.ingredients && (
                      <div className="space-y-3">
                        {section.ingredients.map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-2xl bg-[#faf7f0] p-4"
                          >
                            <h4 className="font-semibold text-[#263d21]">
                              {item.name}
                            </h4>

                            <p className="mt-1 text-sm leading-6 text-[#555]">
                              {item.benefit}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.techniques && (
                      <div className="space-y-3">
                        {section.techniques.map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-2xl bg-[#faf7f0] p-4"
                          >
                            <h4 className="font-semibold text-[#263d21]">
                              {item.name}
                            </h4>

                            <p className="mt-1 text-sm leading-6 text-[#555]">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.note && (
                      <div className="mt-5 rounded-2xl bg-[#263d21] px-5 py-4">
                        <p className="text-sm leading-7 text-[#f3eee4]">
                          {section.note}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {modalStories.closingHeading && (
                  <h3 className="text-2xl font-semibold text-[#263d21]">
                    {modalStories.closingHeading}
                  </h3>
                )}

                {modalStories.closing && (
                  <div className="rounded-3xl bg-[#263d21] p-5 sm:p-6">
                    <p className="text-sm sm:text-base leading-8 text-[#f5f0e6]">
                      {modalStories.closing}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </Box>
      </Modal>

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
