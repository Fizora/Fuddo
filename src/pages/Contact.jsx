import { Link } from "react-router-dom";
import SmoothScrollProviders from "./SmoothScrollProviders";

function Contact() {
  return (
    <SmoothScrollProviders>
      <section className="px-3 md:px-0 md:container md:mx-auto py-20 ">
        {/* hero section */}
        <div className="py-50 flex w-full justify-between items-center">
          {/* left */}
          <div className="">
            <div className="flex items-center gap-2 mb-20">
              <div className="">
                <h3 className="text-5xl dark:text-white">+200</h3>
                <p className="text-gray-500">Project Completed</p>
              </div>
              <div className="">
                <h3 className="text-5xl dark:text-white">+24</h3>
                <p className="text-gray-500">+50 works</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-9xl  dark:text-white ">
              HELLO
            </h1>
            <p className="text-gray-500">
              {" "}
              - I am Fuddo, designer and photographer
            </p>
          </div>
          {/* right */}
          <div className="w-1/2 ">
            <img src="/fuddo.png" alt="" className=" rounded-full shadow-md" />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Link
            to={"/Showcase"}
            className="px-6 rounded-full  border-2 border-white bg-white shadow-md py-2"
          >
            See Photo
          </Link>
          <Link
            to={"/Contact"}
            className="px-6 rounded-full border-black  bg-black dark:bg-transparent text-white border-2 dark:border-white dark:hover:bg-white dark:hover:text-black duration-300 shadow-md py-2"
          >
            Contact
          </Link>
        </div>
        {/* main navigation */}
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center py-20 md:text-3xl">
          <Link
            to={"/"}
            className="px-6  bg-gray-400 text-white dark:text-black rounded-tl-lg rounded-br-lg"
          >
            About Me
          </Link>
          <Link
            to={"/Experiences"}
            className="px-6  bg-gray-400 text-white dark:text-black rounded-tl-lg rounded-br-lg"
          >
            Experiences
          </Link>
          <Link
            to={"/Contact"}
            className="px-6  bg-black text-white dark:bg-white dark:text-black rounded-tl-lg rounded-br-lg"
          >
            Contact
          </Link>
          <Link
            to={"/Service"}
            className="px-6  bg-gray-400 text-white dark:text-black rounded-tl-lg rounded-br-lg"
          >
            Service
          </Link>
        </nav>
        {/* contact section */}
        <section className="6 md:py-24">
          <div className="px-4">
            <h2 className="text-3xl md:text-5xl font-medium text-black dark:text-white mb-6">
              Let’s Capture Your Story Together
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              Setiap momen adalah kisah yang menunggu untuk diabadikan. Saya di
              sini untuk membantu Anda merangkai kenangan yang indah melalui
              lensa saya. Apakah Anda ingin mengabadikan cinta, merayakan
              milestone, atau mendokumentasikan keindahan sehari-hari, mari kita
              wujudkan visi Anda menjadi karya seni yang abadi.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Anda dapat menghubungi saya melalui email di{" "}
              <a
                href="mailto:hello@photographer.com"
                className="underline hover:text-gray-900 dark:hover:text-gray-100"
              >
                hello@photographer.com
              </a>{" "}
              atau WhatsApp di{" "}
              <a
                href="tel:+6281234567890"
                className="underline hover:text-gray-900 dark:hover:text-gray-100"
              >
                +62 812-3456-7890
              </a>
              . Saya siap mendengarkan ide Anda dan menjawab setiap pertanyaan
              dengan senang hati.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Ikuti perjalanan visual saya di media sosial untuk melihat karya
              terbaru dan mendapatkan inspirasi. Temukan saya di Instagram{" "}
              <a
                href="https://instagram.com/yourphotographer"
                className="underline hover:text-gray-900 dark:hover:text-gray-100"
              >
                @yourphotographer
              </a>{" "}
              atau X{" "}
              <a
                href="https://x.com/yourphotographer"
                className="underline hover:text-gray-900 dark:hover:text-gray-100"
              >
                @yourphotographer
              </a>
              , di mana setiap postingan adalah jendela menuju dunia yang saya
              abadikan.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Memesan sesi foto sangatlah mudah. Cukup hubungi saya untuk
              mendiskusikan visi Anda, dan saya akan membantu merancang
              pengalaman yang sesuai dengan kebutuhan Anda. Dari sesi potret
              intim hingga proyek dokumentasi besar, setiap langkah akan
              dirancang untuk kenyamanan dan kepuasan Anda.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Saya berkomitmen untuk memberikan respons yang cepat dan
              pengalaman yang hangat. Biasanya, saya akan membalas dalam waktu
              24 jam, memastikan Anda mendapatkan perhatian penuh untuk
              merencanakan sesi foto impian Anda. Setiap pesan adalah langkah
              menuju kenangan yang tak terlupakan.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mt-4 leading-relaxed">
              Apakah Anda memiliki ide kreatif atau hanya ingin menjelajahi
              kemungkinan? Mari kita ngobrol. Saya percaya setiap kisah layak
              diceritakan, dan saya di sini untuk membantu Anda menangkapnya
              dengan cara yang otentik dan bermakna. Hubungi saya hari ini, dan
              mari mulai perjalanan visual kita bersama.
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

export default Contact;
