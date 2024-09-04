import Link from "next/link";
import IconLogo from "./icons/Logo";

const LogoLink = ({ href }: { href: string }) => {
    return (
        <div>
            <Link href={href}>
                <div className="bg-green-3 px-4 pt-6 pb-5 rounded-b-4xl w-40 flex items-center justify-center md:hidden">
                    <IconLogo width={120} color="#14274A" />
                </div>
                <div className="bg-green-3 px-4 pt-6 pb-5 rounded-b-4xl w-fit max-md:hidden">
                    <IconLogo color="#14274A" />
                </div>
            </Link>
        </div>
    );
};

export default LogoLink;
