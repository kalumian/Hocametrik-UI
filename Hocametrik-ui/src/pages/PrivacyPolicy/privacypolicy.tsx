import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-2 sm:px-8 lg:px-24 mt-20">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Başlık */}
                <div className="bg-indigo-500 p-8 text-white">
                    <h1 className="text-3xl sm:text-4xl font-bold">Gizlilik ve Güvenlik Politikası</h1>
                    <p className="mt-2 opacity-90">Son güncelleme: 01 Haziran 2025</p>
                </div>

                {/* İçerik */}
                <div className="p-8  space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Giriş</h2>
                        <p className="text-gray-600">
                            HOCAMETRİK olarak, kullanıcılarımızın gizliliğine büyük önem veriyoruz.
                            Bu politika, kişisel verilerinizin nasıl toplandığını, kullanıldığını, paylaşıldığını ve korunduğunu açıklar.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Toplanan Bilgiler</h2>
                        <p className="text-gray-600 mb-4">Platformumuzu kullanırken aşağıdaki bilgileri toplayabiliriz:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>Hesap oluştururken sağladığınız kişisel bilgiler (ad, e-posta, üniversite bilgileri)</li>
                            <li>Değerlendirme yaparken girdiğiniz puanlar ve yorumlar</li>
                            <li>Cihaz bilgileri ve IP adresi</li>
                            <li>Kullanım verileri (ziyaret edilen sayfalar, geçirilen süre)</li>
                            <li>Çerezler ve benzeri izleme teknolojileri aracılığıyla toplanan veriler</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Bilgilerin Kullanımı</h2>
                        <p className="text-gray-600 mb-4">Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Platformumuzu sağlamak ve sürdürmek",
                                "Kullanıcı deneyimini iyileştirmek",
                                "Akademik değerlendirme analizleri yapmak",
                                "Güvenlik önlemlerini uygulamak",
                                "Yasal yükümlülükleri yerine getirmek",
                                "Kullanıcı desteği sağlamak"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <svg className="h-5 w-5 text-indigo-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Veri Paylaşımı</h2>
                        <p className="text-gray-600">
                            Kullanıcı bilgilerinizi, yalnızca aşağıdaki durumlarda ve yasalarca izin verilen ölçüde paylaşırız:
                        </p>
                        <div className="mt-4 space-y-4">
                            {[
                                {
                                    title: "Hizmet Sağlayıcılar",
                                    content: "Platform işlemlerimizi destekleyen güvenilir üçüncü taraf hizmet sağlayıcılar (veri depolama, analiz vb.)"
                                },
                                {
                                    title: "Yasal Zorunluluklar",
                                    content: "Yasa, düzenleme, mahkeme emri veya devlet talebi gibi yasal zorunluluklar durumunda"
                                },
                                {
                                    title: "Anonim Veriler",
                                    content: "İstatistiksel amaçlarla, bireysel olarak tanımlanamayacak şekilde anonimleştirilmiş veriler"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-indigo-600">{item.title}</h3>
                                    <p className="text-gray-600 mt-1">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Veri Güvenliği</h2>
                        <p className="text-gray-600 mb-4">
                            Verilerinizin güvenliği bizim için önceliklidir. Platformumuz aşağıdaki güvenlik önlemlerini uygulamaktadır:
                        </p>
                        <div className="bg-indigo-50 p-6 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "SSL şifreleme ile veri iletimi",
                                    "Düzenli güvenlik denetimleri",
                                    "Sınırlı erişim kontrolleri",
                                    "Veri şifreleme teknolojileri",
                                    "Güvenlik duvarları ve izleme sistemleri",
                                    "Personel eğitimleri ve bilinçlendirme"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="bg-indigo-100 p-2 rounded-full mr-3">
                                            <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15l8-8m0 0l-8-8m8 8H4" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Çerezler</h2>
                        <p className="text-gray-600">
                            Platformumuz, kullanıcı deneyimini iyileştirmek için çerezler ve benzeri teknolojiler kullanır.
                            Tarayıcı ayarlarınızı değiştirerek çerezleri kontrol edebilir veya devre dışı bırakabilirsiniz,
                            ancak bu platformun bazı işlevlerini etkileyebilir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Haklarınız</h2>
                        <p className="text-gray-600 mb-4">
                            Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
                        </p>
                        <div className="space-y-3">
                            {[
                                "Verilerinize erişim hakkı",
                                "Düzeltme veya silme talebi",
                                "İşleme itiraz hakkı",
                                "Veri taşınabilirliği hakkı",
                                "İşleme kısıtlama talebi"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                    <span className="text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 mt-4">
                            Haklarınızı kullanmak için bizimle <span className="text-indigo-600">privacy@akademidegerlendir.com</span> adresinden iletişime geçebilirsiniz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Değişiklikler</h2>
                        <p className="text-gray-600">
                            Bu politika zaman zaman güncellenebilir. Değişiklik yapıldığında, bu sayfada son güncelleme tarihini
                            değiştirerek sizi bilgilendireceğiz. Politikamızı düzenli olarak gözden geçirmenizi öneririz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. İletişim</h2>
                        <p className="text-gray-600">
                            Gizlilik politikamızla ilgili herhangi bir sorunuz varsa, lütfen bizimle iletişime geçmekten çekinmeyin:
                        </p>
                        <div className="mt-4 space-y-2 text-gray-600">
                            <p><span className="font-medium">E-posta:</span> privacy@akademidegerlendir.com</p>
                            <p><span className="font-medium">Adres:</span> Teknopark İstanbul, Pendik, İstanbul, Türkiye</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;