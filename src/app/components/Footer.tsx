import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-gray-800 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Bagian Kiri: Logo dan Informasi Kontak */}
                <div className="flex flex-col md:w-1/2 mb-6 md:mb-0 ml-0">
                    <div className="flex items-center mb-4 space-x-4">
                        {/* Logo BUMN */}
                        <Image
                            src="/logo_bumn.png"
                            alt="BUMN"
                            width={160}
                            height={0}
                            className="h-auto"
                        />
                        {/* Logo RB */}
                        <Image
                            src="/logo_rb.png"
                            alt="RB"
                            width={160}
                            height={0}
                            className="h-auto"
                        />
                    </div>
                    <div>
                        <p className="font-bold text-lg">Lokasi</p>
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
                <div className="flex flex-col md:w-1/2 items-start md:items-end mr-0">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="https://www.tiktok.com/@rumahbumn_makassar" className="text-black hover:underline ml-0">Tiktok</a>
                        <a href="https://www.instagram.com/produk.umkm.rb.makassar?igsh=MXd1emp2eHhzNHcwcA==" className="text-black hover:underline ml-0">Instagram</a>
                        <a href="https://www.youtube.com/@RumahBUMNMakassar" className="text-black hover:underline ml-0">Youtube</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
