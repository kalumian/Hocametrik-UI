import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

import IEvaluation, { getScoreColor } from "./IEvaluation";

import Badge, { getBadgeColor } from "./EnBadge";
import Rank, { getRankColor } from "./EnRank";
import ProgressBar from '../../components/ProgressBar';

const mockEvaluations: IEvaluation[] = [
  {
    id: 1,
    content: "Dersi çok iyi anlatıyor ve öğrencilere karşı anlayışlı.",
    badges: [Badge.AnlatimIyi, Badge.Yardımsever, Badge.BonusVeriyor],
    rank: Rank.AA,
    explanationPoint: 90,
    attitudePoint: 85,
    supportPoint: 88,
    courseName: "Veri Yapıları",
    createdAt: new Date("2024-03-15"),
    staffMemberId: 1
  },
  {
    id: 2,
    content: "Sınavları zor ve not verirken çok sert.",
    badges: [Badge.ZorSinavlar, Badge.SertNotlandirma, Badge.CokOdev],
    rank: Rank.CC,
    explanationPoint: 45,
    attitudePoint: 30,
    supportPoint: 25,
    courseName: "Algoritma Analizi",
    createdAt: new Date("2024-03-10"),
    staffMemberId: 1
  }
];

export default function Evaluations() {
  const { academicId } = useParams();
  const evaluations = mockEvaluations.filter(
    evaluation => evaluation.staffMemberId === Number(academicId)
  );

  const getAverageScore = (key: 'explanationPoint' | 'attitudePoint' | 'supportPoint') => {
    return Math.round(
      evaluations.reduce((sum, evaluation) => sum + evaluation[key], 0) / evaluations.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-[110px]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold">
              Dr. Ahmet Yılmaz
            </h1>
            <div className="flex justify-center items-center gap-2">
              <div className="text-sm text-gray-600">
                {evaluations.length} değerlendirme
              </div>
              <div className={`px-4 py-2 rounded-full text-lg font-bold
                           ${getScoreColor(getAverageScore('explanationPoint'))}`}>
                {getAverageScore('explanationPoint')}
              </div>
            </div>
          </motion.div>

          {/* Score Bars */}
          <div className="max-w-md mx-auto mt-8 space-y-4">
            <ProgressBar 
              value={getAverageScore('explanationPoint')} 
              label="Anlatım" 
            />
            <ProgressBar 
              value={getAverageScore('attitudePoint')} 
              label="Tutum" 
            />
            <ProgressBar 
              value={getAverageScore('supportPoint')} 
              label="Destek" 
            />
          </div>
        </div>

        {/* Evaluations List */}
        <div className="space-y-6 mb-4">
          {evaluations.map((evaluation) => (
            <motion.div
              key={evaluation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {evaluation.badges.map((badge) => (
                  <span
                    key={badge}
                    className={`px-3 py-1 rounded-full text-sm ${getBadgeColor(badge)}`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-4">{evaluation.content}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <ProgressBar 
                  value={evaluation.explanationPoint} 
                  label="Anlatım" 
                />
                <ProgressBar 
                  value={evaluation.attitudePoint} 
                  label="Tutum" 
                />
                <ProgressBar 
                  value={evaluation.supportPoint} 
                  label="Destek" 
                />
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center gap-4">
                  <span>{evaluation.courseName}</span>
                  <span className={`px-2 py-1 rounded-full ${getRankColor(evaluation.rank )}`}>
                    {evaluation.rank}
                  </span>
                </div>
                <div>
                  {new Date(evaluation.createdAt).toLocaleDateString('tr-TR')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}