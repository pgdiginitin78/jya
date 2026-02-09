import React from "react";
import { Box, Modal } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CommonButton from "./button/CommonButton";

export default function ConfirmationModal({
  confirmationOpen,
  confirmationHandleClose,
  confirmationSubmitFunc,
  confirmationMsg,
  confirmationButtonMsg,
  confirmationLabel,
}) {
  return (
    <AnimatePresence mode="wait">
      {confirmationOpen && (
        <Modal
          open={confirmationOpen}
          onClose={confirmationHandleClose}
          aria-labelledby="confirmation-modal-title"
          aria-describedby="confirmation-modal-description"
          closeAfterTransition
          slotProps={{
            backdrop: {
              sx: {
                backgroundColor: "rgba(34, 139, 34, 0.25)",
                backdropFilter: "blur(3px)",
              },
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: "450px" },
              maxWidth: "500px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                willChange: "transform, opacity",
              }}
            >
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: "16px",
                  boxShadow: "0 20px 60px rgba(46, 125, 50, 0.2)",
                  overflow: "hidden",
                  border: "1px solid rgba(76, 175, 80, 0.15)",
                }}
              >
                {/* Decorative Header Border */}
                <Box
                  sx={{
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #66BB6A 0%, #81C784 50%, #66BB6A 100%)",
                  }}
                />

                {/* Main Content */}
                <Box
                  sx={{
                    position: "relative",
                    background:
                      "linear-gradient(135deg, #F1F8F4 0%, #E8F5E9 100%)",
                    px: { xs: 3, sm: 4 },
                    pt: 4,
                    pb: 4,
                  }}
                >
                  {/* Decorative Background Element */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      width: 60,
                      height: 60,
                      opacity: 0.06,
                      background:
                        "radial-gradient(circle, #66BB6A 0%, transparent 70%)",
                      borderRadius: "50%",
                    }}
                  />

                  {/* Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #66BB6A",
                        boxShadow: "0 4px 12px rgba(76, 175, 80, 0.2)",
                      }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2E7D32"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </Box>
                  </Box>

                  {/* Title */}
                  <h2
                    id="confirmation-modal-title"
                    className="text-center text-2xl font-semibold mb-3"
                    style={{
                      color: "#1B5E20",
                      fontFamily: "Georgia, serif",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {confirmationLabel}
                  </h2>

                  {/* Message */}
                  <p
                    id="confirmation-modal-description"
                    className="text-center text-base leading-relaxed mb-6"
                    style={{
                      color: "#33691E",
                      maxWidth: "380px",
                      margin: "0 auto 24px",
                    }}
                  >
                    {confirmationMsg}
                  </p>

                  {/* Action Buttons */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <motion.button
                      type="button"
                      onClick={confirmationHandleClose}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        duration: 0.2,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      style={{
                        padding: "10px 24px",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#388E3C",
                        backgroundColor: "transparent",
                        border: "1.5px solid #66BB6A",
                        borderRadius: "8px",
                        cursor: "pointer",
                        minWidth: "120px",
                        transition:
                          "background-color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                        willChange: "transform",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#F1F8F4";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                    >
                      Cancel
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={confirmationSubmitFunc}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        duration: 0.2,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      style={{
                        padding: "10px 24px",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#FFFFFF",
                        background:
                          "linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%)",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        minWidth: "120px",
                        boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
                        transition:
                          "box-shadow 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                        willChange: "transform",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow =
                          "0 6px 16px rgba(76, 175, 80, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow =
                          "0 4px 12px rgba(76, 175, 80, 0.3)";
                      }}
                    >
                      {confirmationButtonMsg}
                    </motion.button>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Modal>
      )}
    </AnimatePresence>
  );
}
