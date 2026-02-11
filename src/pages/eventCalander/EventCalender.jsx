import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export const eventsData2026 = [
  {
    month: "January",
    date: "01/01/2026",
    serviceName: "नवीन वर्ष",
    description: "New Year celebrations",
    benefits: "Joy, wellness, community bonding",
    value: 2000,
  },
  {
    month: "January",
    date: "09/01/2026 To 12/01/2026",
    serviceName: "स्वामी विवेकानंद जयंती & राष्ट्रीय युवा दिन",
    description:
      "Celebrations of Swami Vivekananda Jayanti & National Youth Day",
    benefits: "Youth empowerment, cultural learning",
    value: 2000,
  },
  {
    month: "January",
    date: "13/01/2026",
    serviceName: "लोहडी Lohri",
    description: "Lohri festival celebration",
    benefits: "Cultural awareness, community bonding",
    value: 2000,
  },
  {
    month: "January",
    date: "14/01/2026",
    serviceName: "मकर संक्रांत Makar Sankranti",
    description: "Harvest festival celebrations",
    benefits: "Cultural learning, seasonal wellness",
    value: 2000,
  },
  {
    month: "January",
    date: "23/01/2026",
    serviceName: "वसन्त पञ्चमी सरस्वती पूजन",
    description: "Vasant Panchami & Saraswati Puja",
    benefits: "Education, cultural learning",
    value: 2000,
  },
  {
    month: "January",
    date: "25/01/2026",
    serviceName: "बालकपालक Youth Guardian Family Camp",
    description: "Family camp + Sun Bath festival",
    benefits: "Wellness, cultural awareness",
    value: 2000,
  },
  {
    month: "January",
    date: "26/01/2026",
    serviceName: "गणतंत्र दिन Republic Day",
    description: "National Republic Day celebrations",
    benefits: "Civic awareness, cultural pride",
    value: 2000,
  },
  {
    month: "January",
    date: "30/01/2026",
    serviceName: "गांधी पुण्यतिथि",
    description: "Mahatma Gandhi remembrance",
    benefits: "Cultural learning, reflection",
    value: 2000,
  },
  {
    month: "February",
    date: "01/02/2026",
    serviceName: "गुरु रविदास जयंती",
    description: "Celebration of Guru Ravidas Jayanti",
    benefits: "Cultural, Spiritual",
    value: null,
  },
  {
    month: "February",
    date: "04/02/2026",
    serviceName: "Cancer Awareness Day",
    description: "Awareness and health-focused activities",
    benefits: "Educational, Wellness",
    value: 2000,
  },
  {
    month: "February",
    date: "12/02/2026",
    serviceName: "महर्षि दयानंद सरस्वती जयंती",
    description: "Commemoration of Maharshi Dayanand Saraswati",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "February",
    date: "15/02/2026",
    serviceName: "महाशिवरात्रि Mahashivaratri",
    description: "Spiritual celebration of Lord Shiva",
    benefits: "Spiritual",
    value: 2000,
  },
  {
    month: "February",
    date: "19/02/2026",
    serviceName: "शिवाजी महाराज जयंती Shivaji Jayanti",
    description: "Celebration of Shivaji Maharaj Jayanti",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "March",
    date: "03/03/2026",
    serviceName: "होलिका दहन Holika Dahan",
    description: "Celebration of Holika Dahan",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "March",
    date: "04/03/2026",
    serviceName: "स्वधूलिवन्दन Holi Festival",
    description: "Ash worship and Holi rituals",
    benefits: "Cultural, Spiritual",
    value: 2000,
  },
  {
    month: "March",
    date: "06/03/2026",
    serviceName: "छत्रपती शिवाजी महाराज जयंती",
    description: "Traditional healing commune & Shivaji Jayanti",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "March",
    date: "08/03/2026",
    serviceName: "स्वरङ्गपञ्चमी Colour Festival/ International Women's Day",
    description: "Healing commune with festivals and awareness.",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "March",
    date: "19/03/2026",
    serviceName: "स्वनववर्ष गुढी पाडवा युगादी",
    description: "New Year celebrations with traditional rituals",
    benefits: "Cultural, Wellness",
    value: 2000,
  },
  {
    month: "March",
    date: "21/03/2026",
    serviceName: "गण गौर Chaitra Gauri Gangauri",
    description: "Traditional festival celebration",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "March",
    date: "26/03/2026",
    serviceName: "स्वएकवचन उत्सव : राम नवमी",
    description: "Celebration of Ram Navami",
    benefits: "Cultural, Spiritual",
    value: 2000,
  },
  {
    month: "April",
    date: "01/04/2026",
    serviceName: "Banking Detox आर्थिक वर्ष",
    description: "Financial year start with wellness",
    benefits: "Wellness, Educational",
    value: 2000,
  },
  {
    month: "April",
    date: "02/04/2026",
    serviceName: "सामर्थ्यदिन / Hanuman Jayanti / चैत्र पोर्णिमा",
    description: "Hanuman Jayanti celebrations",
    benefits: "Cultural, Spiritual",
    value: 2000,
  },
  {
    month: "April",
    date: "14/04/2026",
    serviceName: "Solar New Year आंबेडकर जयंती बैसाखी",
    description: "Celebration of Solar New Year and Ambedkar Jayanti",
    benefits: "Cultural, Educational",
    value: null,
  },
  {
    month: "April",
    date: "21/04/2026",
    serviceName: "शंकराचार्य सूरदास जयंती",
    description: "Commemoration of Shankaracharya and Surdas Jayanti.",
    benefits: "Cultural, Spiritual",
    value: null,
  },
  {
    month: "April",
    date: "22/04/2026",
    serviceName: "Earth Day पृथ्वी दिन",
    description: "Celebration and awareness of Earth Day",
    benefits: "Educational, Wellness",
    value: 2000,
  },
  {
    month: "April",
    date: "25/04/2026",
    serviceName: "सीता नवमी Sita Navami",
    description: "Celebration of Sita Navami",
    benefits: "Cultural, Spiritual",
    value: 2000,
  },
  {
    month: "May",
    date: "01/05/2026",
    serviceName: "वैशाख बुद्ध पोर्णिमा Workers Day",
    description: "Observance of Buddha Poornima and International Workers' Day",
    benefits: "Cultural, Educational",
    value: 2000,
  },
  {
    month: "May",
    date: "03/05/2026",
    serviceName: "विश्व हास्य दिवस",
    description: "Healing commune combined with International Humor Day.",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "May",
    date: "10/05/2026",
    serviceName: "मातृ दिन",
    description:
      "Physician wellness program and life knowledge sessions on Ayurveda with Mother's Day celebration.",
    benefits: "Wellness, Educational",
    value: 2000,
  },
  {
    month: "May",
    date: "27/05/2026",
    serviceName: "बकरी ईद Eid",
    description: "Celebration of Bakri Eid",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "May",
    date: "31/05/2026",
    serviceName: "विश्व तंबाखू निषेध दिन",
    description: "World No Tobacco Day observance.",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "June",
    date: "05/06/2026",
    serviceName: "विश्व पर्यावरण दिन",
    description: "Healing commune and World Environment Day",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "June",
    date: "17/06/2026",
    serviceName: "महाराणा प्रताप जयंती, इस्लामी नव वर्ष अल हिज्रा",
    description: "Commemorative celebrations.",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "June",
    date: "21/06/2026",
    serviceName: "पितृ दिन / आंतरराष्ट्रीय योग दिन / मोठा दिवस",
    description: "Observance of ancestors and International Yoga Day",
    benefits: "Wellness, Cultural",
    value: 2000,
  },
  {
    month: "June",
    date: "26/06/2026",
    serviceName: "मुहर्रम",
    description: "Religious observance",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "June",
    date: "29/06/2026",
    serviceName: "वट पोर्णिमा, कबीरदास जयंती",
    description: "Religious and cultural celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "July",
    date: "16/07/2026",
    serviceName: "जगन्नाथ रथयात्रा",
    description: "Rath Yatra festival",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "July",
    date: "29/07/2026",
    serviceName: "गुरु पोर्णिमा",
    description: "Guru Purnima observance",
    benefits: "Cultural, Spiritual",
    value: null,
  },
  {
    month: "August",
    date: "02/08/2026",
    serviceName: "मैत्रेय दिन",
    description: "Friendship/Compassion Day",
    benefits: "Cultural, Wellness",
    value: null,
  },
  {
    month: "August",
    date: "15/08/2026",
    serviceName: "स्वतंत्रता दिवस/Independence Day",
    description: "National celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "August",
    date: "17/08/2026",
    serviceName: "नागपंचमी",
    description: "Religious festival",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "August",
    date: "19/08/2026",
    serviceName: "तुलसीदास जयंती",
    description: "Birth anniversary celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "August",
    date: "26/08/2026",
    serviceName: "ओणम / ईद ए मिलाद",
    description: "Religious and cultural celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "August",
    date: "28/08/2026",
    serviceName: "रक्षाबंधन",
    description: "Sibling bonding festival",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "September",
    date: "04/09/2026",
    serviceName: "कृष्ण जन्माष्टमी, अगस्त्य अर्ध्य",
    description: "Birth of Lord Krishna celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "September",
    date: "05/09/2026",
    serviceName: "गोपाल काला दही हंडी, शिक्षक दिन",
    description: "Dahi Handi and Teacher's Day",
    benefits: "Cultural, Educational",
    value: 2000,
  },
  {
    month: "September",
    date: "11/09/2026",
    serviceName: "बेंदूर - बैल पोळा - स्ववृषभोत्सव / BullFestival",
    description: "Traditional bull festival",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "September",
    date: "14/09/2026",
    serviceName: "हरतालिका गौरी, मंगळा, मंगळा गौर, गणेश स्थापना, हिन्दी दिवस",
    description: "Religious and national celebrations",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "September",
    date: "15/09/2026",
    serviceName: "ऋषि पंचमी, अभियंता दिन, विश्वेश्वरैया जयंती",
    description: "Observances of Rishi Panchami and Engineers' Day",
    benefits: "Cultural, Educational",
    value: 2000,
  },
  {
    month: "September",
    date: "17/09/2026",
    serviceName: "गौरी आवाहन, राधाष्टमी",
    description: "Religious festival",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "September",
    date: "18/09/2026",
    serviceName: "जेष्ठ गौरी पूजा",
    description: "Religious festival",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "September",
    date: "19/09/2026",
    serviceName: "जेष्ठ गौरी विसर्जन",
    description: "Festival conclusion",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "September",
    date: "20/09/2026",
    serviceName: "स्वग्राम गणेश विसर्जन",
    description: "Ganesh Visarjan",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "September",
    date: "25/09/2026",
    serviceName: "अनंत चतुर्थी गणेश विसर्जन",
    description: "Ganesh festival",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "September",
    date: "27/09/2026",
    serviceName: "पितृ पक्ष प्रारंभ Ancestor Week",
    description: "Ancestor observance",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "October",
    date: "02/10/2026",
    serviceName: "गांधी जयंती Gandhi Jayanti",
    description: "National celebration",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "October",
    date: "10/10/2026",
    serviceName: "सर्वपितृ अमावस्या",
    description: "Ancestor observance",
    benefits: "Cultural",
    value: null,
  },
  {
    month: "October",
    date: "11/10/2026",
    serviceName:
      "नवरात्री प्रारंभ भोंडला / Navratri, घटस्थापना / Ghatsthapana, मृत्तिका पूजन / Mruttika Pujan",
    description: "Navratri festival start",
    benefits: "Cultural, Spiritual",
    value: 2000,
  },
  {
    month: "October",
    date: "16–17/10/2026",
    serviceName: "सरस्वती आवाहन & पूजा",
    description: "Worship of Goddess Saraswati",
    benefits: "Cultural, Educational",
    value: null,
  },
  {
    month: "October",
    date: "19/10/2026",
    serviceName: "दुर्गाष्टमी / महानवमी",
    description: "Navratri festival celebration",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "October",
    date: "20/10/2026",
    serviceName: "विजयादशमी / दसरा / Vijayadashami-Dasara, मध्वाचार्य जयंती",
    description: "Festival and scholar observance",
    benefits: "Cultural, Educational",
    value: 2000,
  },
  {
    month: "October",
    date: "21/10/2026",
    serviceName: "मध्वाचार्य जयंती",
    description: "Scholar observance",
    benefits: "Educational",
    value: 2000,
  },
  {
    month: "October",
    date: "25/10/2026",
    serviceName: "कोजागिरी / Kojagiri Pornima, शरद पोर्णिमा",
    description: "Full moon observance",
    benefits: "Cultural",
    value: 2000,
  },
  {
    month: "October",
    date: "26/10/2026",
    serviceName: "वाल्मीकी मीराबाई जयंती",
    description: "Saints' birth anniversaries",
    benefits: "Cultural, Spiritual",
    value: null,
  },
  {
    month: "October",
    date: "29/10/2026",
    serviceName: "करवा चौथ",
    description: "Couple fasting and rituals",
    benefits: "Cultural, Wellness",
    value: null,
  },
  {
    month: "November",
    date: "04/11/2026",
    serviceName: "दुर्ग बांधणी Fort Construction",
    description: "Traditional fort construction activity at Swagrama",
    benefits: "Cultural engagement, teamwork, historical learning",
    value: 2000,
  },
  {
    month: "November",
    date: "05/11/2026",
    serviceName: "गौवत्सद्वादशी Cow Calf Ceremony / वसू बारस VasuBaras",
    description: "Ritual celebrating cow and calf; auspicious ceremonies",
    benefits: "Strengthens connection with cows, cultural learning",
    value: 2000,
  },
  {
    month: "November",
    date: "06/11/2026",
    serviceName: "धनोत्रयोदशी Dhanotrayodashi",
    description: "Observance of Dhanteras / festival rituals",
    benefits: "Spiritual benefits, prosperity rituals",
    value: 2000,
  },
  {
    month: "November",
    date: "08/11/2026",
    serviceName: "Dipavali – Lakshmi Pujan नरक चतुर्दशी",
    description: "Diwali – Lakshmi Puja and rituals",
    benefits: "Spiritual cleansing, prosperity, wellness",
    value: 2000,
  },
  {
    month: "November",
    date: "10/11/2026",
    serviceName: "Dipavali Padwa / Balipratipada / Govardhan Puja",
    description: "Diwali festival rituals and Govardhan celebration",
    benefits: "Spiritual benefits, prosperity",
    value: 2000,
  },
  {
    month: "November",
    date: "11/11/2026",
    serviceName: "भाऊबीज",
    description: "Festival of brothers and sisters",
    benefits: "Family bonding, cultural tradition",
    value: 2000,
  },
  {
    month: "November",
    date: "14/11/2026",
    serviceName: "बाल दिवस / नेहरू जयंत",
    description: "Children's Day & Nehru Jayanti celebrations",
    benefits: "Educational, fun, cultural awareness",
    value: 2000,
  },
  {
    month: "November",
    date: "21/11/2026",
    serviceName: "तुलसी विवाह Tulasi Vivah",
    description: "Holy ceremonial marriage of Tulasi plant",
    benefits: "Spiritual merit, cultural immersion",
    value: 2000,
  },
  {
    month: "November",
    date: "24/11/2026",
    serviceName: "गुरुनानक जयंती GuruNanak Jayanti",
    description: "Celebration of Guru Nanak's birth anniversary",
    benefits: "Spiritual inspiration, cultural enrichment",
    value: 2000,
  },
  {
    month: "December",
    date: "01/12/2026",
    serviceName: "विश्व एड्स दिन",
    description: "Health & spiritual observances",
    benefits: "Awareness, wellness, spiritual merit",
    value: 2000,
  },
  {
    month: "December",
    date: "14/12/2026",
    serviceName: "विवाह पंचमी",
    description: "Wedding-related ceremony",
    benefits: "Spiritual & cultural benefit",
    value: 2000,
  },
  {
    month: "December",
    date: "20/12/2026",
    serviceName: "गीता जयंती / मोक्षदा एकादशी",
    description: "Health & spiritual observances",
    benefits: "Awareness, wellness, spiritual merit",
    value: 2000,
  },
  {
    month: "December",
    date: "23/12/2026",
    serviceName: "दत्तात्रय जयंती",
    description: "Celebration of Dattatreya Jayanti",
    benefits: "Spiritual growth, cultural learning",
    value: 2000,
  },
];

const EventCalendar = () => {
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(todayMonth);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const location = useLocation();
  const passedData = location.state;

  const setDayOnly = (dateStr) => {
    const [day] = dateStr.split("/");
    return day;
  };

  useEffect(() => {
    if (passedData !== undefined && passedData !== null) {
      setSelectedEvents([passedData]);
      setSelectedDate(setDayOnly(passedData.date));
    }
  }, [passedData]);

  const monthsFull = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (month) => new Date(2026, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month) => new Date(2026, month, 1).getDay();

  const eventsByDate = useMemo(() => {
    const map = {};
    eventsData2026.forEach((event) => {
      const [day, month] = event.date.split("/");
      const key = `${parseInt(month)}-${parseInt(day)}`;
      if (!map[key]) map[key] = [];
      map[key].push(event);
    });
    return map;
  }, []);

  const getEventsForDate = (day) => {
    const key = `${currentMonth + 1}-${day}`;
    return eventsByDate[key] || [];
  };

  const isPastDate = (day) => {
    const dateToCheck = new Date(2026, currentMonth, day);
    const currentDate = new Date(todayYear, todayMonth, todayDay);
    currentDate.setHours(0, 0, 0, 0);
    dateToCheck.setHours(0, 0, 0, 0);
    return dateToCheck < currentDate;
  };

  const isToday = (day) => {
    return (
      day === todayDay && currentMonth === todayMonth && 2026 === todayYear
    );
  };

  const handleDateClick = (day) => {
    if (isPastDate(day)) return;

    setSelectedDate(day);
    const events = getEventsForDate(day);
    setSelectedEvents(events);
    if (events.length > 0 && window.innerWidth < 1024) {
      setShowEventModal(true);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const events = getEventsForDate(day);
      const hasEvents = events.length > 0;
      const isSelected = Number(selectedDate) === Number(day);
      const isPast = isPastDate(day);
      const isTodayDate = isToday(day);
      days.push(
        <motion.div
          key={day}
          whileHover={!isPast ? { scale: 1.04 } : {}}
          whileTap={!isPast ? { scale: 0.96 } : {}}
          onClick={() => handleDateClick(day)}
          className={`aspect-square rounded-lg transition-all relative cursor-pointer flex items-center justify-center
            ${isPast ? "opacity-30 cursor-not-allowed bg-gray-50 border" : ""}
            ${isSelected ? "bg-gradient-to-br from-lime-500 to-green-600 text-white shadow-sm" : ""}
            ${isTodayDate && !isSelected ? "bg-amber-100 border border-amber-400" : ""}
            ${hasEvents && !isSelected && !isTodayDate ? "bg-lime-50 border border-lime-300" : ""}
            ${!hasEvents && !isSelected && !isTodayDate && !isPast ? "bg-white border border-gray-200" : ""}`}
        >
          <span
            className={`text-[9px] sm:text-[14px] font-bold ${isSelected ? "text-white" : isPast ? "text-gray-400" : "text-gray-800"}`}
          >
            {day}
          </span>
          {hasEvents && !isPast && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`absolute bottom-[10px] 2xl:bottom-[20px] w-[5px] h-[5px] animate-pulse rounded-full ${isSelected ? "bg-white" : "bg-lime-600"}`}
            />
          )}
        </motion.div>
      );
    }
    return days;
  };

  return (
    <div className="min-h-screen p-1 sm:p-2">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[95rem] px-4 md:px-10 2xl:px-0 mx-auto"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="text-center mb-1 sm:mb-2"
        >
          <h1 className="text-base sm:text-xl md:text-2xl font-black bg-gradient-to-r from-lime-600 via-green-600 to-lime-700 bg-clip-text text-transparent">
            स्ववर्षपद 2026
          </h1>
          <p className="text-[8px] sm:text-[10px] text-gray-600 font-medium">
            Cultural & Wellness Events
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-1.5 sm:gap-2">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-1.5 sm:p-2 border border-lime-200">
              <div className="flex items-center justify-between mb-1 pb-1 border-b border-lime-200">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentMonth(Math.max(0, currentMonth - 1))}
                  disabled={currentMonth === 0}
                  className="p-0.5 sm:p-1 rounded bg-lime-100 hover:bg-lime-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <svg
                    className="w-5 h-5 text-lime-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>

                <div className="text-center">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">
                    {monthsFull[currentMonth]}
                  </h2>
                  <span className="text-[14px] text-gray-500 font-semibold">
                    2026
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setCurrentMonth(Math.min(11, currentMonth + 1))
                  }
                  disabled={currentMonth === 11}
                  className="p-0.5 sm:p-1 rounded bg-lime-100 hover:bg-lime-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <svg
                    className="w-5 h-5 text-lime-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>

              <div className="grid grid-cols-7 gap-[2px] sm:gap-0.5 mb-0.5 sm:mb-1">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                  <div
                    key={idx}
                    className="text-center text-[8px] sm:text-[14px] font-bold text-gray-600 py-0.5"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-[2px] sm:gap-2">
                {renderCalendar()}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-green-200 sticky top-1 max-h-[calc(100vh-0.5rem)] overflow-hidden">
              <AnimatePresence mode="wait">
                {selectedEvents.length > 0 ? (
                  <motion.div
                    key={selectedDate}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="overflow-y-auto max-h-[calc(100vh-0.5rem)]"
                  >
                    <div className="p-2 bg-gradient-to-br from-lime-500 to-green-600 text-white">
                      <div className="text-[14px] font-semibold opacity-90">
                        {selectedEvents[0].date}
                      </div>
                      <div className="text-[12px] mt-0.5 opacity-80">
                        {selectedEvents.length} Event
                        {selectedEvents.length > 1 ? "s" : ""}
                      </div>
                    </div>

                    <div className="p-2 space-y-1.5 py-4">
                      {selectedEvents.map((event, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="bg-gradient-to-br from-lime-50 to-green-50 rounded-md p-2 border border-lime-200"
                        >
                          <h3 className="text-[14px] font-bold text-gray-800 mb-1">
                            {event.serviceName}
                          </h3>
                          <p className="text-[12px] text-gray-600 mb-1 leading-tight">
                            {event.description}
                          </p>
                          <div className="flex items-center gap-0.5 text-[12px] text-green-700 mb-1.5">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span >{event.benefits}</span>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setCurrentEvent(event)}
                            className="w-full px-2 py-2 bg-gradient-to-r from-lime-500 to-green-600 text-white font-bold rounded text-[14px] shadow-sm hover:shadow transition-all"
                          >
                            Book Event
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 text-center py-16"
                  >
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-2"
                    >
                      <svg
                        className="w-6 h-6 text-lime-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-[14px] font-bold text-gray-700 mb-0.5">
                      Select a Date
                    </h3>
                    <p className="text-[12px] text-gray-500">
                      Tap to view events
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showEventModal && selectedEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEventModal(false)}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden flex items-end p-2"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl w-full max-h-[70vh] overflow-hidden shadow-2xl"
            >
              <div className="sticky top-0 bg-gradient-to-br from-lime-500 to-green-600 text-white p-2 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold">
                      {selectedEvents[0].date}
                    </div>
                    <div className="text-[8px] opacity-90">
                      {selectedEvents.length} Event
                      {selectedEvents.length > 1 ? "s" : ""}
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowEventModal(false)}
                    className="p-1 bg-white/20 rounded-full"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>

              <div className="p-2 space-y-1.5 overflow-y-auto max-h-[calc(70vh-3rem)]">
                {selectedEvents.map((event, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="bg-gradient-to-br from-lime-50 to-green-50 rounded-lg p-2 border border-lime-200"
                  >
                    <h3 className="text-[10px] font-bold text-gray-800 mb-1">
                      {event.serviceName}
                    </h3>
                    <p className="text-[8px] text-gray-600 mb-1 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-0.5 text-[8px] text-green-700 mb-1.5">
                      <svg
                        className="w-2.5 h-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{event.benefits}</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentEvent(event)}
                      className="w-full px-2.5 py-1 bg-gradient-to-r from-lime-500 to-green-600 text-white font-bold rounded-md text-[9px] shadow-sm"
                    >
                      Book Event
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventCalendar;
