import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-gray-800 py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                {/* Bagian Kiri: Logo dan Informasi Kontak */}
                <div className="flex flex-col md:w-1/2 mb-6 md:mb-0 ml-12"> {/* Menambahkan margin kiri */}
                    <div className="flex items-center mb-4 space-x-4">
                        {/* Logo BUMN */}
                        <img
                            src="/logo_bumn.png" // Ganti dengan logo BUMN yang sesuai
                            alt="BUMN"
                            className="w-40"
                        />
                        {/* Logo RB */}
                        <img
                            src="/logo_rb.png" // Ganti dengan logo RB yang sesuai
                            alt="RB"
                            className="w-40"
                        />
                    </div>
                    <div>
                        <p className="font-bold text-lg">Lokasi</p>
                        {/* Alamat dengan link ke Google Maps */}
                        <p>
                            <a 
                                href="https://maps.app.goo.gl/Hju9uAv8VGuGdvon7" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-black hover:underline"
                            >
                                Jl. DR. Ratulangi, Mangkura, Kec. Mariso, Kota Makassar, Sulawesi Selatan 90125
                            </a>
                        </p>
                        <p className="mt-2 font-bold text-lg">General Inquiries</p>
                        <p>
                            <a href="tel:+6281234567890" className="text-black hover:underline">Contact Person</a>
                        </p>
                        <p>
                            <a href="mailto:rb.makassar0050@gmail.com" className="text-black hover:underline">rb.makassar0050@gmail.com</a>
                        </p>
                    </div>
                </div>

                {/* Bagian Kanan: Navigasi */}
                <div className="flex flex-col md:w-1/2 items-start md:items-end mr-12">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="https://www.tiktok.com" className="text-black hover:underline ml-12">Tiktok</a>
                        <a href="https://www.instagram.com" className="text-black hover:underline ml-12">Instagram</a>
                        <a href="https://www.youtube.com" className="text-black hover:underline ml-12">Youtube</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
