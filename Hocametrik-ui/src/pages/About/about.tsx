import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-12">
            <div className="max-w-7xl mx-auto">
                {/* Başlık */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-extrabold text-indigo-500 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Hakkımızda
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Akademik Değerlendirme Dünyasını Dönüştürüyoruz
                    </p>
                </div>

                {/* Giriş */}
                <div className="mb-20 text-center">
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        HOCAMETRİK, üniversitelerin ve akademisyenlerin performansını şeffaf bir şekilde
                        değerlendiren öncü bir platformdur. Amacımız, akademik dünyada kalite standartlarını
                        yükseltmek ve bilgiye dayalı kararlar alınmasını sağlamaktır.
                    </p>
                </div>

                {/* İstatistikler */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-3xl font-bold text-indigo-600">250K+</p>
                        <p className="text-gray-500 mt-2">Kullanıcı</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-3xl font-bold text-indigo-600">5K+</p>
                        <p className="text-gray-500 mt-2">Üniversite</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-3xl font-bold text-indigo-600">4.8</p>
                        <p className="text-gray-500 mt-2">Ortalama Puan</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-3xl font-bold text-indigo-600">50+</p>
                        <p className="text-gray-500 mt-2">Ziyaretçi Sayısı</p>
                    </div>
                </div>

                {/* Neden Biz? */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Neden AkademiDeğerlendir?</h2>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-gray-600 mb-6">
                            Platformumuz, üniversiteler ve akademisyenler hakkında kapsamlı değerlendirme araçları sunar.
                            Kullanıcılarımızın objektif verilere dayalı kararlar alabilmeleri için güvenilir bir kaynak sunuyoruz.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Şeffaf ve tarafsız değerlendirme sistemi</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Kapsamlı üniversite ve akademisyen veritabanı</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Akademik performans analiz araçları</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Kullanıcı yorumları ve deneyim paylaşımları</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Vizyonumuz */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vizyonumuz</h2>
                    <div className="bg-indigo-50 p-8 rounded-lg">
                        <p className="text-gray-700 italic text-center">
                            "Akademik dünyada şeffaflığı ve hesap verebilirliği artırarak yükseköğretimin kalitesini
                            yükseltmeyi ve öğrenciler, akademisyenler ve eğitim kurumları arasında güvenilir bir
                            köprü olmayı hedefliyoruz."
                        </p>
                    </div>
                </div>

                {/* Ekibimiz */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ekibimiz</h2>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
                        AkademiDeğerlendir, alanında uzman eğitimciler, veri bilimciler ve teknoloji uzmanlarından
                        oluşan bir ekip tarafından yönetilmektedir. Ekibimiz, akademik dünyaya katkı sağlamak için
                        tutkuyla çalışmaktadır.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: 'Dr. Ahmet Yılmaz', role: 'Kurucu & Eğitim Bilimci', img: '/team/ahmet.jpg' },
                            { name: 'Prof. Ayşe Demir', role: 'Akademik Danışman', img: '/team/ayse.jpg' },
                            { name: 'Mehmet Kaya', role: 'Veri Bilimci', img: '/team/mehmet.jpg' },
                            { name: 'Zeynep Şahin', role: 'Frontend Geliştirici', img: '/team/zeynep.jpg' },
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="h-32 w-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                                    {/* Gerçek projede burada resim olacak */}
                                    <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-500">
                                        Fotoğraf
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                                <p className="text-indigo-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* İletişim */}
                <div className="bg-indigo-700 rounded-lg p-8 text-white">
                    <h2 className="text-3xl font-bold mb-6 text-center">Bizimle İletişime Geçin</h2>
                    <p className="text-center mb-8 max-w-2xl mx-auto">
                        Sorularınız, önerileriniz veya işbirliği teklifleriniz için bize ulaşmaktan çekinmeyin.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
                            <a href="/contact">İletişim Formu</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;