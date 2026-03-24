import React, { useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogData } from "../../constants/blogData";
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id);

  const blog = useMemo(() => {
    return blogData.find((b) => b.id === blogId);
  }, [blogId]);

  useEffect(() => {
    if (!blog) {
      navigate("/");
    }
  }, [blog, navigate]);

  const allBlogs = useMemo(() => {
    return blogData;
  }, []);

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-12 px-4 md:px-10 lg:px-10">
      <div className=" mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#263d21] font-semibold mb-4 hover:text-green-700 transition-colors"
        >
          <FaArrowLeft /> Back to Home
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div
            key={blogId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="relative h-[300px] md:h-[500px] w-full rounded-[9px] overflow-hidden shadow-2xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="inline-block px-4 py-1 rounded-full bg-emerald-500 text-xs font-bold uppercase tracking-wider mb-4">
                  {blog.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  {blog.title}
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 border-b border-neutral-200 pb-6">
              <div className="flex items-center gap-2">
                <FaUser className="text-emerald-600" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-emerald-600" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTag className="text-emerald-600" />
                <span className="capitalize">{blog.category}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-6">
              <p className="text-xl font-medium text-neutral-800 italic">
                {blog.excerpt}
              </p>
              <div className="text-lg whitespace-pre-line">{blog.content}</div>
            </div>
          </motion.div>
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-[9px] p-4 border border-neutral-200 shadow-sm sticky top-24">
              <h3 className="text-2xl font-bold text-[#263d21] mb-2">
                More Blogs
              </h3>
              <div className="space-y-4 max-h-[calc(100vh-160px)] overflow-y-auto pr-2 custom-scrollbar">
                {allBlogs.map((other) => {
                  const isSelected = blogId === other.id;
                  return (
                    <motion.div
                      key={other.id}
                      whileHover={{ x: isSelected ? 0 : 5 }}
                      className={`group flex gap-3 cursor-pointer p-2 rounded-2xl transition-all duration-300 ${
                        isSelected
                          ? "bg-emerald-50 border-2 border-emerald-500 shadow-md transform scale-[1.02]"
                          : "hover:bg-neutral-50 border-2 border-transparent"
                      }`}
                      onClick={() =>
                        !isSelected && navigate(`/blog/${other.id}`)
                      }
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                        <img
                          src={other.image}
                          alt={other.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col justify-center min-w-0">
                        <span
                          className={`text-[9px] font-bold uppercase tracking-widest mb-0.5 ${
                            isSelected ? "text-emerald-600" : "text-emerald-500"
                          }`}
                        >
                          {other.category}
                        </span>
                        <h4
                          className={`font-bold line-clamp-2 leading-tight text-xs transition-colors ${
                            isSelected
                              ? "text-[#263d21]"
                              : "text-neutral-800 group-hover:text-emerald-700"
                          }`}
                        >
                          {other.title}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
