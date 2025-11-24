import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function TrainedEmployeesBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      rotateY: 10 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const gradientBorderVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95 
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section ref={ref} className="relative w-full bg-white  overflow-hidden" >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          
          {/* Image Section */}
          <motion.div 
            className="relative flex justify-center"
            variants={imageVariants}
          >
            <motion.img 
              src="/images/TCA-cleaners.jpg"
              alt="Professionally Trained Employees"
              className="w-full max-w-4xl rounded-2xl shadow-lg object-cover h-[400px] lg:h-[500px]"
              loading="lazy"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            />
            {/* Animated overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-black/0 to-black/10 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            />
          </motion.div>

          {/* Content Box */}
          <motion.div 
            className="relative bg-gradient-to-br from-[#3a6c22] to-[#5a9430] text-white p-8 lg:p-12 rounded-2xl shadow-xl lg:-ml-16 z-10"
            variants={contentVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            
            {/* Gradient Border Effect */}
            <motion.div 
              className="absolute inset-0 rounded-2xl -z-10 p-[3px] bg-gradient-to-r from-[#3a6c22] to-[#CDE1B3]"
              variants={gradientBorderVariants}
            >
              <motion.div 
                className="w-full h-full bg-gradient-to-br from-[#3a6c22] to-[#5a9430] rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(135deg, #3a6c22 0%, #5a9430 100%)",
                    "linear-gradient(135deg, #3a6c22 0%, #5a9430 50%, #3a6c22 100%)",
                    "linear-gradient(135deg, #3a6c22 0%, #5a9430 100%)",
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>

            <motion.h2 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight"
              variants={textVariants}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Professionally
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Trained
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Employees
              </motion.span>
            </motion.h2>

            {/* Animated decorative elements */}
            <motion.div 
              className="flex space-x-2 mt-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="w-3 h-3 bg-white/60 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: item * 0.2
                  }}
                />
              ))}
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}