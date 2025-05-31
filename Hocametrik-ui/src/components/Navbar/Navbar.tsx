import { useState } from 'react';
import { motion } from 'framer-motion';
import navLinks from './navLinks';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MainLogo from '../Logo/MainLogo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-full shadow-md bg-white fixed top-0 left-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
      <MainLogo /> 

        <DesktopNav links={navLinks} />
        <MobileNav 
          links={navLinks} 
          isOpen={menuOpen} 
          onToggle={() => setMenuOpen(!menuOpen)} 
        />
      </div>
    </motion.header>
  );
}