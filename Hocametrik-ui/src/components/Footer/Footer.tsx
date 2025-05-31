import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import MainLogo from '../Logo/MainLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    whatsapp: "+90 XXX XXX XX XX",
    phone: "+90 XXX XXX XX XX"
  };

  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-50 to-white"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Contact Section */}
          <motion.div 
            className="flex flex-col space-y-4"
            variants={itemVariants}
          >
            <motion.a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
              className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="w-6 h-6" />
              <span className="font-medium">{contactInfo.whatsapp}</span>
            </motion.a>
            
            <motion.a
              href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="w-6 h-6" />
              <span className="font-medium">{contactInfo.phone}</span>
            </motion.a>
          </motion.div>

          {/* Logo Section */}
          <MainLogo /> 
        </div>

        {/* Copyright Section */}
        <motion.div 
          className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500"
          variants={itemVariants}
        >
          <p className="text-sm">
            © {currentYear} Hocametrik. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}