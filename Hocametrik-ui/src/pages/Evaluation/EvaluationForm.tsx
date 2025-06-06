import { motion } from 'framer-motion';
import { useState } from 'react';
import Stepper from './Stepper';
import OverallEvaluationStep from './OverallEvaluationStep';
import BadgesEvaluationStep from './BadgesEvaluationStep';
import TextualevaluationStep from './TextualevaluationStep';
import { FaCheck, FaChevronLeft, FaChevronRight, FaUserTie, FaBookOpen, FaStar } from 'react-icons/fa';

export interface IAcademic {
  id: number;
  name: string;
  evaluationsCount: number;
  explanationPointsAverage: number;
  accessibilityPointsAverage: number;
  fairnessPointsAverage: number;
  materialQualityPointsAverage: number;
  totalPointsAverage: number;
  courses: string;
}

// مثال بيانات دكتور (يمكنك استبدالها ببيانات حقيقية من API)
const academic: IAcademic = {
  id: 1,
  name: "Dr. Ahmet Yılmaz",
  evaluationsCount: 42,
  explanationPointsAverage: 4.5,
  accessibilityPointsAverage: 4.2,
  fairnessPointsAverage: 4.7,
  materialQualityPointsAverage: 4.3,
  totalPointsAverage: 4.4,
  courses: "Matematik, İstatistik"
};

const EvaluationForm: React.FC = () => {
  const [stepNumber, setStepNumber] = useState(1);

  const NextStep = () => setStepNumber((prev) => (prev < 3 ? prev + 1 : prev));
  const PrevStep = () => setStepNumber((prev) => (prev > 1 ? prev - 1 : prev));
  const OnSubmit = () => alert("Gönderildi!");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white flex items-center justify-center px-2 md:px-0 py-[140px]">
      <div className="w-full max-w-6xl bg-white/95 rounded-3xl shadow-2xl border border-blue-100 p-4 md:p-12 relative transition-all duration-300">
        {/* معلومات الدكتور */}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-full p-4 text-white text-3xl shadow">
              <FaUserTie />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-blue-900">{academic.name}</div>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <FaBookOpen className="text-blue-400" /> {academic.courses}
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-xs">Toplam Puan</span>
              <span className="text-2xl font-bold text-yellow-500 flex items-center gap-1">
                <FaStar /> {academic.totalPointsAverage.toFixed(1)}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-xs">Açıklama</span>
              <span className="text-lg font-semibold text-blue-700">{academic.explanationPointsAverage.toFixed(1)}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-xs">Erişilebilirlik</span>
              <span className="text-lg font-semibold text-blue-700">{academic.accessibilityPointsAverage.toFixed(1)}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-xs">Adalet</span>
              <span className="text-lg font-semibold text-blue-700">{academic.fairnessPointsAverage.toFixed(1)}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-xs">Materyal</span>
              <span className="text-lg font-semibold text-blue-700">{academic.materialQualityPointsAverage.toFixed(1)}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-xs">Değerlendirme</span>
              <span className="text-lg font-semibold text-purple-700">{academic.evaluationsCount}</span>
            </div>
          </div>
        </div>
        {/* نهاية معلومات الدكتور */}

        <Stepper stepNumber={stepNumber} />
        <motion.div
          key={stepNumber}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="min-h-[320px] flex items-center justify-center text-center text-lg font-medium text-gray-700"
        >
          {stepNumber === 1 && <OverallEvaluationStep />}
          {stepNumber === 2 && <BadgesEvaluationStep />}
          {stepNumber === 3 && <TextualevaluationStep />}
        </motion.div>
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12 gap-4">
          {stepNumber > 1 ? (
            <motion.button
              onClick={PrevStep}
              whileHover={{ scale: 1.08, x: -4 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 text-gray-700 text-lg font-bold shadow hover:from-blue-100 hover:to-purple-100 transition-all duration-200 cursor-pointer"
            >
              <FaChevronLeft /> Geri
            </motion.button>
          ) : (
            <div />
          )}
          {stepNumber < 3 ? (
            <motion.button
              onClick={NextStep}
              whileHover={{ scale: 1.08, x: 4 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-12 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 cursor-pointer"
            >
              İleri <FaChevronRight />
            </motion.button>
          ) : (
            <motion.button
              onClick={OnSubmit}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-12 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg font-bold shadow-xl hover:from-green-600 hover:to-blue-600 transition-all duration-200"
            >
              <FaCheck /> Gönder
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EvaluationForm;