import { navbarSection } from "../constants";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-4 md:px-32 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold font-poppins text-white capitalize">
          {navbarSection.logo}
        </h2>
      </div>
      <ul className="hidden list-none md:flex space-x-12">
        {navbarSection.elements.map((el) => {
          const [text, href] = el;
          return (
            <li key={href} className="text-white text-lg capitalize">
              <a href={href}>{text}</a>
            </li>
          );
        })}
      </ul>

      <div className="md:hidden">
        {!isOpen ? (
          <Bars3Icon
            className="h-8 w-8 fill-white"
            onClick={() => setIsOpen((curr) => !curr)}
          />
        ) : (
          <XMarkIcon
            className="h-8 w-8 fill-white"
            onClick={() => setIsOpen((curr) => !curr)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
