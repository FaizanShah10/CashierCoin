import React from "react";

const MeetTheCast = () => {
  return (
    <section
      className="
        relative
        z-30
        bg-[#400C0F]
        h-auto py-26
      "
    >
      <div className="max-w-[1800px] mx-auto px-6">
        <img
          src="/images/Cast.png"
          alt="Meet the Cast"
          className="
            w-full
            h-full
            object-contain
            pointer-events-none
            select-none
          "
        />
      </div>
    </section>
  );
};

export default MeetTheCast;
