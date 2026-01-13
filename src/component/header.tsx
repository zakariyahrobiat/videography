import { useState } from "react";
import Button from "./button";

const Header = () => {
  const [isScrolled] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 flex justify-between items-center w-full px-4 py-4 md:px-10 transition-colors duration-300 ${
        isScrolled ? "bg-[#121826]/90 backdrop-blur-sm" : "bg-[#121826]"
      } text-white hover:text-[#FFD166]`}
      role="banner"
    >
      <h1 className="text-2xl font-bold font-space tracking-tight">
        <a
          href="/"
          className="hover:text-[#FFD166] transition-colors duration-200"
        >
          SAB
        </a>
      </h1>
      <nav role="navigation">
        <Button text="Enrol Now" aria-label="Enroll in the course" />
      </nav>
    </header>
  );
};

export default Header;
