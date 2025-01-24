import Link from "next/link";

export default function Navbar() {
        return (
            <header className="bg-white shadow-md shadow-black/60">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="flex items-center">
                        <img src="/logo_bumn.png" alt="Logo BUMN" className="h-8 mr-4" />
                        <img src="/logo_rb.png" alt="Logo RB" className="h-12 mr-4" />
                    </div>
                    <nav className="space-x-6 flex items-center">
                        <Link href="/" className="text-[#486284] hover:font-bold font-sans">Beranda</Link>
                        <Link href="/program-rumah-bumn" className="text-[#486284] hover:font-bold font-sans">Program Rumah BUMN</Link>
                        <Link href="/ekatalog" className="text-[#486284] hover:font-bold font-sans">E-Katalog</Link>
    
                        {/* Kotak Pencarian */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-48 h-10 pl-4 pr-10 rounded-lg border border-black text-black focus:outline-none"
                            />
                            <button className="absolute right-2 top-0 p-2 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35" />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
