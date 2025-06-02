import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaSort } from 'react-icons/fa';
import MobileAcademics from './MobileAcademics';
import DesktopAcademics from './DesktopAcademics';
import IAcademic from './IAcademic';


const mockAcademics: IAcademic[] = [
  {
    id: 1,
    name: "Dr. Ahmet Yılmaz",
    evaluationsCount: 45,
    explanationPointsAverage: 85,
    accessibilityPointsAverage: 90,
    fairnessPointsAverage: 88,
    materialQualityPointsAverage: 92,
    totalPointsAverage: 88,
    courses: "Matematik, Fizik"
  },
  {
    id: 2,
    name: "Dr. Ayşe Kaya",
    evaluationsCount: 32,
    explanationPointsAverage: 65,
    accessibilityPointsAverage: 90,
    fairnessPointsAverage: 88,
    materialQualityPointsAverage: 92,
    totalPointsAverage: 68,
    courses: "Kimya"
  },
  {
    id: 3,
    name: "Prof. Mehmet Demir",
    evaluationsCount: 28,
    explanationPointsAverage: 30,
    accessibilityPointsAverage: 90,
    fairnessPointsAverage: 88,
    materialQualityPointsAverage: 92,
    totalPointsAverage: 29,
    courses: "Biyoloji"
  },
  {
    id: 4,
    name: "Dr. Elif Çelik",
    evaluationsCount: 50,
    explanationPointsAverage: 95,
    accessibilityPointsAverage: 90,
    fairnessPointsAverage: 88,
    materialQualityPointsAverage: 92,
    totalPointsAverage: 94,
    courses: "Felsefe, Psikoloji"
  },
  {
    id: 5,
    name: "Prof. Ali Can",
    evaluationsCount: 60,
    explanationPointsAverage: 80,
    accessibilityPointsAverage: 90,
    fairnessPointsAverage: 88,
    materialQualityPointsAverage: 92,
    totalPointsAverage: 82,
    courses: "Tarih, Coğrafya"
  }
];

export default function Academics() {
  const { facultyId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortByHighest, setSortByHighest] = useState(true);
  const [filteredAcademics, setFilteredAcademics] = useState(mockAcademics);

  useEffect(() => {
    let results = mockAcademics.filter(academic => {
      const regex = new RegExp(searchTerm, 'i');
      return regex.test(academic.name);
    });

    results = results.sort((a, b) => {
      return sortByHighest
        ? b.totalPointsAverage - a.totalPointsAverage
        : a.totalPointsAverage - b.totalPointsAverage;
    });

    setFilteredAcademics(results);
  }, [searchTerm, sortByHighest]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-[110px]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-2 p-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Akademisyen</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Değerlendirmeleri
            </span>
          </h1>

          <div className="max-w-2xl mx-auto mt-6 space-y-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Akademisyen ara..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                         transition-all duration-200"
              />
            </div>

            <motion.button
              onClick={() => setSortByHighest(!sortByHighest)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 mx-auto px-4 py-2 rounded-lg
                       bg-white border border-gray-200 text-gray-700 text-sm"
            >
              <FaSort />
              {sortByHighest ? "En Yüksek Puan" : "En Düşük Puan"}
            </motion.button>
          </div>
        </motion.div>

        <MobileAcademics academics={filteredAcademics} />
        <DesktopAcademics academics={filteredAcademics} />
      </div>
    </div>
  );
}