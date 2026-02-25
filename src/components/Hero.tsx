import { ArrowRight, MessageSquare, BarChart, Target, ChartBar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import khyatiPortrait from "@/assets/khyati-portrait.png";

const Hero = () => {
  const isMobile = useIsMobile();
  const [showBubble, setShowBubble] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to Khyati's Portfolio!";

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showBubble) return;
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [showBubble]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3, duration: 0.8 }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container relative overflow-hidden min-h-[65vh] sm:min-h-[70vh] md:min-h-[600px] lg:min-h-[650px] w-full bg-gradient-to-br from-[#0f0c29] via-[#1a1040] to-[#24243e]">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: 100 + i * 60,
                height: 100 + i * 60,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.03, 0.08, 0.03],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[65vh] sm:min-h-[70vh] md:min-h-[600px] lg:min-h-[650px] pt-20 pb-10">
          {/* 3D Avatar Section */}
          <motion.div
            className="relative mb-6"
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 80 }}
          >
            {/* Glow ring behind avatar */}
            <motion.div
              className="absolute -inset-3 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #f97316, #3b82f6, #8b5cf6, #ec4899, #f97316)",
                filter: "blur(12px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Avatar container with 3D hover */}
            <motion.div
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.08, rotateY: 10, rotateX: -5 }}
              animate={{
                rotateY: [0, 3, -3, 0],
                rotateX: [0, -2, 2, 0],
              }}
              transition={{
                rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ perspective: 800, transformStyle: "preserve-3d" }}
            >
              <img
                src={khyatiPortrait}
                alt="Khyati Chauhan - Marketing Analyst"
                className="w-full h-full object-cover object-top"
              />
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Wave hand emoji */}
            <motion.div
              className="absolute -right-2 -top-2 text-3xl sm:text-4xl"
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.div>
          </motion.div>

          {/* Speech bubble */}
          <AnimatePresence>
            {showBubble && (
              <motion.div
                className="relative mb-6 max-w-md"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/30 relative">
                  {/* Bubble arrow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-t border-white/30" />
                  <p className="text-gray-800 font-medium text-center text-base sm:text-lg relative z-10">
                    {typedText}
                    <motion.span
                      className="inline-block w-0.5 h-5 bg-gray-800 ml-0.5 align-middle"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Text content */}
          <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight" variants={itemVariants}>
              Khyati Chauhan
            </motion.h1>
            <motion.h2 className="text-xl md:text-2xl font-semibold text-gray-300 mt-2" variants={itemVariants}>
              Marketing Analyst
            </motion.h2>
            <motion.p className="text-gray-400 mt-4 sm:mt-5 text-center mx-auto max-w-2xl text-sm sm:text-base" variants={itemVariants}>
              Strategic Marketing Analyst with 4+ years of experience in advanced analytics, omnichannel performance, and AI-driven insights that deliver measurable business outcomes.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
              <button
                className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-white/90 text-gray-800 rounded-lg hover:bg-white transition-all shadow-lg flex items-center justify-center group text-sm sm:text-base font-medium"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Experience
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all shadow-lg flex items-center justify-center group text-sm sm:text-base font-medium"
                onClick={scrollToContact}
              >
                Get In Touch
                <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <BarChart className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Data Analytics</h3>
            <p className="text-gray-600 text-xs md:text-sm">Advanced analytics using Power BI, Python, and SQL to drive business decisions.</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Target className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Campaign Optimization</h3>
            <p className="text-gray-600 text-xs md:text-sm">A/B testing and performance analysis to maximize marketing ROI and engagement.</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <ChartBar className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Predictive Modeling</h3>
            <p className="text-gray-600 text-xs md:text-sm">Machine learning models to forecast customer behavior and business outcomes.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
