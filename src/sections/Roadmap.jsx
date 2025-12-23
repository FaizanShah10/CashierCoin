import React from "react";
import { motion } from "framer-motion";


const phases = [
  {
    phase: "1",
    title: "Release the Token",
    desc: "Launch the token. Unleash the memes. Wake up crypto Twitter.",
    position: "left",
  },
  {
    phase: "2",
    title: "Build the Community",
    desc: "Grow the community. Hype it up. Meme it harder.",
    position: "center",
  },
  {
    phase: "3",
    title: "Go Viral",
    desc: "Collaborations, viral marketing, surprise drops. No brakes.",
    position: "center-right",
  },
  {
    phase: "4",
    title: "Lock the Token",
    desc: "Listings, staking chaos, and airdrop madness — all while the token charges on.",
    position: "right",
  },
];

const phaseOffsets = [
  "md:-translate-y-10", // Phase 1 (left, high)
  "md:translate-y-20", // Phase 2 (lower)
  "md:translate-y-20", // Phase 3 (lower)
  "md:-translate-y-40", // Phase 4 (right, high)
];

const positionMap = {
  left: "md:self-start",
  center: "md:self-center",
  "center-right": "md:self-center md:translate-x-32",
  right: "md:self-end",
};

const Roadmap = () => {

  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const staggerByIndex = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // controls 1 → 2 → 3 → 4 timing
    },
  },
};


  return (
    <section className="relative bg-[#1C1B1C] md:py-32 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rocket-regular text-white text-8xl md:text-[240px] uppercase"
        >
          Our Roadmap
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-red-500 italic uppercase text-lg"
        >
          Sed ut perspiciatis unde <br />
          omnis iste natus error
        </motion.p>

        {/* PHASE CARDS (STAGGERED BY NUMBER) */}
        <motion.div
          variants={staggerByIndex}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-16 mb-12 flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-10"
        >
          {phases.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`
                relative
                w-full md:w-[420px]
                bg-white
                rounded-[22px]
                px-12 py-8
                shadow-2xl
                ${phaseOffsets[index]}
              `}
            >
              {/* PHASE LABEL */}
              <h3 className="font-black text-2xl uppercase">
                Phase{" "}
                <span className="coconutz-regular text-red-500 text-4xl ml-1">
                  {item.phase}
                </span>
              </h3>

              {/* TITLE */}
              <p className="mt-4 text-red-500 coconutz-regular font-bold uppercase text-left">
                {item.title}
              </p>

              {/* DESC */}
              <p className="text-black coconutz-regular text-sm leading-relaxed text-left">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM RIBBON */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 mb-8">
        <div className="relative w-[90vw] max-w-[900px] h-[66px]">
          <img
            src="/images/Ribbon.png"
            alt="Ribbon"
            className="w-full h-full object-fill"
          />
          <p className="absolute inset-0 flex items-center justify-center text-black uppercase font-bold tracking-widest text-xs md:text-base px-4 text-center">
            Same chain. Same vibe. Different outcome.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
