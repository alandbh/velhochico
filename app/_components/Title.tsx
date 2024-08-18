import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
    return (
        <div className="gap-2 flex flex-col items-center md:gap-7">
            <div className="w-[111px] h-2 bg-dark-blue md:h-3"></div>
            <div className="text-dark-blue font-gideonRoman tracking-[0.5rem] text-2xl uppercase text-[1.5rem] md:text-[2.5rem] ">
                {children}
            </div>
        </div>
    );
};

export default Title;
