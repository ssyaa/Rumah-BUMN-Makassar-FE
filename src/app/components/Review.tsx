import React from "react";

const ReviewProduct = () => {
    return (
        <div className="p-6 pt-32 md:pt-56 bg-white shadow-md flex justify-between items-center w-full overflow-x-hidden">
            {/* Bagian Kiri: Teks */}
            <div className="w-1/2 text-left">
                <h2
                    className="text-[28px] md:text-[48px] font-bold tracking-[5px] md:tracking-[10px] uppercase"
                    style={{
                        fontFamily: "Alexandria, sans-serif",
                        color: "#514C00",
                        textShadow: "2px 2px 3px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    REVIEW PRODUK
                </h2>
                <p
                    className="mt-2 text-black text-[18px] md:text-[32px] tracking-[1px] md:tracking-[2px]"
                    style={{
                        fontFamily: "Alata, sans-serif",
                    }}
                >
                    Memperkenalkan produk Anda dengan memajangnya di Rumah BUMN Makassar.
                </p>
            </div>

            {/* Bagian Kanan: Kosong (bisa diisi gambar nanti) */}
            <div className="w-1/2"></div>
        </div>
    );
};

export default ReviewProduct;
