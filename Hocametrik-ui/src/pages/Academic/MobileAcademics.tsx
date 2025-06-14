import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import IAcademic from './IAcademic';
import { FaStar } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';

interface Props {
  academics: IAcademic[];
}

export default function MobileAcademics({ academics }: Props) {
  const { universityId, facultyId } = useParams<{ universityId: string; facultyId: string }>();
  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-green-600 bg-green-50';
    if (score >= 35) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="md:hidden space-y-4 p-4">
      {academics.map((academic, index) => (
        <motion.div
          key={academic.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-4 shadow-lg"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-lg">{academic.name}</h3>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center 
                           font-bold text-lg ${getScoreColor(academic.totalPointsAverage)}`}>
              {academic.totalPointsAverage}
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-2">
            <p>Değerlendirme Sayısı: {academic.evaluationsCount}</p>
            <p>Dersler: {academic.courses}</p>

            <div className="grid grid-cols-3 gap-2 mt-3">
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="font-semibold">{academic.explanationPointsAverage}</div>
                <div className="text-xs">Anlatım</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="font-semibold">{academic.accessibilityPointsAverage}</div>
                <div className="text-xs">Erişebilirlik</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="font-semibold">{academic.fairnessPointsAverage}</div>
                <div className="text-xs">Notlandırma</div>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded">
                <div className="font-semibold">{academic.materialQualityPointsAverage}</div>
                <div className="text-xs">Ders Materyali</div>
              </div>
            </div>
            <Link to={`/universities/${universityId}/faculties/${facultyId}/academics/${academic.id}/evaluations`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-blue-50 text-blue-600 px-4 py-2.5 rounded-xl
                         flex items-center justify-center gap-2 font-medium
                         hover:bg-blue-100 transition-colors duration-200"
              >
                <FaStar className="text-yellow-400" />
                <span>Değerlendirmeleri Gör</span>
                <span className="bg-blue-100 px-2 py-0.5 rounded-full text-xs">
                  {academic.evaluationsCount}
                </span>
              </motion.button>
            </Link>
            <Link to={`/universities/${universityId}/faculties/${facultyId}/academics/${academic.id}/evaluation-form`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 bg-gradient-to-r from-green-50 to-green-100 
                           text-green-600 px-6 py-3 rounded-xl
                           flex items-center justify-center gap-3 font-medium
                           hover:from-green-100 hover:to-green-200 
                           transition-all duration-200 group"
              >
                <motion.span
                  whileHover={{
                    y: [0, -4, 0], // 3 kademeli zıplama
                    rotate: [0, 15, -15, 0], // Sallanma
                    transition: {
                      duration: 0.6,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <FaComment className="text-green-500" />
                </motion.span>
                <span>Yorum Yap</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}