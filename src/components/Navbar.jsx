import { NavLink } from "react-router-dom";

import ShinyNavLink from "./ShinyNavLink";

const Navbar = () => {
  return (
    <header className="bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-extrabold bg-clip-text bg-gradient-to-r from-red-300 via-yellow-300 to-red-300 text-transparent">
          Panshito Con Quesho
        </h1>

        <div className="flex flex-1 items-center justify-between">
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <NavLink to="/home">
                  {({ isActive }) => {
                    return (
                      <ShinyNavLink
                        label="Home"
                        bgColor="bg-fuchsia-600"
                        labelColor="text-fuchsia-400"
                        isActive={isActive}
                      />
                    );
                  }}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  {({ isActive }) => {
                    return (
                      <ShinyNavLink
                        label="Contacto"
                        bgColor="bg-fuchsia-600"
                        labelColor="text-fuchsia-400"
                        isActive={isActive}
                      />
                    );
                  }}
                </NavLink>
              </li>
              <li>
                <NavLink to="/secret">
                  {({ isActive }) => {
                    return (
                      <ShinyNavLink
                        label="Confidencial (NO ENTRAR)"
                        bgColor="bg-fuchsia-600"
                        labelColor="text-fuchsia-400"
                        isActive={isActive}
                      />
                    );
                  }}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
