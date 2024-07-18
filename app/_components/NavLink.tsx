import Link from "next/link";
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <div>
      <Link
        className={"pb-1 px-1 border-b-2 border-black font-bold"}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
