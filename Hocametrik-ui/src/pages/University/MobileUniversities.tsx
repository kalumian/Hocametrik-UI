import { motion } from 'framer-motion';
import {FaSearch } from 'react-icons/fa';
import University from './IUniversity';
import { Link } from 'react-router-dom';

interface Props {
  universities: University[];
}

export default function MobileUniversities({ universities }: Props) {
  return (
    <div className="md:hidden">
      <div className="space-y-4 p-4">
        {universities.map((university, index) => (
          <Link to={`/universities/${university.id}/faculties`} key={university.id}>
            <motion.div
            key={university.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4 my-3"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center p-2">
              <img
                src={university.logoUrl}
                alt={university.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{university.name}</h3>
                <button className="mt-2 text-blue-600 text-sm font-medium flex items-center gap-2">
                <FaSearch />
                Fakülteleri Gör
                </button>
            </div>
          </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}