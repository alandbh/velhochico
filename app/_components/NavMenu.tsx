import NavLink from "./NavLink";
import Hamburguer from "./icons/Hamburguer";

const NavMenu = () => {
    return (
        <nav className="hidden lg:block">
            <ul className="flex gap-8 text-base max-md:flex-col">
                <NavLink href="/">Início</NavLink>
                <NavLink href="/acomodacoes">Acomodações</NavLink>
                <NavLink href="/culinaria">Culinária</NavLink>
                <NavLink href="/atrativos">Atrativos</NavLink>
                <NavLink href="/contato">Contato</NavLink>
            </ul>
        </nav>
    );
};

export default NavMenu;
