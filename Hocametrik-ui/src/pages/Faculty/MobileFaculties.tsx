import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Faculty from './IFaculty';
import { facultyIcons, getRandomIcon } from './getRandomIcon';

interface Props {
  faculties: Faculty[];
  universityId: number;
}

export default function MobileFaculties({ faculties, universityId }: Props) {
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
    <div className="md:hidden px-4 py-6">
      <div className="space-y-4">
        {faculties.map((faculty, index) => {
          const Icon = icons[faculty.id];
          return (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
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
                      <Icon className="w-6 h-6 text-blue-600" />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{faculty.name}</h3>
                  <Link to={`/universities/${universityId}/faculties/${faculty.id}/academics`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-2 text-blue-600 text-sm font-medium 
                               flex items-center gap-2 group"
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
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}