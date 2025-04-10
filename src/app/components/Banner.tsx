"use client";
import React from "react";
import Image from "next/image";

const Banner: React.FC = () => {
    return (
        <div className="bg-blue-50 h-[300px] flex items-center justify-center">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
                {/* Gambar bagian kiri */}
                <div className="hidden md:flex md:w-1/2 relative justify-center items-center mb-6 md:mb-0">
                    <div className="rounded-lg p-3 max-w-xs mx-auto md:mx-0 relative w-full h-[250px]">
                        <Image
                            src="/market.png"
                            alt="Rumah BUMN"
                            fill
                            className="rounded-lg object-cover"
                            style={{
                                transform: "translateY(10%)",
                                width: "90%",
                                left: "5%",
                                top: "10%",
                            }}
                        />
                        <Image
                            src="/people.png"
                            alt="People"
                            width={100}
                            height={100}
                            className="rounded-lg object-cover absolute"
                            style={{
                                top: "30%",
                                left: "45%",
                                width: "50%",
                                height: "auto",
                            }}
                        />
                        <Image
                            src="/logo_rb.png"
                            alt="Rumah BUMN Makassar"
                            width={50}
                            height={50}
                            className="rounded-lg object-cover absolute"
                            style={{
                                bottom: "65%",
                                right: "38%",
                                width: "15%",
                                height: "auto",
                            }}
                        />
                    </div>
                </div>

                {/* Teks dan tombol */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                        Punya Produk UMKM?
                        <br />
                        Ayo Daftarkan Produkmu Sekarang!
                    </h1>
                    <a href="https://forms.gle/55oJHLTVGGSS1rQe6" target="_blank" rel="noopener noreferrer">
                        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
                            Daftar
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
