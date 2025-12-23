import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { motion } from "framer-motion";

const Lead = () => {


const fromLeft = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const fromRight = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const fromBottom = {
  hidden: { opacity: 0, y: 120 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};


  return (
    <section
      className="
    relative
    w-screen
    min-h-[120vh]
    md:min-h-[140vh]
    bg-[#D92833]
    pt-10
    md:pb-0
    pb-[420px]
  "
    >
      <div className="relative max-w-[1800px] mx-auto h-full px-6 lg:px-12">

        {/* ================= TEXT + IMAGE ================= */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between">

          {/* LEFT CONTENT (FROM LEFT) */}
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-1/2 text-white md:pt-24 lg:pt-0"
          >
            <h1 className="rocket-regular whitespace-nowrap text-[90px] lg:text-[283px] font-extrabold leading-[0.9] uppercase">
              Lorem Ipsum
            </h1>

            <p className="coconutz-regular md:mt-16 max-w-md text-white/70 uppercase">
              Every memecoin is a character. This one’s the lead.
            </p>

            <button className="uppercase md:mt-20 mt-10 px-14 py-3 rounded-full border-2 border-white hover:bg-white hover:text-[#D92833] cursor-pointer font-semibold transition-all duration-300">
              buy now
            </button>
          </motion.div>

          {/* RIGHT IMAGE (FROM RIGHT) */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-16 lg:mt-0"
          >
            <img
              src="/images/LeadChar.png"
              alt="Lead character"
              className="w-[300px] sm:w-[320px] lg:w-[80vh]"
            />
          </motion.div>
        </div>

        {/* ================= FLOATING CARD (FROM BOTTOM) ================= */}
        <motion.div
          variants={fromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="
            absolute
            left-6
            lg:left-12
            -bottom-100
            md:-bottom-10
            z-[2000]
            w-[280px]
            sm:w-[320px]
          "
        >
          <div className="relative h-[420px] bg-white rounded-[22px] border-[4px] border-black shadow-xl">

            {/* HEADER */}
            <div className="px-5 pt-5">
              <p className="text-xs uppercase font-bold text-[#D92833]">
                Lorem ipsum dolor
              </p>
              <h3 className="rocket-regular text-[38px] uppercase">
                Lorem Ipsum
              </h3>
            </div>

            {/* IMAGE */}
            <div className="px-4 pb-4 pt-4">
              <div className="relative h-[280px] bg-[#ff5a5f] rounded-[18px] border-4 border-black overflow-hidden">
                <img
                  src="/images/CardImg.png"
                  alt="card"
                  className="absolute left-1/2 -translate-x-1/2 -top-6 w-[105%]"
                />
              </div>
            </div>

            {/* FLOATING ARROW */}
            <div className="absolute -top-8 -right-8">
              <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
                <ImArrowUpRight2 size={40} className="text-white" />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Lead;
