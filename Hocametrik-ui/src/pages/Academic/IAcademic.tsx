export default interface IAcademic {
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