import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import SmoothScrollProviders from "./SmoothScrollProviders";

// Animation variants for consistent effects
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

function Home() {
  return (
    <SmoothScrollProviders>
      <section className="px-3 md:px-0 md:container md:mx-auto py-20">
        {/* Hero section */}
        <div className="py-20 md:py-50 flex flex-col md:flex-row w-full justify-between items-center">
          {/* Left content */}
          <div className="mb-20">
            <div className="flex items-center gap-5 md:mb-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInRight}
                custom={0}
                className=""
              >
                <h3 className="text-5xl dark:text-white">+200</h3>
                <p className="text-gray-500">Project Completed</p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInRight}
                custom={0.2}
                className=""
              >
                <h3 className="text-5xl dark:text-white">+24</h3>
                <p className="text-gray-500">+50 works</p>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.4}
            >
              <TypeAnimation
                sequence={["Welcome", 1000]}
                wrapper="h1" // Use h1 as the wrapper element
                speed={50} // Typing speed (lower is faster)
                repeat={Infinity} // Set to Infinity to loop endlessly
                className="text-6xl md:text-7xl lg:text-9xl mb-4 dark:text-white"
              />
            </motion.div>

            <motion.p
              className="text-gray-500"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.6}
            >
              - I am Fuddo, designer and photographer
            </motion.p>
            <motion.div
              className="flex items-center gap-2 mt-2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={1}
            >
              <Link
                to={"/Showcase"}
                className="px-6 rounded-full border-2 border-white bg-white shadow-md py-2 hover:scale-105 transition-transform duration-300"
              >
                See Photo
              </Link>
              <Link
                to={"/Contact"}
                className="px-6 rounded-full border-black bg-black dark:bg-transparent text-white border-2 dark:border-white dark:hover:bg-white dark:hover:text-black duration-300 shadow-md py-2 hover:scale-105 transition-transform "
              >
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            custom={0.8}
          >
            <img src="/fuddo.png" alt="Fuddo" className="rounded-full" />
          </motion.div>
        </div>

        {/* About me section */}
        <motion.section
          className="py-16 md:py-24"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={1.2}
        >
          <div className="px-4">
            <motion.h2
              className="text-3xl md:text-5xl font-medium text-black dark:text-white mb-6 oldtag"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
            >
              About Me.
            </motion.h2>

            <motion.p
              className="  text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.2}
            >
              I am a traveler of light, capturing moments that whisper of life,
              love, and beauty. Photography for me is not just a profession, but
              a way to tell untold stories—from hopeful smiles to landscapes
              that greet the soul. Starting from a fascination with the simple
              wonders around me, I have explored the world through my lens,
              learning that every frame is a timeless visual poem.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.4}
            >
              <Link
                to="/Showcase"
                className="mt-8 inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 hover:scale-105"
              >
                Jelajahi Karya Saya
              </Link>
            </motion.div>
          </div>
        </motion.section>
        {/* best photo highlight */}
        <section className=" flex flex-col justify-center">
          <h1 className="text-3xl  dark:text-white md:text-5xl font-medium text-right mb-20">
            Best{" "}
            <span className="bg-black text-white dark:bg-white dark:text-black px-4">
              Photos.
            </span>
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 px-20 gap-4 lg:-rotate-12 py-10 lg:skew-9 lg:border lg:border-gray-300 rounded-md">
            <div className="bg-gray-300 rounded-md">
              <img
                src="/1.JPG"
                alt=""
                className=" hover:translate-x-3 hover:-translate-y-5 duration-300 rounded-md"
              />
            </div>
            <div className="bg-gray-300 rounded-md">
              <img
                src="/1.JPG"
                alt=""
                className=" hover:translate-x-3 hover:-translate-y-5 duration-300 rounded-md"
              />
            </div>
            <div className="bg-gray-300 rounded-md">
              <img
                src="/1.JPG"
                alt=""
                className=" hover:translate-x-3 hover:-translate-y-5 duration-300 rounded-md"
              />
            </div>
          </div>
        </section>
        {/* skilss */}
        <section className="py-10 md:py-30">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <h1 className="text-5xl font-medium mb-4">My Skills</h1>
              <p>
                I specialize in video editing, photos and doing professional
                photo shoots, with the best methods in the field of photography.
              </p>
            </div>
            <div className=""></div>
          </div>
        </section>
      </section>
    </SmoothScrollProviders>
  );
}

export default Home;
