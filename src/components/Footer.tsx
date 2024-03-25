import { SOCIALS } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center mt-5 ">
      <div className="p-0 container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-center justify-center gap-[10%] md:flex-row">
          <div className="flex flex-wrap gap-10 sm:justify-center items-center md:flex-1">
            {/* Container for Socials */}
            <FooterColumn title={SOCIALS.title}>
              <ul className="regular-14 flex gap-4 text-gray-30 flex-wrap justify-center">
                {SOCIALS.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={link.image}
                        alt={link.name}
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 Sarkem Works | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
