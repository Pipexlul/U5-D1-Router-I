const Home = () => {
  return (
    <main className="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2 sm:place-items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            La casa del pancito con queso
          </h2>
          <p className="hidden text-gray-300 sm:mt-4 sm:block">
            Bienvenido a el mejor lugar para conseguir tus pancitos con queso
            derretido. ¡Hay muchas ofertas y variedades!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          alt="Logo sandwich de queso derretido"
          src="/img/griller.png"
          className="max-w-[60%] h-auto object-cover"
        />
      </div>
    </main>
  );
};

export default Home;
