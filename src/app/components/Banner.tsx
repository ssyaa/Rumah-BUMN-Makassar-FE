"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner: React.FC = () => {
    return (
        <div className="bg-blue-50 h-[300px] flex items-center justify-center">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
                {/* Bagian Kiri: Gambar (Hanya muncul di layar MD ke atas) */}
                <div className="hidden md:flex md:w-1/2 relative justify-center items-center mb-6 md:mb-0">
                    <div className="rounded-lg p-3 max-w-xs mx-auto md:mx-0 relative">
                        {/* Gambar market.png (background) */}
                        <Image
                            src="/market.png"
                            alt="Rumah BUMN"
                            className="rounded-lg w-full h-auto object-cover"
                            width={500}
                            height={300}
                            style={{
                                transform: "translateY(10%)",
                                top: "15%",
                                left: "35%",
                                width: "90%",
                                height: "auto",
                            }}
                        />
                        {/* Gambar people.png */}
                        <Image
                            src="/people.png"
                            alt="People"
                            className="rounded-lg object-cover absolute"
                            width={250}
                            height={200}
                            style={{
                                top: "30%",
                                left: "45%",
                                width: "50%",
                                height: "auto",
                            }}
                        />
                        {/* Gambar logo_rb.png */}
                        <Image
                            src="/logo_rb.png"
                            alt="Rumah BUMN Makassar"
                            className="rounded-lg object-cover absolute"
                            width={100}
                            height={100}
                            style={{
                                bottom: "72%",
                                right: "46%",
                                width: "15%",
                                height: "auto",
                            }}
                        />
                    </div>
                </div>

                {/* Bagian Kanan: Teks dan Tombol */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 text-center md:text-left"
                >
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
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
