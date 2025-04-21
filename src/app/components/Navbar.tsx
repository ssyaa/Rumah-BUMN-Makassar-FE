"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLoading(false);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  const handleNavigation = (url: string) => {
    if (pathname !== url) {
      setLoading(true);
      setMenuOpen(false);
      router.push(url);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Tutup menu mobile setelah klik
    } else {
      router.push(`/#${id}`); // Kalau belum di halaman utama
    }
  };

  const isBeranda = pathname === "/";
  const isReviewPage = pathname.startsWith("/review/");
  const isEkatalogPage = pathname === "/ekatalog";
  const scrolled = scrollY > 50;

  const navbarBg = isReviewPage || (isBeranda && scrolled)
    ? "bg-white shadow-md"
    : "bg-transparent";

  const dynamicGray = 255 - Math.min(scrollY, 100) * 2.5;
  const textColorStyle = isEkatalogPage || isReviewPage || (isBeranda && scrolled)
    ? { color: "black" }
    : { color: `rgb(${dynamicGray}, ${dynamicGray}, ${dynamicGray})` };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${navbarBg}`}>
        <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo_bumn.png"
              alt="Logo BUMN"
              width={96}
              height={0}
              className="h-auto w-20 object-contain"
            />
            <Image
              src="/logo_rb_mks.png"
              alt="Logo RB Makassar"
              width={64}
              height={0}
              className="h-auto w-16 object-contain"
            />
          </div>

          <nav className="hidden md:flex space-x-6 items-center ml-auto">
            <button onClick={() => handleNavigation("/")} style={textColorStyle} className="hover:font-bold font-sans">
              Beranda
            </button>
            <button onClick={() => scrollToSection("program")} style={textColorStyle} className="hover:font-bold font-sans">
              Program Rumah BUMN
            </button>
            <button onClick={() => handleNavigation("/ekatalog")} style={textColorStyle} className="hover:font-bold font-sans">
              Produk UMKM
            </button>
          </nav>

          <div className="relative md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} style={textColorStyle}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <button onClick={() => handleNavigation("/")} className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100">
                    Beranda
                  </button>
                  <button onClick={() => scrollToSection("program")} className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100">
                    Program Rumah BUMN
                  </button>
                  <button onClick={() => handleNavigation("/ekatalog")} className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-100">
                    Produk UMKM
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-25 z-50">
          <span className="text-white text-2xl font-bold">Loading...</span>
        </div>
      )}
    </>
  );
}
