import logo from "/images/CashierLogo.png";
import menuIcon from "/images/menu.png"; 

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Cashero Logo"
          className="h-7 md:h-8"
        />
      </div>

      {/* Desktop: Buy Now Button */}
      <button
        className="
          hidden md:flex
          px-16 py-2
          coconutz-regular
          border border-white
          text-white
          rounded-full
          hover:bg-[#D92833]
          hover:border-[#D92833]
          transition
          cursor-pointer
        "
      >
        BUY NOW
      </button>

      {/* Mobile: Menu Icon */}
      <button className="md:hidden">
        <img
          src={menuIcon}
          alt="Menu"
          className="h-8 w-8"
        />
      </button>
    </nav>
  );
}
