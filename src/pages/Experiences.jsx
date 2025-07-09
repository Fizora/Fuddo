import { Link } from "react-router-dom";
import SmoothScrollProviders from "./SmoothScrollProviders";

function Experiences() {
  return (
    <SmoothScrollProviders>
      <section className="px-3 md:px-0 md:container md:mx-auto py-20 ">
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-medium dark:text-white tagline">
          Eternal moments never stop throughout times.
        </h1>
        <div className="flex items-center gap-1 mt-2">
          <Link
            to={""}
            className="px-6 rounded-full border-2 border-white bg-white shadow-md py-2"
          >
            See Photo
          </Link>
          <Link
            to={""}
            className="px-6 rounded-full bg-black text-white border-2 dark:border-white dark:hover:bg-white dark:hover:text-black duration-300 shadow-md py-2"
          >
            Contact
          </Link>
        </div>
        {/* nav */}
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center py-20 md:text-3xl">
          <Link
            to={"/"}
            className="px-6 py-1.5 bg-gray-400 text-white dark:text-black rounded-tl-lg rounded-br-lg"
          >
            About Me
          </Link>
          <Link
            to={"/Experiences"}
            className="px-6 py-1.5 bg-black text-white dark:bg-white dark:text-black rounded-tl-lg rounded-br-lg"
          >
            Experiences
          </Link>
          <Link
            to={"/Contact"}
            className="px-6 py-1.5 bg-gray-400 text-white dark:text-black rounded-tl-lg rounded-br-lg"
          >
            Contact
          </Link>
          <Link
            to={"/Service"}
            className="px-6 py-1.5 bg-gray-400 text-white dark:text-black rounded-tl-lg rounded-br-lg"
          >
            Service
          </Link>
        </nav>
        {/* experiences section */}
        <section className="py-16 md:py-24">
          <div className="px-4">
            <h2 className="text-3xl md:text-5xl font-medium text-black dark:text-white mb-6">
              A Journey in Capturing Time
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              Perjalanan saya dalam fotografi dimulai dengan sebuah kamera
              sederhana dan rasa ingin tahu yang tak terpuaskan. Proyek pertama
              saya—memotret pasar pagi yang ramai—mengajarkan saya bahwa setiap
              momen, sekecil apa pun, menyimpan kisah yang layak diabadikan.
              Dari sana, saya terjun ke dunia visual, menangkap kehidupan dengan
              lensa yang penuh gairah.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Seiring waktu, saya telah menjelajahi berbagai ranah fotografi,
              dari pernikahan yang penuh cinta hingga lanskap yang menenangkan
              jiwa. Setiap genre menantang saya untuk melihat dunia dengan cara
              baru—mengabadikan tawa pengantin di bawah cahaya senja atau
              memotret puncak gunung yang diselimuti kabut. Pengalaman ini
              memperkaya pemahaman saya tentang komposisi, cahaya, dan emosi.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Kolaborasi dengan klien dan seniman lain telah menjadi bagian tak
              terpisahkan dari perjalanan ini. Saya pernah bekerja dengan
              pasangan yang ingin merayakan cinta mereka, merek yang membutuhkan
              visual memukau, hingga komunitas lokal untuk proyek dokumentasi
              budaya. Setiap kolaborasi adalah kesempatan untuk belajar, berbagi
              visi, dan menciptakan sesuatu yang otentik.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Karya saya telah mendapat tempat di beberapa pameran lokal dan
              publikasi daring, sebuah pengakuan yang memotivasi saya untuk
              terus berkarya. Salah satu momen paling berharga adalah ketika
              foto saya dari sebuah desa terpencil dipamerkan, membawa cerita
              mereka kepada audiens yang lebih luas. Pengalaman ini mengingatkan
              saya akan kekuatan fotografi untuk menghubungkan manusia.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Dari setiap proyek, saya belajar untuk lebih peka terhadap momen
              dan lebih tekun dalam seni. Tantangan seperti cuaca buruk atau
              jadwal ketat mengajarkan saya ketangguhan, sementara kegembiraan
              klien atas hasil foto menguatkan semangat saya. Saya terus
              berkomitmen untuk mengasah keterampilan, mengeksplorasi teknik
              baru, dan memperdalam pemahaman tentang cahaya dan cerita.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Pengalaman saya bukan hanya tentang memotret, tetapi tentang
              menciptakan dampak. Melihat klien tersenyum saat menerima foto
              pernikahan mereka atau komunitas yang bangga dengan dokumentasi
              budayanya adalah hadiah terbesar. Fotografi bagi saya adalah
              jembatan untuk merayakan kehidupan, dan saya mengundang Anda untuk
              melihat dunia melalui karya-karya yang telah saya ciptakan.
            </p>
            <Link
              to="/Showcase"
              className="mt-8 inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
            >
              Jelajahi Karya Saya
            </Link>
          </div>
        </section>
      </section>
    </SmoothScrollProviders>
  );
}

export default Experiences;
