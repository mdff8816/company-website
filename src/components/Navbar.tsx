import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/" className="ml-3">
        <img src="/SW-Logo1.svg" className="ml-3 h-6 sm:h-9" alt="Logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" className="text-lg font-roboto 2xl:font-roboto 2xl:text-gray-950 text-gray-950  2xl:hover:text-green-500 hover:text-green-500">
          Home
        </NavbarLink>
        <NavbarLink href="/about" className="text-lg font-roboto 2xl:font-roboto 2xl:text-gray-950 text-gray-950  2xl:hover:text-green-500 hover:text-green-500">About</NavbarLink>
        <NavbarLink href="/services" className="text-lg font-roboto 2xl:font-roboto 2xl:text-gray-950 text-gray-950  2xl:hover:text-green-500 hover:text-green-500">Service</NavbarLink>
        <NavbarLink href="/teams" className="text-lg font-roboto 2xl:font-roboto 2xl:text-gray-950 text-gray-950   2xl:hover:text-green-500 hover:text-green-500">Team</NavbarLink>
        <NavbarLink href="/portfolio" className="text-lg font-roboto 2xl:font-roboto 2xl:text-gray-950 text-gray-950  2xl:hover:text-green-500 hover:text-green-500">Portfolio</NavbarLink>
        <NavbarLink href="/contact" className="text-lg font-roboto 2xl:font-roboto 2xl:text-gray-950 text-gray-950  2xl:hover:text-green-500 hover:text-green-500">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
