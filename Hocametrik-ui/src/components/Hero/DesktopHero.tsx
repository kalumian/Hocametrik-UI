import { motion } from 'framer-motion';
import { FaArrowRight, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function DesktopHero() {
  return (
    <motion.div
      className="relative min-h-screen hidden md:flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        </motion.div>

        <motion.div
          animate={{
            y: [-10, 10],
            transition: {
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }
          }}
          className="absolute top-20 right-20"
        >
          <FaGraduationCap className="text-blue-200 w-40 h-40 opacity-40" />
        </motion.div>
        <motion.div
          animate={{
            y: [-10, 10],
            transition: {
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }
          }}
          className="absolute left-20 bottom-20"
        >
          <FaUniversity className="text-blue-200 w-40 h-40 opacity-40" />
        </motion.div>
      </div>

      <div className="container mx-auto px-8 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl font-bold text-gray-900 mb-8"
          >
            <span className="text-blue-600">Türkiye'deki</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Akademisyenleri Değerlendirmenin
            </span>{" "}
            <br />
            <span className="mt-4 block">En İyi Yolu</span>
          </motion.h1>
          <Link to="/universities">
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-10 py-5 rounded-full
                      font-semibold text-xl flex items-center gap-3
                      hover:bg-blue-700 transition-colors duration-300
                      shadow-lg hover:shadow-xl mx-auto"
            >
              <span>Değerlendirmeye Başla</span>
              <FaArrowRight className="text-xl" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}