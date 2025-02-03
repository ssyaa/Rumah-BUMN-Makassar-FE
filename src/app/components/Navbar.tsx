"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md shadow-black/60">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo_bumn.png" alt="Logo BUMN" className="h-8 mr-4" />
          <img src="/logo_rb.png" alt="Logo RB" className="h-12 mr-4" />
        </div>

        {/* Menu untuk Desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-[#486284] hover:font-bold font-sans">
            Beranda
          </Link>
          <Link href="/program-rumah-bumn" className="text-[#486284] hover:font-bold font-sans">
            Program Rumah BUMN
          </Link>
          <Link href="/ekatalog" className="text-[#486284] hover:font-bold font-sans">
            E-Katalog
          </Link>

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

        {/* Tombol Menu untuk Mobile */}
        <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu untuk Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-300">
          <Link href="/" className="block px-6 py-3 text-[#486284] hover:bg-gray-100">
            Beranda
          </Link>
          <Link href="/program-rumah-bumn" className="block px-6 py-3 text-[#486284] hover:bg-gray-100">
            Program Rumah BUMN
          </Link>
          <Link href="/ekatalog" className="block px-6 py-3 text-[#486284] hover:bg-gray-100">
            E-Katalog
          </Link>
        </div>
      )}
    </header>
  );
}
