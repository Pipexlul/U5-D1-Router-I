const Form = ({ title, description, children }) => {
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
        {title}
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
        {description}
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
        {children}
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-fuchsia-800 hover:bg-fuchsia-700"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Form;
