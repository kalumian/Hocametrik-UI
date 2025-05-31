import { motion } from 'framer-motion';
import { getScoreColor } from '../pages/Evaluation/IEvaluation';

interface Props {
  value: number;
  label: string;
}
export default function ProgressBar({ value, label }: Props) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`h-full rounded-full ${getScoreColor(value)}`}
        />
      </div>
    </div>
  );
}
