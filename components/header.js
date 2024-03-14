import Link from 'next/link';
import Image from 'next/image'; 

function Header() {
    return (
        <header className="fixed top-5 left-1/2 transform -translate-x-1/2 w-5/6 px-5 py-1 flex justify-center items-center backdrop-blur-lg bg-white/30 z-50 rounded-lg border border-gray-200">
            <nav className="container flex justify-between items-center py-4">
                <div className="h-6 w-6 text-blue-500">
                    <Image src="../public/logo.svg" alt="Logo" width={24} height={24} />
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/pages" className="hover:text-blue-500">Pages</Link>
                    <Link href="/account" className="hover:text-blue-500">Account</Link>
                    <Link href="/blocks" className="hover:text-blue-500">Blocks</Link>
                    <Link href="/docs" className="hover:text-blue-500">Docs</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
