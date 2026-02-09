import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Spa,
  WbSunny,
  Bedtime,
  LocalFlorist,
  Favorite,
  SelfImprovement,
  RestaurantMenu,
  Shield,
} from "@mui/icons-material";

const AyurvedaBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Morning Abhyanga: The Art of Self-Massage",
      category: "glow",
      excerpt:
        "Discover the ancient practice of oil massage that nourishes your skin, calms the mind, and awakens your body's natural radiance.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
      readTime: "5 min read",
      icon: <Spa />,
      color: "from-amber-50 to-orange-50",
    },
    {
      id: 2,
      title: "Agni Rekindling: Boost Your Digestive Fire",
      category: "digestion",
      excerpt:
        "Learn how to strengthen your digestive fire with warm water rituals, mindful eating practices, and Ayurvedic spices.",
      image:
        "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&q=80",
      readTime: "7 min read",
      icon: <RestaurantMenu />,
      color: "from-rose-50 to-pink-50",
    },
    {
      id: 3,
      title: "Sunset Wind-Down: Preparing for Restful Sleep",
      category: "sleep",
      excerpt:
        "Create a sacred evening routine that signals your body to release the day and embrace deep, rejuvenating sleep.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      readTime: "6 min read",
      icon: <Bedtime />,
      color: "from-indigo-50 to-purple-50",
    },
    {
      id: 4,
      title: "Ojas Building: Strengthening Your Immunity",
      category: "immunity",
      excerpt:
        "Nurture your vital essence through nourishing foods, herbal tonics, and practices that build your body's natural defense.",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
      readTime: "8 min read",
      icon: <Shield />,
      color: "from-emerald-50 to-teal-50",
    },
    {
      id: 5,
      title: "Pranayama: Breath as Medicine",
      category: "clarity",
      excerpt:
        "Harness the power of conscious breathing to clear mental fog, balance emotions, and connect with your inner wisdom.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      readTime: "5 min read",
      icon: <SelfImprovement />,
      color: "from-cyan-50 to-blue-50",
    },
    {
      id: 6,
      title: "Golden Milk Ritual: Evening Elixir",
      category: "sleep",
      excerpt:
        "Discover the magic of turmeric-infused warm milk, a centuries-old remedy for peaceful nights and vibrant mornings.",
      image:
        "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=800&q=80",
      readTime: "4 min read",
      icon: <LocalFlorist />,
      color: "from-yellow-50 to-amber-50",
    },
    {
      id: 7,
      title: "Tongue Scraping: Your First Morning Practice",
      category: "digestion",
      excerpt:
        "A simple two-minute practice that removes toxins, refreshes taste buds, and jumpstarts your digestive system.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
      readTime: "3 min read",
      icon: <WbSunny />,
      color: "from-lime-50 to-green-50",
    },
    {
      id: 8,
      title: "Heart-Centered Meditation for Emotional Balance",
      category: "clarity",
      excerpt:
        "Cultivate emotional resilience and mental clarity through ancient meditation techniques rooted in Ayurvedic wisdom.",
      image:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
      readTime: "6 min read",
      icon: <Favorite />,
      color: "from-pink-50 to-rose-50",
    },
  ];

  const categories = [
    { id: "all", label: "All Rituals", icon: <Spa /> },
    { id: "digestion", label: "Digestion", icon: <RestaurantMenu /> },
    { id: "sleep", label: "Sleep", icon: <Bedtime /> },
    { id: "glow", label: "Glow", icon: <LocalFlorist /> },
    { id: "immunity", label: "Immunity", icon: <Shield /> },
    { id: "clarity", label: "Clarity", icon: <SelfImprovement /> },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">


      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-16 md:py-24 px-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center relative z-10 pt-28">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Embrace the Wisdom of
              <span className="block bg-gradient-to-r py-1 from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
                Ayurveda
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your daily routines into sacred rituals that nurture
              your body, calm your mind, and illuminate your spirit. Discover
              timeless Dinacharya practices for holistic wellbeing.
            </p>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 opacity-20">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <LocalFlorist style={{ fontSize: 80, color: "#f59e0b" }} />
            </motion.div>
          </div>
          <div className="absolute bottom-10 right-10 opacity-20">
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Spa style={{ fontSize: 100, color: "#f97316" }} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12"
      >
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700"
                }`}
              >
                {category.icon}
                <span className="text-sm md:text-base">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-20">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                   loading="lazy"
                />
                <div
                  className={`absolute top-4 right-4 bg-gradient-to-br ${post.color} p-3 rounded-full shadow-lg backdrop-blur-sm`}
                >
                  {React.cloneElement(post.icon, {
                    className: "text-gray-700",
                  })}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-amber-600 font-semibold text-sm group"
                >
                  Read Full Article
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default AyurvedaBlog;
