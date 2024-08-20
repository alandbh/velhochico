import Link from "next/link";
import LogoExtended from "./icons/LogoExtended";

const LogoLinkExtended = ({ href }: { href: string }) => {
    return (
        <div>
            <Link href={href}>
                <div className="bg-green-3 px-4 pt-6 pb-5 rounded-b-4xl w-fit">
                    <LogoExtended />
                </div>
            </Link>
        </div>
    );
};

export default LogoLinkExtended;
