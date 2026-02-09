import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Backdrop } from '@mui/material';

const CommonLoader = ({ 
  isLoading = false,
  size = 'medium',
  colors = {
    vata: '#059669',
    pitta: '#d97706',
    kapha: '#0891b2'
  },
  speed = 'normal',
  zIndex = 99999 // Increased default
}) => {
  
  // Disable scroll when loader is active
  useEffect(() => {
    if (isLoading) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isLoading]);

  const sizeConfig = {
    small: {
      container: 'w-20 h-20',
      outerCircle: 'w-16 h-16',
      outerRadius: 40,
      petal: 'w-10 h-10',
      petalTranslate: -12,
      center: 'w-8 h-8',
      dot: 'w-1.5 h-1.5'
    },
    medium: {
      container: 'w-32 h-32',
      outerCircle: 'w-24 h-24',
      outerRadius: 60,
      petal: 'w-16 h-16',
      petalTranslate: -20,
      center: 'w-12 h-12',
      dot: 'w-2 h-2'
    },
    large: {
      container: 'w-48 h-48',
      outerCircle: 'w-36 h-36',
      outerRadius: 90,
      petal: 'w-24 h-24',
      petalTranslate: -30,
      center: 'w-16 h-16',
      dot: 'w-3 h-3'
    }
  };

  const speedConfig = {
    slow: { rotation: 12, pulse: 3, dots: 2 },
    normal: { rotation: 8, pulse: 2, dots: 1.5 },
    fast: { rotation: 4, pulse: 1, dots: 1 }
  };

  const config = sizeConfig[size];
  const speedValues = speedConfig[speed];

  // Don't render anything if not loading
  if (!isLoading) return null;

  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: zIndex,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'fixed', // Explicitly set
      }}
      open={true} // Always true when rendered
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* Outer rotating circles */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: speedValues.rotation,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[
            { rotation: 0, color: colors.vata },
            { rotation: 120, color: colors.pitta },
            { rotation: 240, color: colors.kapha }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`absolute ${config.outerCircle} rounded-full border-2 opacity-40`}
              style={{
                borderColor: item.color,
                transform: `rotate(${item.rotation}deg) translateX(${config.outerRadius}px)`,
                boxShadow: `0 0 20px ${item.color}40`
              }}
            />
          ))}
        </motion.div>

        {/* Lotus petals */}
        <div className={`relative ${config.container} flex items-center justify-center`}>
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className={`absolute ${config.petal}`}
              style={{
                transformOrigin: 'center',
                rotate: `${index * 45}deg`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 0.9, 0.7]
              }}
              transition={{
                duration: speedValues.pulse,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut"
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${
                    index % 3 === 0 ? colors.vata : index % 3 === 1 ? colors.pitta : colors.kapha
                  }, transparent)`,
                  transform: `translateY(${config.petalTranslate}px)`,
                  filter: 'brightness(1.2)'
                }}
              />
            </motion.div>
          ))}

          {/* Center circle */}
          <motion.div
            className={`absolute ${config.center} rounded-full bg-gradient-to-br from-amber-400 to-orange-500`}
            style={{
              boxShadow: '0 0 40px rgba(251, 146, 60, 0.6), 0 0 80px rgba(251, 146, 60, 0.3)'
            }}
            animate={{
              scale: [1, 1.15, 1],
              boxShadow: [
                '0 0 40px rgba(251, 146, 60, 0.6), 0 0 80px rgba(251, 146, 60, 0.3)',
                '0 0 50px rgba(251, 146, 60, 0.8), 0 0 100px rgba(251, 146, 60, 0.5)',
                '0 0 40px rgba(251, 146, 60, 0.6), 0 0 80px rgba(251, 146, 60, 0.3)'
              ]
            }}
            transition={{
              duration: speedValues.pulse,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Animated dots */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`${config.dot} rounded-full`}
              style={{ 
                backgroundColor: colors.vata,
                boxShadow: `0 0 10px ${colors.vata}`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: speedValues.dots,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default CommonLoader;