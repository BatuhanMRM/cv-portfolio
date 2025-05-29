import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image
            src="/profile-placeholder.jpg"
            alt="Profil Fotoğrafı"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">İsim Soyisim</h1>
        <p className="text-xl text-gray-600 mb-4">Yazılım Geliştirici</p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kısa özgeçmiş ve kendiniz hakkında bir paragraf...
        </p>
      </section>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 mb-16">
        <Link href="#about" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Hakkımda
        </Link>
        <Link href="#experience" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Deneyim
        </Link>
        <Link href="#education" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Eğitim
        </Link>
        <Link href="#skills" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Yetenekler
        </Link>
        <Link href="#contact" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          İletişim
        </Link>
      </nav>

      {/* About Section */}
      <section id="about" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Hakkımda</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            Buraya kendiniz hakkında detaylı bir açıklama yazabilirsiniz...
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">İş Deneyimi</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Şirket Adı</h3>
            <p className="text-gray-600">Pozisyon</p>
            <p className="text-sm text-gray-500">Tarih - Tarih</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Sorumluluk 1</li>
              <li>Sorumluluk 2</li>
              <li>Sorumluluk 3</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Eğitim</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Okul Adı</h3>
            <p className="text-gray-600">Bölüm</p>
            <p className="text-sm text-gray-500">Mezuniyet Yılı</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Yetenekler</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-3 rounded">HTML & CSS</div>
            <div className="bg-gray-100 p-3 rounded">JavaScript</div>
            <div className="bg-gray-100 p-3 rounded">React</div>
            {/* Diğer yetenekler buraya eklenebilir */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">İletişim</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="font-semibold">Email:</span>
              <a href="mailto:ornek@email.com" className="text-blue-600 hover:underline">
                ornek@email.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">LinkedIn:</span>
              <a href="#" className="text-blue-600 hover:underline">
                linkedin.com/in/kullanici-adi
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">GitHub:</span>
              <a href="#" className="text-blue-600 hover:underline">
                github.com/kullanici-adi
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 