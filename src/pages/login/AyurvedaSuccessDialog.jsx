import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Box, IconButton, Modal } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 520,
  bgcolor: "transparent",
  outline: "none",
  p: 0,
  borderRadius: 3,
};

const FloatingLeaf = ({ delay, direction, size = "20px" }) => (
  <motion.div
    className="absolute opacity-20"
    style={{
      fontSize: size,
      [direction === "left" ? "left" : "right"]: "-10px",
      top: `${Math.random() * 60 + 20}%`,
      willChange: "transform",
    }}
    initial={{ opacity: 0, y: -10 }}
    animate={{
      opacity: [0, 0.25, 0.25],
      y: [0, 12, 0],
      x: direction === "left" ? [0, 8, 0] : [0, -8, 0],
    }}
    transition={{
      duration: 3.5,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    🍃
  </motion.div>
);

const AyurvedaSuccessDialog = ({ open, onClose, contentMessage }) => {

  useEffect(() => {
    if (open) {
      const confettiTimer = setTimeout(() => 1800);
      const closeTimer = setTimeout(() => onClose(), 4000);

      return () => {
        clearTimeout(confettiTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [open, onClose]);



  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="ayurveda-success-modal"
      aria-describedby="ayurveda-success-description"
    >
      <Box sx={modalStyle}>
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="relative bg-gradient-to-br from-emerald-50/95 via-amber-50/90 to-green-50/95 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">
                <div
                  className="absolute inset-0 opacity-[0.015] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />

                <FloatingLeaf delay={0} direction="left" size="28px" />
                <FloatingLeaf delay={0.7} direction="right" size="24px" />

                <motion.div
                  className="absolute w-64 h-64 bg-green-300/10 rounded-full blur-3xl"
                  style={{
                    top: "-20%",
                    right: "-10%",
                    willChange: "transform",
                  }}
                  animate={{
                    scale: [1, 1.06, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute w-48 h-48 bg-amber-300/10 rounded-full blur-3xl"
                  style={{
                    bottom: "-10%",
                    left: "-5%",
                    willChange: "transform",
                  }}
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                />

      

                <div className="absolute top-4 right-4 z-10">
                  <IconButton
                    onClick={onClose}
                    className="bg-white/90 hover:bg-white shadow-lg"
                    size="small"
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      "&:hover": {
                        bgcolor: "white",
                      },
                      transition: "all 0.2s ease",
                      boxShadow: 3,
                    }}
                  >
                    <CloseIcon className="text-gray-600" fontSize="small" />
                  </IconButton>
                </div>

                <div className="relative px-8 py-10 md:px-10">
                  <motion.div
                    className="flex justify-center items-center mb-6"
                    initial={{ scale: 0, rotate: -60 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.12,
                      duration: 0.45,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-green-500 rounded-full opacity-20"
                        style={{ willChange: "transform, opacity" }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0, 0.2],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-5 shadow-xl">
                        <CheckCircleOutlineIcon
                          className="text-white"
                          style={{ fontSize: "56px" }}
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-700 mb-3">
                      Registration Successful!
                    </h2>
                  </motion.div>

                  <motion.div
                    className="bg-white/70 backdrop-blur-md rounded-2xl p-5 mb-6 border border-green-200/60 shadow-lg"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full p-3 shadow-lg">
                          <EmailOutlinedIcon
                            className="text-white"
                            style={{ fontSize: "26px" }}
                          />
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-gray-700 leading-relaxed text-base font-medium">
                          {contentMessage}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.button
                      onClick={onClose}
                      className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold px-10 py-3.5 rounded-full shadow-xl overflow-hidden group"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10">
                        Continue Your Wellness Journey
                      </span>
                    </motion.button>
                  </motion.div>

                  <motion.div
                    className="text-center mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  >
                    <p className="text-sm text-green-700/80 italic font-light">
                      "Your journey to holistic wellness begins here"
                    </p>
                    <div className="flex justify-center gap-1 mt-2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 bg-green-500/40 rounded-full"
                          animate={{
                            scale: [1, 1.25, 1],
                            opacity: [0.4, 0.7, 0.4],
                          }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            delay: i * 0.25,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Modal>
  );
};

export default AyurvedaSuccessDialog;
