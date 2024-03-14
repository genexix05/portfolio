import Link from 'next/link';

export default function Home() {
    return (
            <main className="container mx-auto">
                <section className="text-center mt-12">
                    <h1 className="text-5xl font-bold text-gray-800">Bienvenido a Mi Portafolio</h1>
                    <p className="text-xl mt-4">Descubre mis proyectos y aprende más sobre mí.</p>
                </section>

                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center">Sobre Mí</h2>
                    <div className="mt-4 text-center">
                        <p>Soy [tu nombre], un desarrollador apasionado con experiencia en [tecnologías relevantes].</p>
                        <p>Mi viaje en el desarrollo web comenzó en [año] y desde entonces, he colaborado en [número] proyectos, ayudando a construir soluciones web eficientes.</p>
                        <Link href="/about" className="inline-block bg-blue-500 text-white mt-4 px-6 py-2 rounded hover:bg-blue-600">Leer más</Link>
                    </div>
                </section>

                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-center">Proyectos Destacados</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border rounded-lg p-4">
                            <h3 className="font-bold text-lg">Proyecto 1</h3>
                            <p>Descripción breve del proyecto. Tecnologías usadas: HTML, CSS, JS.</p>
                            <Link href="/projects/project1" className="inline-block bg-blue-500 text-white mt-4 px-6 py-2 rounded hover:bg-blue-600">Ver más</Link>
                        </div>
                    </div>
                </section>

                <section className="mt-20 mb-12">
                    <h2 className="text-3xl font-bold text-center">Contacto</h2>
                    <div className="mt-4 text-center">
                        <p>¿Interesado en trabajar juntos o quieres saber más? No dudes en contactarme.</p>
                        <Link href="/contact" className="inline-block bg-blue-500 text-white mt-4 px-6 py-2 rounded hover:bg-blue-600">Hablemos</Link>
                    </div>
                </section>
            </main>
    );
}
