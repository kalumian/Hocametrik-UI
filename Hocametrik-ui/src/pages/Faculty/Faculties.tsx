import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileFaculties from './MobileFaculties';
import DesktopFaculties from './DesktopFaculties';
import Faculty from './IFaculty';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

// بيانات وهمية
const fakeFaculties: Faculty[] = [
  { id: 1, name: "Mühendislik Fakültesi", universityId: 1 },
  { id: 2, name: "Fen Edebiyat Fakültesi", universityId: 1 },
  { id: 3, name: "Tıp Fakültesi", universityId: 1 },
  { id: 4, name: "Hukuk Fakültesi", universityId: 1 },
  { id: 5, name: "İşletme Fakültesi", universityId: 1 },
  { id: 6, name: "Mimarlık Fakültesi", universityId: 1 }
];

// ...existing fakeFaculties data...

export default function Faculties() {
  const { universityId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  // تصفية الكليات حسب الجامعة والبحث
  const filteredFaculties = fakeFaculties.filter(faculty => {
    const belongsToUniversity = faculty.universityId === Number(universityId);
    if (!searchTerm) return belongsToUniversity;

    const regex = new RegExp(searchTerm, 'i');
    return belongsToUniversity && regex.test(faculty.name);
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-[80px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-2 p-4"
        >
          {/* ...existing title and description... */}

          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto mt-6"
          >
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Fakülte ara..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                         transition-all duration-200 bg-white/80 backdrop-blur-sm"
              />
              {searchTerm && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 
                           text-gray-400 hover:text-gray-600"
                >
                  ×
                </motion.button>
              )}
            </div>
            {/* Search Results Count */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-500 mt-2"
            >
              {filteredFaculties.length} fakülte bulundu
            </motion.p>
          </motion.div>
        </motion.div>

        <MobileFaculties  faculties={filteredFaculties} universityId={Number(universityId)} />
        <DesktopFaculties faculties={filteredFaculties} universityId={Number(universityId)} />
      </div>
    </div>
  );
}