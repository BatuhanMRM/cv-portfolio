import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header / Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 mb-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-gray-400">Fotoğraf</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">İsminiz Soyisminiz</h1>
            <p className="text-xl opacity-90 mb-4">Yazılım Geliştirici</p>
            <p className="max-w-2xl opacity-80">
              Buraya kendiniz hakkında kısa bir açıklama yazabilirsiniz. Örneğin: "3 yıllık deneyime sahip Full Stack Developer. Web teknolojileri konusunda tutkulu ve sürekli öğrenmeye açık."
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* İletişim Bilgileri */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">ornek@email.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Telefon</h3>
              <p className="text-gray-600">+90 555 555 55 55</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Konum</h3>
              <p className="text-gray-600">İstanbul, Türkiye</p>
            </div>
          </div>
        </div>

        {/* Deneyim */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">İş Deneyimi</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6 last:mb-0">
              <h3 className="text-xl font-semibold text-gray-800">Yazılım Geliştirici</h3>
              <p className="text-gray-600">Şirket Adı</p>
              <p className="text-sm text-gray-500 mb-2">Ocak 2022 - Günümüz</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Sorumluluk ve başarı 1</li>
                <li>Sorumluluk ve başarı 2</li>
                <li>Sorumluluk ve başarı 3</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Eğitim */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Eğitim</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6 last:mb-0">
              <h3 className="text-xl font-semibold text-gray-800">Üniversite Adı</h3>
              <p className="text-gray-600">Bölüm Adı</p>
              <p className="text-sm text-gray-500">2018 - 2022</p>
            </div>
          </div>
        </section>

        {/* Yetenekler */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Yetenekler</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-center">HTML & CSS</div>
              <div className="bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-center">JavaScript</div>
              <div className="bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-center">React</div>
              <div className="bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-center">Node.js</div>
              <div className="bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-center">TypeScript</div>
              <div className="bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-center">Next.js</div>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Projeler</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6 last:mb-0">
              <h3 className="text-xl font-semibold text-gray-800">Proje Adı</h3>
              <p className="text-gray-600 mb-2">
                Proje açıklaması buraya gelecek. Kullanılan teknolojiler ve projenin amacı hakkında kısa bir bilgi.
              </p>
              <div className="flex gap-2">
                <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded">React</span>
                <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded">Node.js</span>
                <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded">MongoDB</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 