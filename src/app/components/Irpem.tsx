import React from "react";
import { FaStore, FaGlobe, FaLaptop, FaHome } from "react-icons/fa";

const InformasiPembinaan = () => {
    return (
        <div className="w-full min-h-[400px] flex flex-col md:flex-row items-center justify-between bg-[#001F5B] text-white py-24 px-10 shadow-md">
        
        {/* Bagian Kiri - Teks */}
        <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
                Informasi Pembinaan Rumah BUMN Makassar
            </h2>
        </div>

        {/* Bagian Kanan - Ikon Statistik */}
        <div className="md:w-1/2 flex flex-wrap justify-center gap-8 mt-6 md:mt-0">
            {/* UMKM */}
            <div className="flex items-center space-x-2">
                <FaHome className="text-4xl" />
                <div>
                    <p className="text-xl font-bold">+120</p>
                    <p className="text-sm">UMKM</p>
                </div>
            </div>

            {/* Go Digital */}
            <div className="flex items-center space-x-2">
                <FaLaptop className="text-4xl" />
                <p className="text-sm">Go Digital</p>
            </div>

            {/* Go Modern */}
            <div className="flex items-center space-x-2">
                <FaStore className="text-4xl" />
                <p className="text-sm">Go Modern</p>
            </div>

            {/* Go Online */}
            <div className="flex items-center space-x-2">
                <FaGlobe className="text-4xl" />
                <p className="text-sm">Go Online</p>
            </div>
        </div>
        </div>
    );
};

export default InformasiPembinaan;
