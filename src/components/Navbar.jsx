import { Link, NavLink } from "react-router-dom";

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
                <a
                  className="transition text-white hover:text-white/75"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition text-white hover:text-white/75"
                  href="/"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="transition text-white hover:text-white/75"
                  href="/"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-fuchsia-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-fuchsia-500"
                href="/"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
