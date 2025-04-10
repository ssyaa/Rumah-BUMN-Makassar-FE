import React from "react";
import { FaStore, FaGlobe, FaLaptop, FaHome } from "react-icons/fa";

const InformasiPembinaan = () => {
    return (
        <div className="w-full min-h-[400px] flex flex-col md:flex-row items-center justify-between bg-[#001F5B] text-white py-16 px-10 shadow-md">
        
        {/* Bagian Teks - Kiri pada PC, Tengah pada Mobile */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-lg md:text-xl font-medium tracking-wide">
                Informasi Pembinaan Rumah BUMN BRI Makassar
            </h2>
        </div>

        {/* Bagian Ikon Statistik - Kanan pada PC, Tengah pada Mobile */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-end gap-6">
            {/* UMKM */}
            <div className="flex flex-col items-center">
                <FaHome className="text-3xl md:text-4xl" />
                <p className="text-sm md:text-base font-bold">+120</p>
                <p className="text-xs md:text-sm">UMKM</p>
            </div>

            {/* Go Digital */}
            <div className="flex flex-col items-center">
                <FaLaptop className="text-3xl md:text-4xl" />
                <p className="text-xs md:text-sm">Go Digital</p>
            </div>

            {/* Go Modern */}
            <div className="flex flex-col items-center">
                <FaStore className="text-3xl md:text-4xl" />
                <p className="text-xs md:text-sm">Go Modern</p>
            </div>

            {/* Go Online */}
            <div className="flex flex-col items-center">
                <FaGlobe className="text-3xl md:text-4xl" />
                <p className="text-xs md:text-sm">Go Online</p>
            </div>
        </div>
        </div>
    );
};

export default InformasiPembinaan;
