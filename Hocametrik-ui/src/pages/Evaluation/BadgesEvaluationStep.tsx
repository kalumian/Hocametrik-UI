import React, { useState } from "react";
import EnBadge, { getBadgeColor } from "./EnBadge";
import EnRank from "./EnRank";

const BadgesEvaluationStep: React.FC = () => {
  const [Badges, setBadges] = useState<EnBadge[]>([]);
  const [Rank, setRank] = useState<string>("");

  const handleBadgeToggle = (badge: EnBadge) => {
    if (Badges.includes(badge)) {
      setBadges(Badges.filter(selectedBadge => selectedBadge !== badge));
    } else {
      setBadges([...Badges, badge]);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-0 items-stretch justify-center">
      {/* يمين: التقييم العام */}
      <div className="flex-1 bg-white rounded-2xl shadow border border-blue-100 p-8 flex flex-col justify-center items-center">
        <label className="block text-lg font-bold text-blue-700 mb-4">
          Genel Değerlendirme Notu
        </label>
        <select
          name="rank"
          value={Rank}
          onChange={(e) => setRank(e.target.value)}
          className="w-full max-w-xs px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg font-semibold text-blue-700 bg-blue-50"
        >
          <option value="" disabled>Seçiniz</option>
          {Object.values(EnRank).map(rank => (
            <option key={rank} value={rank}>
              {rank}
            </option>
          ))}
        </select>
      </div>
      {/* فاصل رأسي */}
      <div className="hidden md:block w-[2px] bg-gradient-to-b from-blue-100 via-purple-100 to-blue-100 mx-4 rounded-full" />
      {/* يسار: البادجات */}
      <div className="flex-1 bg-white rounded-2xl shadow border border-purple-100 p-8 flex flex-col">
        <label className="block text-lg font-bold text-purple-700 mb-4">
          Ders Özellikleri (Çoklu seçim)
        </label>
        <p className="text-sm text-gray-500 mb-3">
          En fazla <span className="font-semibold text-purple-600">5</span> özellik seçebilirsiniz.
        </p>
        <div className="flex flex-wrap gap-3">
          {Object.values(EnBadge).map(badge => (
            <button
              key={badge}
              type="button"
              onClick={() => handleBadgeToggle(badge)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border
                ${Badges.includes(badge)
                  ? `${getBadgeColor(badge)} shadow-inner border-blue-400 scale-105`
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50 border-gray-200'
                }`}
            >
              {badge}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BadgesEvaluationStep;