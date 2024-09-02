import NavLink from "./NavLink";

const NavMenuMobile = () => {
    return (
        <nav className="lg:hidden flex flex-col justify-center items-center h-full">
            <ul className="flex gap-10 flex-col items-center justify-center text-3xl h-full">
                <NavLink href="/">Início</NavLink>
                <NavLink href="/acomodacoes">Acomodações</NavLink>
                <NavLink href="/culinaria">Culinária</NavLink>
                <NavLink href="/atrativos">Atrativos</NavLink>
                <NavLink href="/contato">Contato</NavLink>
            </ul>
        </nav>
    );
};

export default NavMenuMobile;
