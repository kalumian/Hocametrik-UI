import Badge from "./EnBadge";
import Rank from "./EnRank";

export const getScoreColor = (score: number): string => {
  if (score >= 75) return "bg-green-500";
  if (score >= 35) return "bg-yellow-500";
  return "bg-red-500";
};
export default interface IEvaluation {
  id: number;
  content: string;
  badges: Badge[];
  rank: Rank;
  explanationPoint: number;
  accessibilityPoint: number;
  fairnessPoint: number;
  materialQualityPoint: number;
  courseName: string;
  createdAt: Date;
  staffMemberId: number;
  staffMemberName: string;
}
