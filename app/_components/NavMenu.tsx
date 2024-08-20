import NavLink from "./NavLink";
import Hamburguer from "./icons/Hamburguer";

const NavMenu = () => {
    return (
        <div>
            <nav className="hidden md:block">
                <ul className="flex gap-8 text-base">
                    <NavLink href="/">Início</NavLink>
                    <NavLink href="/acomodacoes">Acomodações</NavLink>
                    <NavLink href="/culinaria">Culinária</NavLink>
                    <NavLink href="/atrativos">Atrativos</NavLink>
                    <NavLink href="/contato">Contato</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default NavMenu;
