import React, { useState } from "react";

const TextualevaluationStep: React.FC = () => {
  const [content, setContent] = useState<string>("");

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <label className="block text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-2">
        Değerlendirme Yorumunuz*
      </label>
      <textarea
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={7}
        className="w-full max-w-2xl px-6 py-4 border-2 border-blue-200 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-400 text-lg shadow bg-white resize-none transition-all duration-300"
        placeholder="Ders ve akademisyen hakkındaki deneyimlerinizi detaylı şekilde paylaşın..."
        required
      />
      <p className="text-sm text-gray-500 text-center">
        Lütfen yalnızca kendi deneyimlerinizi yazın. Topluluk kurallarını okuduğunuzdan emin olun.
      </p>
    </div>
  );
};

export default TextualevaluationStep;