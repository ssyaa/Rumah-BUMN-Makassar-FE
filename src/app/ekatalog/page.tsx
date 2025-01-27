"use client";

import React, { useState, useEffect } from "react";
import { firestore } from '@/../firebase-config'; // Mengimpor Firestore dari file firebase-config.js
import { collection, getDocs, query, where, Query } from 'firebase/firestore'; // Impor fungsi query dan where

const Ecatalog: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedQuery, setSelectedQuery] = useState("Semua Jenis UMKM"); // Pastikan ini string, bukan array
    const [products, setProducts] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let productsQuery: Query<any> = collection(firestore, "products");

                // Jika ada filter jenis UMKM yang dipilih
                if (selectedQuery !== "Semua Jenis UMKM") {
                    productsQuery = query(
                        productsQuery,
                        where("jenisUMKM", "==", selectedQuery)
                    );
                }

                const querySnapshot = await getDocs(productsQuery);
                const productsData = querySnapshot.docs.map((doc) => doc.data());
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts();
    }, [selectedQuery]); // Panggil ulang saat selectedQuery berubah

    const handleSearch = () => {
        console.log("Mencari dengan", { searchQuery, selectedQuery });
    };

    // Logika pagination untuk menampilkan hanya 16 produk
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Fungsi untuk menangani klik pagination
    const handlePagination = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Menghitung jumlah halaman yang diperlukan
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div
            className="ecatalog-container"
            style={{ backgroundColor: "#ffffff", minHeight: "100vh" }} // Tambahkan latar belakang putih dan minimum tinggi agar penuh layar
        >
            <h1 className="ecatalog-title">E-Katalog Produk UMKM</h1>
            <div className="ecatalog-search-container">
                <input
                    type="text"
                    placeholder="Masukkan kata kunci pencarian"
                    className="ecatalog-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                    className="ecatalog-filter"
                    value={selectedQuery}
                    onChange={(e) => setSelectedQuery(e.target.value)}
                >
                    <option>Semua Jenis UMKM</option>
                    <option>F&B</option>
                    <option>Fashion</option>
                    <option>Craft</option>
                    <option>Beauty</option>
                </select>
                <button className="ecatalog-search-button" onClick={handleSearch}>
                    Cari
                </button>
            </div>
            {products.length === 0 ? (
                <p>Sedang memuat produk...</p>
            ) : (
                <div className="ecatalog-product-container grid grid-cols-4 gap-4">
                    {currentProducts.map((product, index) => (
                        <div
                            key={index}
                            className="ecatalog-product-card bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-full h-auto max-h-[350px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105" // Efek hover untuk membesarkan seluruh card
                        >
                            <img
                                src={product.fotoProduk || "/placeholder.png"}
                                alt={product.namaBrand || "Produk"}
                                className="rounded-md w-40 h-40 object-cover mb-4"
                            />
                            <div className="px-4 py-2 text-center">
                                <p className="text-gray-800 font-semibold">
                                    {product.namaBrand}
                                </p>
                                <p className="text-gray-600 italic">
                                    {product.namaOwner}
                                </p>
                                <p className="text-gray-600 poppins">
                                    {product.descProduct}
                                </p>
                                <p className="text-gray-800 font-bold mt-2">
                                    Rp {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {products.length > 16 && (
                <div className="pagination mt-4 flex justify-center space-x-4">
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => handlePagination(number)}
                            className={`${
                                currentPage === number
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                            } px-4 py-2 rounded`}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Ecatalog;
