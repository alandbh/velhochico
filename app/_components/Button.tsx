import Link from "next/link";

const Button = ({ text, style, href, icon }: any) => {
    return (
        <>
            {style === "primary" ? (
                <Link
                    href={href}
                    className="text-white font-montserrat bg-green-2 focus:outline-none focus:bg-green-700 focus:ring-4 hover:bg-green-700 hover:ring-4 ring-green-300 py-3 px-6 rounded-md font-bold uppercase flex gap-2 w-fit"
                >
                    {icon}
                    <span className="whitespace-nowrap">{text}</span>
                </Link>
            ) : (
                <Link
                    href={href}
                    className="text-green-2 hover:bg-green-100 hover:text-green-700 focus:outline-none focus:bg-green-100 focus:text-green-700 py-3 px-6 rounded-md font-bold gap-2 uppercase flex border-solid border-2 border-green-2 w-fit"
                >
                    {icon}
                    <span className="whitespace-nowrap">{text}</span>
                </Link>
            )}
        </>
    );
};

export default Button;
