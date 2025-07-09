import { Link } from "react-router-dom";
import SmoothScrollProviders from "./SmoothScrollProviders";

function Home() {
  return (
    <SmoothScrollProviders>
      <section className="px-3 md:px-0 md:container md:mx-auto py-20 ">
        <h1 className="text-4xl md:text-7xl lg:text-9xl font-medium dark:text-white tagline">
          Eternal moments never stop throughout times.
        </h1>
        <div className="flex items-center gap-1 mt-2">
          <Link
            to={"/Showcase"}
            className="px-6 rounded-full  border-2 border-white bg-white shadow-md py-2"
          >
            See Photo
          </Link>
          <Link
            to={"/Contact"}
            className="px-6 rounded-full  bg-black text-white border-2 dark:border-white dark:hover:bg-white dark:hover:text-black duration-300 shadow-md py-2"
          >
            Contact
          </Link>
        </div>
        {/* nav */}
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center py-20 md:text-3xl">
          <Link
            to={"/"}
            className="px-6 py-1.5 bg-black text-white dark:bg-white dark:text-black rounded-tl-lg rounded-br-lg"
          >
            About Me
          </Link>
          <Link
            to={"/Experiences"}
            className="px-6 py-1.5 bg-gray-400 text-white dark:text-black rounded-tl-lg rounded-br-lg"
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
        {/* about me section */}
        <section className="py-16 md:py-24">
          <div className="px-4">
            <h2 className="text-3xl md:text-5xl font-medium text-black dark:text-white mb-6">
              Through the Lens of Passion
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              Saya adalah seorang pengelana cahaya, menangkap momen-momen yang
              berbisik tentang kehidupan, cinta, dan keindahan. Fotografi bagi
              saya bukan hanya profesi, melainkan cara untuk menceritakan kisah
              yang tak terucap—dari senyum penuh harap hingga lanskap yang
              menyapa jiwa. Bermula dari ketertarikan pada keajaiban sederhana
              di sekitar, saya telah menjelajahi dunia melalui lensa, belajar
              bahwa setiap frame adalah puisi visual yang abadi.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Dengan setiap klik, saya berusaha mengabadikan emosi, menangkap
              esensi, dan merayakan keunikan setiap subjek. Dari potret intim
              hingga panorama yang luas, karya saya adalah cerminan dari
              ketelitian dan cinta untuk seni. Saya percaya, sebuah foto bukan
              hanya gambar, tetapi jendela menuju kenangan yang tak pernah
              pudar. Mari bersama-sama menciptakan kisah visual yang akan
              dikenang selamanya.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Perjalanan saya sebagai fotografer dimulai dari keingintahuan
              sederhana—mengamati bagaimana cahaya menari di permukaan dunia.
              Dari sudut kota yang ramai hingga keheningan alam, saya belajar
              bahwa setiap momen memiliki cerita yang menunggu untuk diabadikan.
              Setiap proyek adalah langkah baru dalam petualangan ini, mengasah
              kemampuan saya untuk melihat keindahan di tempat yang tak terduga.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Inspirasi saya berasal dari kehidupan itu sendiri—dari tawa
              anak-anak, rona senja, hingga cerita di balik tatapan seseorang.
              Saya menemukan keajaiban dalam hal-hal kecil, seperti bayangan
              daun di trotoar atau kilau mata yang penuh harap. Fotografi adalah
              cara saya untuk menghormati keindahan sementara ini, mengubahnya
              menjadi karya yang abadi.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Pendekatan saya dalam fotografi adalah tentang kepekaan dan
              kejujuran. Saya tidak hanya memotret, tetapi mendengarkan—cerita
              klien, suasana lokasi, dan emosi yang mengalir. Saya bekerja
              dengan hati, memastikan setiap frame mencerminkan esensi subjek,
              baik itu perayaan cinta dalam sesi pernikahan atau keagungan alam
              dalam lanskap. Teknik saya menggabungkan komposisi yang cermat
              dengan kepekaan terhadap cahaya dan warna.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              B Says it all Bagi saya, fotografi adalah tentang membangun
              hubungan—dengan klien, dengan momen, dan dengan cerita yang ingin
              mereka bagikan. Saya berkomitmen untuk menciptakan pengalaman yang
              hangat dan personal, memahami visi klien, dan menghasilkan karya
              yang tidak hanya indah, tetapi juga bermakna. Setiap sesi adalah
              kolaborasi untuk merangkai kenangan yang akan mereka hargai
              selamanya.
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

export default Home;
