import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import University from './IUniversity';
import { Link } from 'react-router-dom';

interface Props {
  universities: University[];
}

export default function DesktopUniversities({ universities }: Props) {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-2 gap-6 p-6">
        {universities.map((university, index) => (
          <motion.div
            key={university.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center p-4">
                <img
                  src={university.logoUrl}
                  alt={university.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{university.name}</h2>
                <Link to={`/universities/${university.id}/faculties`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg
                              flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <FaSearch />
                    Fakülteleri Gör
                  </motion.button>
                </Link>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}