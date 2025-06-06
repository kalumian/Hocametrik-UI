import React, { useState } from "react";
import RatingSlider from "./RatingSlider";

type SliderValuesType = {
  explanationPoint: number;
  accessibilityPoint: number;
  fairnessPoint: number;
  materialQualityPoint: number;
};

const Init: SliderValuesType = {
  explanationPoint: 0,
  accessibilityPoint: 0,
  fairnessPoint: 0,
  materialQualityPoint: 0,
};

const OverallEvaluationStep: React.FC = () => {
  const [SliderValues, setSliderValues] = useState<SliderValuesType>(Init);
  const handleSliderChange = (name: string, value: number) => {
    setSliderValues({ ...SliderValues, [name]: value });
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
        Detaylı Puanlamalar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="bg-white rounded-2xl shadow p-5">
          <RatingSlider
            label="Anlatım Kalitesi"
            value={SliderValues.explanationPoint}
            onChange={(val) => handleSliderChange("explanationPoint", val)}
          />
        </div>
        <div className="bg-white rounded-2xl shadow p-5">
          <RatingSlider
            label="Öğrenciye Erişilebilirlik"
            value={SliderValues.accessibilityPoint}
            onChange={(val) => handleSliderChange("accessibilityPoint", val)}
          />
        </div>
        <div className="bg-white rounded-2xl shadow p-5">
          <RatingSlider
            label="Notlandırma Adaleti"
            value={SliderValues.fairnessPoint}
            onChange={(val) => handleSliderChange("fairnessPoint", val)}
          />
        </div>
        <div className="bg-white rounded-2xl shadow p-5">
          <RatingSlider
            label="Ders Materyal Kalitesi"
            value={SliderValues.materialQualityPoint}
            onChange={(val) => handleSliderChange("materialQualityPoint", val)}
          />
        </div>
      </div>
    </div>
  );
};

export default OverallEvaluationStep;