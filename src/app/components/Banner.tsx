import React from "react";

const Banner: React.FC = () => {
    return (
        <div className="bg-blue-50 h-[400px] flex items-center justify-center">
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
                {/* Bagian Kiri: Gambar */}
                <div className="md:w-1/2 relative flex justify-center items-center mb-8 md:mb-0">
                    <div className="rounded-lg p-4 max-w-sm mx-auto md:mx-0 relative">
                        {/* Gambar market.png (background) */}
                        <img
                            src="/market.png"
                            alt="Rumah BUMN"
                            className="rounded-lg w-full h-auto object-cover"
                            style={{
                                transform: "translateY(12%)",
                                top: "20%", // Posisi gambar 20% dari atas elemen induk
                                left: "40%", // Posisi gambar 40% dari kiri elemen induk
                                width: "100%", // Ukuran gambar lebih kecil
                                height: "auto", // Menjaga proporsi gambar
                            }}
                        />
                        {/* Gambar people.png */}
                        <img
                            src="/people.png"
                            alt="People"
                            className="rounded-lg object-cover absolute"
                            style={{
                                top: "35%", // Atur posisi gambar dari atas
                                left: "50%", // Atur posisi gambar dari kiri
                                width: "60%", // Ukuran gambar lebih kecil dari sebelumnya
                                height: "auto", // Menjaga proporsi gambar
                            }}
                        />
                        {/* Gambar logo_rb.png */}
                        <img
                            src="/logo_rb.png"
                            alt="Rumah BUMN Makassar"
                            className="rounded-lg object-cover absolute"
                            style={{
                                bottom: "70%", // Atur posisi gambar dari bawah
                                right: "41%", // Atur posisi gambar dari kanan
                                width: "18%", // Ukuran gambar lebih kecil dari sebelumnya
                                height: "auto", // Menjaga proporsi gambar
                            }}
                        />
                    </div>
                </div>

                {/* Bagian Kanan: Teks dan Tombol */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Punya Produk UMKM?
                        <br />
                        Ayo Daftarkan Produkmu Sekarang!
                    </h1>
                    <a href="https://forms.gle/55oJHLTVGGSS1rQe6" target="_blank" rel="noopener noreferrer">
                        <button className="mt-6 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
                            Daftar
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
