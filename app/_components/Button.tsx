import Link from "next/link";

type ButtonPropsTypes = {
    text: string;
    style?: "primary" | "regular";
    href: string;
    icon?: any;
    size?: "large" | "medium" | "small";
};

const Button = ({
    text,
    style = "regular",
    size = "medium",
    href,
    icon,
}: ButtonPropsTypes) => {
    const buttonClasses = {
        base: " focus:outline-none focus:ring-4 hover:ring-4 ring-green-300/50 font-montserrat font-bold uppercase flex w-fit ",
        primary:
            " bg-green-2 focus:bg-green-700 hover:bg-green-700 text-white rounded-md  ",
        regular:
            "rounded-md text-green-2 hover:bg-green-500 hover:text-green-700 hover:text-white/90 focus:bg-green-100 focus:text-green-700 border-solid border-2 border-green-2",
        large: " py-3 px-6 gap-2 ",
        medium: " py-2 px-5 gap-1 rounded-[6px] text-sm ",
        small: " py-2 px-4 gap-1 text-xs rounded-[4px] ",
    };
    return (
        <>
            <Link
                href={href}
                className={
                    buttonClasses.base +
                    buttonClasses[style] +
                    buttonClasses[size]
                }
            >
                {icon}
                <span className="whitespace-nowrap">{text}</span>
            </Link>
        </>
    );
};

export default Button;
