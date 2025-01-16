import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="relative bg-[#0023A2] text-white h-screen overflow-hidden">
            {/* Konten Teks */}
            <div className="container mx-auto px-6 py-20 z-10 flex flex-col items-start justify-center h-full relative pl-20">
                <h1 className="text-2xl font-semibold mb-2 tracking-[15px]">SELAMAT DATANG DI</h1>
                <h3 className="text-9xl font-semibold mb-2 tracking-[5px]">RUMAH BUMN</h3>
                <h2 className="text-4xl font-semibold mb-4 tracking-[15px]">Makassar</h2>
                <p className="text-lg font-normal">
                    Rumah BUMN merupakan wadah bagi langkah kolaborasi BUMN dalam membentuk Digital Economy
                    Ecosystem melalui pembinaan bagi UKM untuk meningkatkan kapasitas dan kapabilitas UKM itu sendiri.
                </p>
            </div>

            {/* Gambar Sulawesi sebagai Background di Sisi Kanan */}
            <div className="absolute top-[-50px] right-[-120px] z-10 p-10 opacity-30">
                <img
                    src="/sulawesi.png"
                    alt="Sulawesi"
                    className="w-[850px] h-[850px] object-contain"
                />
            </div>

            {/* Gambar Latar Belakang */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src="/hero_bg.png"
                    alt="Map"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>
        </section>
    );
};

export default Hero;
