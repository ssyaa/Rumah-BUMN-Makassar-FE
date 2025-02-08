import React from "react";

const DisplayProduct = () => {
  return (
    <div className="p-6 pt-12 bg-white shadow-md flex justify-between items-center">
      {/* Bagian Kiri: Teks */}
      <div className="w-1/2">
        <h2
          className="text-[48px] font-bold tracking-[10px] uppercase"
          style={{
            fontFamily: "Alexandria, sans-serif",
            color: "#514C00",
            textShadow: "2px 2px 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          DISPLAY PRODUK
        </h2>

        <p
          className="mt-2 text-black"
          style={{
            fontFamily: "Alata, sans-serif",
            fontSize: "32px",
            letterSpacing: "2px",
          }}
        >
          Memperkenalkan produk Anda dengan memajangnya di Rumah BUMN Makassar.
        </p>
      </div>

      {/* Bagian Kanan: Kosong */}
      <div className="w-1/2"></div>
    </div>
  );
};

export default DisplayProduct;
