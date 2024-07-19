import React from "react";
import LogoLink from "./LogoLink";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className="before:content[''] before:h-full before:w-full before:absolute before:bg-header-bg relative h-97 w-full bg-[url(/rede.jpg)] bg-no-repeat bg-cover flex flex-col">
      <div className="flex justify-around h-fit items-center z-10">
        <div className="col-start-2 col-span-2">
          <LogoLink href="/"></LogoLink>
        </div>
        <div className="col-start-7 flex align-baseline">
          <NavMenu></NavMenu>
        </div>
      </div>
      <h1 className="text-white z-10 font-licorice text-9xl text-center flex items-center self-center h-97">
        Acomodações
      </h1>
    </div>
  );
};

export default Header;
