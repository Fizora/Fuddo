import { Link } from "react-router-dom";
import SmoothScrollProviders from "./SmoothScrollProviders";

function Home() {
  return (
    <SmoothScrollProviders>
      <section className="px-3 md:px-0 md:container md:mx-auto py-20 ">
        {/* hero section */}
        <div className="py-50 flex flex-col md:flex-row w-full justify-between items-center">
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
          <div className="md:w-1/2">
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
            className="px-6 rounded-full border-black   bg-black dark:bg-transparent text-white border-2 dark:border-white dark:hover:bg-white dark:hover:text-black duration-300 shadow-md py-2"
          >
            Contact
          </Link>
        </div>
        {/* main navigation */}
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center py-20 md:text-3xl">
          <Link
            to={"/"}
            className="px-6  bg-black text-white dark:bg-white dark:text-black rounded-tl-lg rounded-br-lg"
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
            className="px-6  bg-gray-400 text-white dark:text-black rounded-tl-lg rounded-br-lg"
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
        {/* about me section */}
        <section className="py-16 md:py-24">
          <div className="px-4">
            <h2 className="text-3xl md:text-5xl font-medium text-black dark:text-white mb-6 oldtag">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
              I am a traveler of light, capturing moments that whisper of life,
              love, and beauty. Photography for me is not just a profession, but
              a way to tell untold stories—from hopeful smiles to landscapes
              that greet the soul. Starting from a fascination with the simple
              wonders around me, I have explored the world through my lens,
              learning that every frame is a timeless visual poem.
            </p>

            <Link
              to="/Showcase"
              className="mt-8 inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
            >
              Jelajahi Karya Saya
            </Link>
          </div>
        </section>
        <div className=""></div>
        <section className=""></section>
      </section>
    </SmoothScrollProviders>
  );
}

export default Home;
