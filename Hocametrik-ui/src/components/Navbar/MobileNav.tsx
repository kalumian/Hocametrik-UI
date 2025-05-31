import { motion, AnimatePresence } from 'framer-motion';
import navLinks,{ NavLink } from './navLinks';
import { Link } from 'react-router-dom';

interface MobileNavProps {
  links: NavLink[];
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileNav({ links = navLinks, isOpen, onToggle }: MobileNavProps) {
  const mobileMenuVariants = {
    initial: { 
      y: -10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100
      }
    },
    exit: {
      y: -10,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none z-50 transition-colors duration-200"
      >
        <motion.div 
          animate={{ 
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 top-[72px] bg-gradient-to-b from-white to-gray-50 z-40 shadow-lg"
          >
            <div className="container mx-auto py-6 px-4">
              <div className="flex flex-col space-y-4">
                {links.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: link.id * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 10,
                      backgroundColor: "rgba(59, 130, 246, 0.1)" // blue-500 with opacity
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      backgroundColor: "rgba(59, 130, 246, 0.2)"
                    }}
                    className="w-full text-gray-700 hover:text-blue-600 text-lg font-medium 
                             flex items-center gap-2 p-4 rounded-lg transition-all duration-200
                             hover:shadow-md active:shadow-inner"
                  >
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2
                      }}
                      whileTap={{ scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-500"
                    >
                      <link.icon className="w-6 h-6" />
                    </motion.div>     <Link to={link.href} onClick={onToggle}>
                    <span className="relative">
                      {link.name}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
          </Link>
               
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}