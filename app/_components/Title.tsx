import { ReactNode } from "react";

type TitleProps = {
    children: ReactNode;
    className?: string;
};

const Title = ({ children, className }: TitleProps) => {
    return (
        <div
            className={`gap-2 flex flex-col items-center md:gap-7 ${className}`}
        >
            <div className="h-2 bg-dark-blue md:h-3 w-28"></div>
            <div className="text-dark-blue leading-snug text-center font-gideonRoman tracking-[0.5rem] text-2xl uppercase text-[1.5rem] md:text-[2.5rem] ">
                {children}
            </div>
        </div>
    );
};

export default Title;
