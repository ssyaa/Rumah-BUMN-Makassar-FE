import React from "react";

const Banner: React.FC = () => {
    return (
        <div className="bg-blue-50 h-[300px] flex items-center justify-center">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
                {/* Bagian Kiri: Gambar (Hanya muncul di layar MD ke atas) */}
                <div className="hidden md:flex md:w-1/2 relative justify-center items-center mb-6 md:mb-0">
                    <div className="rounded-lg p-3 max-w-xs mx-auto md:mx-0 relative">
                        {/* Gambar market.png (background) */}
                        <img
                            src="/market.png"
                            alt="Rumah BUMN"
                            className="rounded-lg w-full h-auto object-cover"
                            style={{
                                transform: "translateY(10%)",
                                top: "15%",
                                left: "35%",
                                width: "90%",
                                height: "auto",
                            }}
                        />
                        {/* Gambar people.png */}
                        <img
                            src="/people.png"
                            alt="People"
                            className="rounded-lg object-cover absolute"
                            style={{
                                top: "30%",
                                left: "45%",
                                width: "50%",
                                height: "auto",
                            }}
                        />
                        {/* Gambar logo_rb.png */}
                        <img
                            src="/logo_rb.png"
                            alt="Rumah BUMN Makassar"
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

                {/* Bagian Kanan: Teks dan Tombol */}
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