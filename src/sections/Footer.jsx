import React from "react";
import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative bg-[#0e0e0e] pt-40 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* BLACK CTA CARD */}
        <div
  className="
    relative
    bg-black
    rounded-[32px]
    px-6 md:px-16
    pt-10 md:py-20
    overflow-visible
  "
>
  {/* MOBILE STACK WRAPPER */}
  <div className="flex flex-col md:block gap-10">

    {/* ================= TEXT ================= */}
    <div className="relative z-10 max-w-xl order-1">
      <h2 className="rocket-regular text-[#E11D2E] text-6xl text-center md:text-[160px] uppercase leading-none">
        Join the Cast
      </h2>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {/* Twitter */}
        <a
          href="#"
          className="
            flex items-center justify-between gap-4
            bg-white text-black
            px-6 py-3
            rounded-full
            font-semibold
          "
        >
          Join Our Twitter
          <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
            →
          </span>
        </a>

        {/* Telegram */}
        <a
          href="#"
          className="
            flex items-center justify-between gap-4
            bg-[#E11D2E] text-black
            px-6 py-3
            rounded-full
            font-semibold
          "
        >
          Join Our Telegram
          <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
            →
          </span>
        </a>
      </div>
    </div>

    {/* ================= SOCIAL ICONS ================= */}
    <div
      className="
        order-2
        flex gap-4
        md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2
        md:flex-col
        z-30
      "
    >
      <a className="w-12 h-12 bg-[#2b2b2b] rounded-full flex items-center justify-center">
        <img className="w-6 h-6" src="/images/Telegram.png" alt="" />
      </a>
      <a className="w-12 h-12 bg-[#E11D2E] rounded-full flex items-center justify-center">
        <img className="w-6 h-6" src="/images/X.png" alt="" />
      </a>
      <a className="w-12 h-12 bg-[#2b2b2b] rounded-full flex items-center justify-center">
        <img className="w-6 h-6" src="/images/Youtube.png" alt="" />
      </a>
    </div>

    {/* ================= IMAGE ================= */}
    <div
      className="
        order-3
        relative
        md:absolute
        md:right-6 md:bottom-0 md:-top-32
        flex justify-center bottom-0
      "
    >
      <img
        src="/images/FooterImg.png"
        alt="Cast member"
        className="
          h-[320px] sm:h-[360px]
          md:h-[520px]
          object-contain
          pointer-events-none
          select-none
        "
      />
    </div>

  </div>
</div>


        <div className="
            relative
            mt-6
            bg-black
            rounded-[24px]
            px-10 md:px-16
            py-8
            overflow-visible
            flex md:flex-row flex-col items-center justify-between
          "
        >
            <h1 className="text-white coconutz-regular">© 2025 – $CASHERO</h1>
            <h1 className="text-[#F5C236] coconutz-regular">A series-driven memecoin.</h1>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
