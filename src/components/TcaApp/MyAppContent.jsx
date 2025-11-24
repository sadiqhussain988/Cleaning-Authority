import React from "react";
import { motion } from "framer-motion";

export default function MyAppContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="GeneralContent" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-60px]">
        {/* Header */}
        <motion.div 
          className="text-center mb-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight"
            variants={itemVariants}
          >
            MyTCA <motion.span 
              className="text-[#66a038]"
              animate={{ 
                color: ["#66a038", "#5a9430", "#66a038"],
                textShadow: ["0 0 0px #66a038", "0 0 10px #66a038", "0 0 0px #66a038"]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Mobile App
            </motion.span>
          </motion.h1>
          <motion.div 
            className="w-24 h-1.5 bg-[#66a038] rounded-full mx-auto"
            variants={itemVariants}
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Highlight paragraph + image */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Left Text */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div 
              className="bg-gradient-to-br from-[#f8fcf5] to-[#f0f7e9] p-8 rounded-2xl shadow-lg border-l-4 border-[#66a038]"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px -10px rgba(102, 160, 56, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.p 
                className="text-xl text-[#4a7c2a] leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                The new MyTCA Mobile App was created as a seamless and efficient platform
                for our customers to quickly and easily manage their cleans on-the-go.
              </motion.p>
            </motion.div>

            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                It's simple. Once you download the application to your smartphone,
                register or log in with your existing TCA portal credentials. Select when
                you want to receive updates regarding the status of your clean and manage
                the details of upcoming cleans wherever you are. This new application
                increases accessibility and customization of the program, which allows
                for a more user-friendly experience.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="flex justify-center relative"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="/images/PhoneWelcomePage.jpg"
                alt="Screenshot of MyTCA app on phone"
                className="rounded-3xl shadow-2xl w-full max-w-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#66a038] rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#66a038] rounded-full opacity-70"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-lg mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Manage Everything All in One Place
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-[#66a038] rounded-full mx-auto"
              variants={itemVariants}
              animate={{
                scaleX: [1, 2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.p 
            className="text-xl text-gray-700 text-center mb-10 font-semibold"
            variants={itemVariants}
          >
            Using the MyTCA app, you can:
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {[
              "Track the team assigned to your clean",
              "Be notified on the status of your clean",
              "View the details of your upcoming clean",
              "Request a room be added or removed (at least 48 hours prior to clean)",
              "Request a reschedule",
              "Submit feedback",
              "Tip your Professional Housecleaners"
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-4 group"
                variants={featureVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-6 h-6 bg-[#66a038] rounded-full flex items-center justify-center mt-1"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>
                <motion.span 
                  className="text-lg text-gray-800 leading-relaxed"
                  whileHover={{ color: "#1f2937" }}
                  transition={{ duration: 0.2 }}
                >
                  {feature}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            className="text-lg text-gray-700 text-center mt-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We are dedicated to providing an effortless and stress-free customer experience,
            which means access to the MyTCA portal from anywhere.
          </motion.p>
        </motion.div>

        {/* Download Section */}
        <motion.div 
          className="text-center bg-[#DFEEF5] rounded-3xl px-16 py-10 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="max-w-2xl mx-auto">
            <motion.h3 
              className="text-4xl font-bold text-[#4a7c2a] mb-6"
              variants={itemVariants}
              animate={{ 
                scale: [1, 1.02, 1],
                textShadow: ["0 0 0px #4a7c2a", "0 0 10px #4a7c2a", "0 0 0px #4a7c2a"]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Download the MyTCA App Today!
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-700 mb-10 max-w-xl mx-auto"
              variants={itemVariants}
            >
              Get started with our mobile app and experience seamless cleaning service management.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              variants={containerVariants}
            >
              <motion.a
                href="https://apps.apple.com/us/app/the-cleaning-authority/id1497016039"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#66a038] text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg min-w-[200px] text-center"
                variants={buttonVariants}
                whileHover="hover"
                animate="visible"
              >
                <div className="flex items-center justify-center space-x-3">
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </motion.svg>
                  <span>App Store</span>
                </div>
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.thecleaningauthority.mytca&hl=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#66a038] text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg min-w-[200px] text-center"
                variants={buttonVariants}
                whileHover="hover"
                animate="visible"
              >
                <div className="flex items-center justify-center space-x-3">
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.25.92-.59 1.19l-2.01 1.25-2.36-2.36 2.36-2.36 2.01 1.25m-5.57-3.46L6.05 2.66l10.76 10.76-2.27 2.27z"/>
                  </motion.svg>
                  <span>Google Play</span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}