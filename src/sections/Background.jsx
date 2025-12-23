export default function Background() {
  return (
    <section className="relative w-full md:h-screen h-[80vh] bg-[#1C1B1C] overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 md:pt-32 pb-[40vh]">
        <div className="flex justify-end">
          <div className="max-w-md ">
            <h1 className="text-white rocket-regular md:text-[120px] text-[76px] leading-none">
              THE BACKGROUND.
            </h1>

            <p className="mt-4 text-sm text-gray-300 uppercase tracking-widest">
              Every memecoin is a character.<br />
              This one’s the lead.
            </p>

            <button className="mt-6 px-8 py-3 rounded-full border border-white text-white text-sm tracking-widest hover:bg-white hover:text-black transition">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      <img
        src="./images/GroupImg.png"
        alt="Characters"
        className="
          absolute md:bottom-0 bottom-20 left-1/2 -translate-x-1/2
          md:w-[80%] w-full max-w-none z-10 pointer-events-none
        "
      />

      {/* red glow */}
      <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-full h-[400px] bg-[#D92833] blur-[180px] opacity-60 z-0" />
    </section>
  );
};
