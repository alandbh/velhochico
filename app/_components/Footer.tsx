import React from "react";
import IconLogo from "./icons/Logo";
import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";
import IconWhatsapp from "./icons/Whatsapp";

const Footer = () => {
  return (
    <div className="h-65 w-full bg-darkest-blue flex justify-between items-center text-white relative px-20 mt-[5.5rem]">
      <div className="bg-darkest-blue h-20 w-20 absolute -top-3 rotate-45	left-[50%] -z-10"></div>
      <ul>
        <li className="mb-5">
          <IconLogo color="#ffffff" />
        </li>
        <li>Estrada Vargem Bonita / Casca DÁnta, km 05.</li>
        <li>
          {" "}
          <a href="tel:+55 37 99929-0110">+55 37 99929-0110</a>
        </li>
        <li>
          <a href="mailto:contato@pousadavelhochico.com.br">
            contato@pousadavelhochico.com.br
          </a>
        </li>
      </ul>
      <ul className="flex flex-col self-center gap-y-[1.25rem] content">
        <li>
          <a href="/#" className="flex">
            <span className="mr-[38px]">
              <Facebook />
            </span>
            Facebook
          </a>
        </li>
        <li>
          <a href="#" className="flex">
            <span className="mr-7">
              <Twitter />
            </span>
            Twitter
          </a>
        </li>
        <li>
          <a href="#" className="flex">
            <span className="mr-7">
              <Instagram />
            </span>
            Instagram
          </a>
        </li>
      </ul>
      <ul className="text-2xl">
        <li>Reservas</li>
        <li>
          <a
            href=" https://wa.me/553799290110"
            className="flex items-center gap-x-2"
          >
            <IconWhatsapp color="#ffffff" />
            99929-0110
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
