import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Faculty from './IFaculty';
import { facultyIcons, getRandomIcon } from './getRandomIcon';

interface Props {
  faculties: Faculty[];
  universityId: number;
}

export default function DesktopFaculties({ faculties, universityId }: Props) {
  const [icons, setIcons] = useState<{ [key: number]: typeof facultyIcons[0] }>(
    faculties.reduce((acc, faculty) => ({
      ...acc,
      [faculty.id]: getRandomIcon()
    }), {})
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFaculty = faculties[Math.floor(Math.random() * faculties.length)];
      if (randomFaculty) {
        setIcons(prev => ({
          ...prev,
          [randomFaculty.id]: getRandomIcon()
        }));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [faculties]);

  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-3 gap-6 p-6">
        {faculties.map((faculty, index) => {
          const Icon = icons[faculty.id];
          return (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                       transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={Icon.toString()}
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        rotate: -180
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.5,
                        rotate: 180
                      }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className="absolute inset-0 bg-blue-50 rounded-full 
                               flex items-center justify-center"
                    >
                      <Icon className="w-10 h-10 text-blue-600" />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-4 mb-4">
                  {faculty.name}
                </h2>
                <Link to={`/universities/${universityId}/faculties/${faculty.id}/academics`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl
                             flex items-center gap-2 text-sm font-medium
                             hover:bg-blue-700 transition-colors group cursor-pointer"
                  >
                    <span>Akademisyenleri Gör</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 
