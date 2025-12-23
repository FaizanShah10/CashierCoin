import React from "react";
import { motion } from "framer-motion";

const Hero = () => {

  const fadeFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};


  return (
    <section className="relative h-[120vh] bg-[#151515] text-white overflow-hidden px-12">
      
      {/* ================= UPPER SECTION ================= */}
      <div className="flex md:flex-row flex-col items-center justify-between">

        {/* LEFT BIG TITLE */}
        <motion.div
          variants={fadeFromLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="rocket-regular uppercase md:text-[340px] text-[150px] md:mt-0 mt-10">
            CASHERO
          </h1>
        </motion.div>

        {/* RIGHT TEXT + CTA */}
        <motion.div
          variants={fadeFromRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-48 absolute right-45"
        >
          <p className="md:block hidden coconutz-regular w-80 uppercase text-[20px] text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis
            impedit incidunt vel eum.
          </p>

          <motion.button
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mt-12 uppercase font-bold md:px-16 px-8 md:py-4 py-2 md:text-lg text-sm bg-[#D92833] hover:bg-white hover:text-[#D92833] duration-300 cursor-pointer text-black rounded-full"
          >
            join community
          </motion.button>

          <p className="md:block hidden mt-5 w-80 uppercase text-[#D92833] coconutz-regular ml-10 tracking-wider">
            you were background. Now you're the story.
          </p>
        </motion.div>
      </div>

      {/* ================= HERO IMAGE ================= */}
      <motion.img
        variants={fadeFromRight}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        className="absolute z-20 md:top-8 md:right-85 right-6"
        src="./images/HeroImg.png"
        alt=""
      />

      {/* ================= LOWER SECTION ================= */}
      <div className="flex md:flex-row flex-col-reverse items-end">

        {/* LEFT: VECTORS + TEXT */}
        <motion.div
          variants={fadeFromLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex flex-col"
        >
          <div className="flex items-center -gap-10 -ml-2">
            <img className="md:w-24 w-13" src="./images/Vector1.png" alt="" />
            <img className="md:w-34 w-23" src="./images/Vector2.png" alt="" />
            <img className="md:w-34 w-23" src="./images/Vector3.png" alt="" />
            <img className="md:w-34 w-23" src="./images/Vector3.png" alt="" />
          </div>

          <p className="mt-6 max-w-60 coconutz-regular uppercase text-sm text-gray-300">
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>

        {/* RIGHT: K-DRAMA */}
        <motion.div
          variants={fadeFromRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="relative ml-62"
        >
          <img
            className="md:block hidden absolute -top-24 left-1/2 -translate-x-1/2 z-0 w-48 opacity-90"
            src="/images/Coins.gif"
            alt="coins animation"
          />

          <h1 className="relative z-10 rocket-regular uppercase md:text-[340px] text-[150px] leading-none">
            k-drama
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
