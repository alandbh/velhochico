import NavLink from "./NavLink";

const NavMenu = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-8 text-base">
          <NavLink href="/">
            <span>Início</span>
          </NavLink>

          <NavLink href="/acomodacoes">
            <span>Acomodações</span>
          </NavLink>

          <NavLink href="/culinaria">
            <span>Culinária</span>
          </NavLink>

          <NavLink href="/atrativos">
            <span>Atrativos</span>
          </NavLink>

          <NavLink href="/contato">
            <span>Contato</span>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
