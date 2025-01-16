export default function Navbar() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center">
                <img src="/logo_bumn.png" alt="Logo BUMN" className="h-8 mr-4" />
                <img src="/logo_rb.png" alt="Logo BUMN" className="h-8 mr-4" />
            </div>
            <nav className="space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-500">Beranda</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">Program</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">E-Katalog</a>
            </nav>
            </div>
        </header>
        );
}
