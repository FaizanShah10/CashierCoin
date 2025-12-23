import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    img: "/images/SliderImg1.png",
    text: "Buy/Sell Tax :\n0/0 %",
  },
  {
    img: "/images/SliderImg2.png",
    text: "Total Supply :\n1 billion Tokens",
  },
  {
    img: "/images/SliderImg3.png",
    text: "Contract :\nRenounced",
  },
];

const Tokenomics = () => {


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


  return (
    <section className="relative bg-[#1C1B1C] md:py-32 py-10 overflow-hidden md:-mt-20 -mt-8">
      <div className="w-full mx-auto text-center">

        {/* ================= HEADING ================= */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rocket-regular text-white text-[80px] md:text-[180px] uppercase tracking-wide"
        >
          Our Tokenomics
        </motion.h2>

        {/* ================= CTA ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="mt-6"
        >
          <button className="bg-[#E63946] hover:bg-white hover:text-[#E63946] transition-all duration-300 text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:scale-105">
            Join Community
          </button>
        </motion.div>

        {/* ================= CARDS ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="
                relative
                bg-white
                rounded-[24px]
                border-[4px]
                border-black
                px-6
                pt-10
                pb-8
                shadow-xl
              "
            >
              {/* TOP BUTTON */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-10 h-10 bg-red-500 border-4 border-black rounded-full" />
              </div>

              {/* IMAGE FRAME */}
              <div className="mt-4 bg-black rounded-[18px] p-[4px]">
                <div className="bg-white rounded-[14px] overflow-hidden">
                  <img
                    src={card.img}
                    alt="token"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <p className="mt-6 text-[#D62828] coconutz-regular text-xl whitespace-pre-line">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Tokenomics;
