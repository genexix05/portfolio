import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-5xl text-center mt-20">
          Bienvenido a Mi Portafolio
        </h1>
      </div>
      <section className="my-20">
        <h2 className="text-3xl font-bold">Sobre Mí</h2>
        <p className="mt-4">Aquí algo sobre mí...</p>
      </section>

      <section className="my-20">
        <h2 className="text-3xl font-bold">Proyectos</h2>
        <div className="grid grid-cols-3 gap-4">
        </div>
      </section>


      <Footer />
    </>
  );
}
