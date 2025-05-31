import { motion } from 'framer-motion';
import IAcademic from './IAcademic';
import { Link, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

interface Props {
  academics: IAcademic[];
}

export default function DesktopAcademics({ academics }: Props) {
    const {universityId, facultyId } = useParams<{ universityId: string; facultyId: string }>();

  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 35) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  return (
    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {academics.map((academic, index) => (
        <motion.div
          key={academic.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{academic.name}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {academic.evaluationsCount} değerlendirme
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`w-16 h-16 rounded-full flex items-center justify-center 
                         font-bold text-2xl border-2 ${getScoreColor(academic.totalPointsAverage)}`}
            >
              {academic.totalPointsAverage}
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-lg">{academic.explanationPointsAverage}</div>
              <div className="text-sm text-gray-600">Anlatım</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-lg">{academic.attitudePointsAverage}</div>
              <div className="text-sm text-gray-600">Tutum</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-lg">{academic.supportPointsAverage}</div>
              <div className="text-sm text-gray-600">Destek</div>
            </div>
          </div>
          <Link to={`/universities/${universityId}/faculties/${facultyId}/academics/${academic.id}/evaluations`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 bg-gradient-to-r from-blue-50 to-blue-100 
                       text-blue-600 px-6 py-3 rounded-xl
                       flex items-center justify-center gap-3 font-medium
                       hover:from-blue-100 hover:to-blue-200 
                       transition-all duration-200 group"
            >
              <FaStar className="text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
              <span>Değerlendirmeleri Gör</span>
              <span className="bg-blue-200 px-3 py-0.5 rounded-full text-sm">
                {academic.evaluationsCount}
              </span>
            </motion.button>
          </Link>
          <div className="text-sm text-gray-600 mt-2">
            <p><span className="font-medium">Dersler:</span> {academic.courses}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}