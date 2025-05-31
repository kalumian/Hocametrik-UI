function Contact() {
    return (
        <section className="bg-white min-h-screen flex items-center justify-center px-4">
            <div className="py-8 lg:py-16 w-full max-w-screen-md">
                <h2 className="mb-4 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    İletişim
                </h2>
                <p className="mb-8 lg:mb-16 font-medium text-center text-gray-600 sm:text-lg max-w-2xl mx-auto">
                    Teknik bir sorun mu yaşıyorsunuz? Bir özellik hakkında geri bildirim mi göndermek istiyorsunuz?
                    İş planımız hakkında bilgi mi almak istiyorsunuz? Bize bildirin.
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                            E-posta adresiniz
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="ornek@eposta.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                            Konu
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                                shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Size nasıl yardımcı olabiliriz?"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                            Mesajınız
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm
                                border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Yorumunuzu buraya yazın..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg
                            bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Mesaj Gönder
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
