import React from "react";
import Link from "next/link";

const EKatalog = () => {
    return (
        <div className="p-6 pt-32 md:pt-56 bg-white shadow-md flex justify-between items-center w-full overflow-x-hidden">
            {/* Bagian Kiri: Kosong (Bisa diisi gambar nanti) */}
            <div className="w-1/2"></div>

            {/* Bagian Kanan: Teks */}
            <div className="w-1/2 text-right">
                <h2
                    className="text-[28px] md:text-[48px] tracking-[5px] md:tracking-[10px] uppercase font-bold"
                    style={{
                        fontFamily: "Alexandria, sans-serif",
                        color: "#514C00",
                        textShadow: "2px 2px 3px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    E-KATALOG PRODUK
                </h2>
                <p
                    className="mt-2 text-black text-[18px] md:text-[32px] tracking-[1px] md:tracking-[2px]"
                    style={{
                        fontFamily: "Alata, sans-serif",
                    }}
                >
                    E-Katalog adalah platform digital yang memudahkan Anda menemukan dan mendukung
                    produk unggulan UMKM Rumah BUMN secara praktis dan efisien.
                </p>
                {/* Button dengan Link ke ekatalog/page.tsx */}
                <Link href="/ekatalog">
                    <button className="mt-4 px-4 py-2 bg-[#001f5b] text-white rounded-lg shadow-md uppercase text-xs md:text-sm font-semibold">
                        E-KATALOG
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EKatalog;
