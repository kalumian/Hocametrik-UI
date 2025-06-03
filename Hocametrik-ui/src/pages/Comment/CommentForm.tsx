import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EnBadge from '../Evaluation/EnBadge';
import EnRank from '../Evaluation/EnRank';
import { getBadgeColor } from '../Evaluation/EnBadge';
import { FaStar, FaComment, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

export default function EvaluationForm() {
    const { universityId, facultyId, academicId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        content: '',
        courseName: '',
        rank: EnRank.AA,
        badges: [] as EnBadge[],
        explanationPoint: 50,
        accessibilityPoint: 50,
        fairnessPoint: 50,
        materialQualityPoint: 50
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBadgeToggle = (badge: EnBadge) => {
        setFormData(prev => ({
            ...prev,
            badges: prev.badges.includes(badge)
                ? prev.badges.filter(b => b !== badge)
                : [...prev.badges, badge]
        }));
    };

    const handleSliderChange = (name: string, value: number) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Değerlendirme gönderildi:', formData);
        navigate(`/universities/${universityId}/faculties/${facultyId}/academics/${academicId}/evaluations`);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
                {/* Left Column - Guidelines */}
                <div className="lg:col-span-1 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <FaExclamationTriangle className="text-yellow-500" />
                            Değerlendirme Kuralları
                        </h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <span>Yalnızca kendi deneyimlerinizi paylaşın</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <span>Nesnel ve yapıcı eleştiriler yapın</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <span>Kişisel saldırı veya aşağılayıcı ifadeler kullanmayın</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <span>Doğruluğundan emin olmadığınız bilgileri paylaşmayın</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <span>Topluluk kurallarımıza uyun</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-blue-50 p-6 rounded-xl border border-blue-200"
                    >
                        <h3 className="font-bold text-blue-500 mb-3">Neden Önemli?</h3>
                        <p className="text-blue-500">
                            Paylaştığınız değerlendirmeler, diğer öğrencilerin akademisyen seçimlerinde yol gösterici olacaktır.
                            Lütfen dürüst ve gerçekçi değerlendirmeler yaparak topluluğumuza katkı sağlayın.
                        </p>
                    </motion.div>
                </div>

                {/* Right Column - Form */}
                <div className="lg:col-span-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                    >
                        {/* Form Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                            <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                                <FaStar className="text-yellow-300" />
                                Akademisyen Değerlendirme Formu
                            </h1>
                            <p className="text-blue-100 mt-1">
                                Lütfen akademisyenin performansını dürüstçe değerlendirin
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            {/* Course Input */}
                            <div className="space-y-2">
                                <label className="block text-lg font-medium text-gray-800">
                                    Ders Adı*
                                </label>
                                <input
                                    type="text"
                                    name="courseName"
                                    value={formData.courseName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Değerlendirdiğiniz dersin adı"
                                    required
                                />
                            </div>

                            {/* Comment Textarea */}
                            <div className="space-y-2">
                                <label className="block text-lg font-medium text-gray-800">
                                    Değerlendirme Yorumunuz*
                                </label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Ders ve akademisyen hakkındaki deneyimlerinizi detaylı şekilde paylaşın..."
                                    required
                                />
                                <p className="text-sm text-gray-500">
                                    Lütfen yalnızca kendi deneyimlerinizi yazın. Topluluk kurallarını okuduğunuzdan emin olun.
                                </p>
                            </div>

                            {/* Rating Select */}
                            <div className="space-y-2">
                                <label className="block text-lg font-medium text-gray-800">
                                    Genel Değerlendirme Notu
                                </label>
                                <select
                                    name="rank"
                                    value={formData.rank}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {Object.values(EnRank).map(rank => (
                                        <option key={rank} value={rank}>
                                            {rank}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Badges */}
                            <div className="space-y-2">
                                <label className="block text-lg font-medium text-gray-800">
                                    Ders Özellikleri (Çoklu seçim)
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {Object.values(EnBadge).map(badge => (
                                        <button
                                            key={badge}
                                            type="button"
                                            onClick={() => handleBadgeToggle(badge)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${formData.badges.includes(badge)
                                                ? `${getBadgeColor(badge)} shadow-inner`
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {badge}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Rating Sliders */}
                            <div className="space-y-6 pt-4">
                                <h3 className="text-lg font-medium text-gray-800">Detaylı Puanlamalar</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <RatingSlider
                                        label="Anlatım Kalitesi"
                                        value={formData.explanationPoint}
                                        onChange={(val) => handleSliderChange('explanationPoint', val)}
                                    />
                                    <RatingSlider
                                        label="Öğrenciye Erişilebilirlik"
                                        value={formData.accessibilityPoint}
                                        onChange={(val) => handleSliderChange('accessibilityPoint', val)}
                                    />
                                    <RatingSlider
                                        label="Notlandırma Adaleti"
                                        value={formData.fairnessPoint}
                                        onChange={(val) => handleSliderChange('fairnessPoint', val)}
                                    />
                                    <RatingSlider
                                        label="Ders Materyal Kalitesi"
                                        value={formData.materialQualityPoint}
                                        onChange={(val) => handleSliderChange('materialQualityPoint', val)}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                >
                                    <FaComment className="text-white" />
                                    <span>Değerlendirmeyi Gönder</span>
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function RatingSlider({ label, value, onChange }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
}) {
    return (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-700">{label}</span>
                <span className="text-xl font-bold text-gray-900">{value}/100</span>
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Yetersiz</span>
                <span>Orta</span>
                <span>Çok İyi</span>
            </div>
        </div>
    );
}