import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <div className="gap-2 flex flex-col items-center md:gap-7">
      <div className="w-[111px] h-2  bg-dark-blue md:h-3"></div>
      <div className="whitespace-nowrap font-inter text-dark-blue text-2xl uppercase md:text-[2.5rem] ">
        {children}
      </div>
    </div>
  );
};

export default Title;
