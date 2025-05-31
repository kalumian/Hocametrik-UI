import { motion } from 'framer-motion';
import NavLinks, { NavLink } from './navLinks';
import { Link } from 'react-router-dom';

export default function DesktopNav({ links = NavLinks }: { links?: NavLink[] }) {
const navVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      type: "tween", // ✅ tween destekler
      ease: "easeInOut"
    }
  }
}

  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.2, 0.9, 1.1, 1],
      rotate: [0, 360],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const underlineVariants = {
    initial: { scaleX: 0 },
    hover: {
      scaleX: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
    {links.map((link) => (
      <motion.div
        key={link.id}
        initial="initial"
        whileHover="hover"
        className="relative"
      >
        <motion.div
          variants={navVariants}
          className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
        >
          <motion.div
            variants={iconVariants}
            className="text-blue-500"
          >
            <link.icon className="w-5 h-5" />
          </motion.div>
          <Link  to={link.href}>
            <span>{link.name}</span>
          </Link>
        </motion.div>
        <motion.div
          variants={underlineVariants}
          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left"
        />
      </motion.div>
    ))}
  </nav>
  );
}