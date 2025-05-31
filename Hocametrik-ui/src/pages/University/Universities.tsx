import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import University from './IUniversity';
import MobileUniversities from './MobileUniversities';
import DesktopUniversities from './DesktopUniversities';

const universities: University[] = [
  { id: 1, name: "Bandırma Onyedi Eylül Üniversitesi", logoUrl: "https://www.bandirma.edu.tr/Content/Web/images/logo_tr.png" },
  { id: 2, name: "Karabük Üniversitesi", logoUrl: "https://www.karabuk.edu.tr/assets/img/logo.png" },
  { id: 3, name: "Boğaziçi Üniversitesi", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/e/e2/Boğaziçi_Üniversitesi_Logo.png" }
];

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUniversities = useMemo(() => {
    return universities.filter((uni) =>
      uni.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-[120px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 p-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Akademisyenleri</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Değerlendir
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Üniversitenizi ve Fakültenizi seçin, akademisyenleri keşfedin ve değerlendirin.
          </p>
        </motion.div>

        {/* Arama alanı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto mt-6"
        >
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Üniversite ara..."
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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-gray-500 mt-2 text-center"
          >
            {filteredUniversities.length} üniversite bulundu
          </motion.p>
        </motion.div>

        {/* Üniversite kartları */}
        <MobileUniversities universities={filteredUniversities} />
        <DesktopUniversities universities={filteredUniversities} />
      </div>
    </div>
  );
}
