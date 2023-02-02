import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="grid h-screen px-4 place-content-center bg-gray-900">
      <div className="text-center">
        <h2 className="font-black text-xl md:text-3xl lg:text-9xl text-gray-700">
          No se pudo encontrar la página. ¡Lo lamentamos!
        </h2>

        <Link
          to={"/home"}
          className="inline-block px-5 py-3 mt-20 text-sm font-medium text-white bg-fuchsia-600 rounded hover:bg-fuchsia-700 focus:outline-none focus:ring transition"
        >
          Ir a página principal
        </Link>
      </div>
    </div>
  );
};

export default Error;
