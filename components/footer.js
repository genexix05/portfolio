// components/Footer.js

function Footer() {
    return (
        <footer className="bg-gray-700 text-white p-6">
            <div className="container mx-auto text-center">
                © {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;
