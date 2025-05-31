function Contact() {
    return (
        <section className="bg-white min-h-screen flex items-center justify-center px-4 pt-12">
            <div className="py-8 lg:py-16 w-full max-w-screen-md">
                <h2 className="mb-4 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    İletişim
                </h2>
                <p className="mb-8 lg:mb-16 font-medium text-center text-gray-600 sm:text-lg max-w-2xl mx-auto">
                    Teknik bir sorun mu yaşıyorsunuz? Bir özellik hakkında geri bildirim mi göndermek istiyorsunuz?
                    İş planımız hakkında bilgi mi almak istiyorsunuz? Bize bildirin.
                </p>
                <div className="max-w-3xl mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-md mt-8 sm:mt-10 relative z-10">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">Adınız</label>
                            <input type="text" id="first-name" placeholder="Ahmet" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">Soyadınız</label>
                            <input type="text" id="last-name" placeholder="Yılmaz" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">E-posta Adresiniz</label>
                            <input type="email" id="email" placeholder="ornek@mail.com" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Telefon Numaranız</label>
                            <input type="tel" id="phone" placeholder="+90 555 123 45 67" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Mesajınız</label>
                            <textarea id="message" rows={5} placeholder="Mesajınızı buraya yazın..." className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                        </div>
                        <div className="md:col-span-2 text-sm text-gray-500">
                            Bu formu göndererek <a href="/privacy-policy" className="text-blue-600 hover:underline">kullanım koşullarımızı</a> ve <a href="/privacy-policy" className="text-blue-600 hover:underline">gizlilik politikamızı</a> kabul etmiş olursunuz.
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                                Mesaj Gönder
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
