import React from "react";
import { motion } from "framer-motion";

export default function TCABanner() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Section */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative h-80 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="/images/My-TCA-App.jpg"
                alt="MyTCA App Banner"
                className="w-full h-full object-cover"
                loading="lazy"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#66a038]/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              
              {/* Animated Decorative Elements */}
              <motion.div 
                className="absolute top-4 right-4 w-24 h-24 bg-[#66a038]/10 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-6 left-6 w-16 h-16 bg-[#66a038]/10 rounded-full blur-lg"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div 
              className="bg-gradient-to-br from-[#66a038] to-[#5a9430] h-64 lg:h-72 rounded-3xl shadow-2xl relative z-50 flex items-center justify-center p-8"
              animate={{ 
                boxShadow: [
                  "0 25px 50px -12px rgba(102, 160, 56, 0.25)",
                  "0 25px 50px -12px rgba(102, 160, 56, 0.4)",
                  "0 25px 50px -12px rgba(102, 160, 56, 0.25)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Main Heading */}
              <motion.div 
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 20px rgba(255,255,255,0.3)",
                      "0 0 0px rgba(255,255,255,0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  MyTCA{" "}
                 
                    App
                </motion.h1>
              </motion.div>

              {/* Floating particles */}
              <motion.div 
                className="absolute top-4 left-8 w-3 h-3 bg-white rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.5
                }}
              />
              <motion.div 
                className="absolute bottom-6 right-10 w-2 h-2 bg-white rounded-full"
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 1
                }}
              />
              <motion.div 
                className="absolute top-10 right-16 w-1 h-1 bg-white rounded-full"
                animate={{ 
                  y: [0, -6, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.5
                }}
              />
            </motion.div>

            {/* Background glow effect */}
            <motion.div 
              className="absolute -inset-4 bg-[#66a038]/20 rounded-3xl blur-xl -z-10"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Animated Background Decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 bg-[#66a038]/5 rounded-full -translate-y-36 translate-x-36 blur-3xl"
        animate={{ 
          x: [144, 154, 144],
          y: [-144, -134, -144]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#66a038]/3 rounded-full translate-y-48 -translate-x-48 blur-3xl"
        animate={{ 
          x: [-192, -182, -192],
          y: [192, 202, 192]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}