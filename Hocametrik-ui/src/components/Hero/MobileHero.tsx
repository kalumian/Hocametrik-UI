import { motion } from 'framer-motion';
import { FaChartBar, FaShieldAlt, FaStar, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 1,
    icon: FaChartBar,
    name: "İstatistiksel Analiz",
    description: "Akademik performansı analiz etmek için kapsamlı istatistikler"
  },
  {
    id: 2,
    icon: FaShieldAlt,
    name: "Güvenli ve Hızlı",
    description: "Yüksek performans ve güvenlikle çalışan platform"
  },
  {
    id: 3,
    icon: FaStar,
    name: "Kolay Değerlendirme",
    description: "Hızlı ve kullanıcı dostu değerlendirme sistemi"
  }
];

export default function MobileHero() {
  return (
    <motion.div 
    className="relative min-h-screen flex items-center overflow-hidden md:hidden"
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            <span className="text-blue-600 block mb-2">Hocametrik</span>
            {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Akademik Değerlendirme
            </span> */}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 mb-8 px-4"
          >
            Akademisyenler hakkında gerçek öğrenci deneyimlerini keşfedin.
          </motion.p>

          <motion.div className="grid grid-cols-1 gap-4 mb-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  delay: feature.id * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


          <Link to="/universities">
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl
                       font-semibold text-lg flex items-center justify-center gap-3
                       hover:bg-blue-700 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <span>Hemen Başla</span>
              <FaArrowRight />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}