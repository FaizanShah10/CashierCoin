const Marquee = ({rotation}) => {
  return (
    <section
      className={`
        relative
        z-50
        -mt-[130px]     /* pulls marquee upward */
        
        w-[140vw]
        left-1/2
        -translate-x-1/2
        bg-[#D92833]
        py-10 md:py-16
        border-t-2 border-b-2 border-dashed border-white/90
        pointer-events-none
      `}
      style={{ boxShadow: "0 -18px 30px rgba(0,0,0,0.6)", rotate: `${rotation}deg` }}
    >
      
      <div className="marquee">
        <div className="marquee__track animate-marquee flex gap-16 items-center whitespace-nowrap px-10 text-white">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="rocket-regular uppercase text-6xl">
              Scashero
            </span>
            <img src="/images/cross.png" className="w-8 h-8" />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Marquee;
