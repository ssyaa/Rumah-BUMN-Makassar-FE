"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { firestore } from "@/../firebase-config";
import { collection, getDocs, query, where, Query } from "firebase/firestore";
import "./catalog.css";

const Ecatalog: React.FC = () => {
    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedQuery, setSelectedQuery] = useState("Semua Jenis UMKM");
    const [products, setProducts] = useState<any[]>([]);
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const productsPerPage = 16;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                let productsQuery: Query<any> = collection(firestore, "products");

                if (selectedQuery !== "Semua Jenis UMKM") {
                    productsQuery = query(productsQuery, where("jenisUMKM", "==", selectedQuery));
                }

                const querySnapshot = await getDocs(productsQuery);
                const productsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(productsData);
                setSuggestions([]);
                setCurrentPage(1);
            } catch (error) {
                console.error("Error fetching products: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedQuery]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim()) {
            const filteredSuggestions = products.filter((product) => {
                const matchBrand = product.namaBrand?.toLowerCase().includes(query.toLowerCase());
                const matchCategory =
                    selectedQuery === "Semua Jenis UMKM" || product.jenisUMKM === selectedQuery;
                return matchBrand && matchCategory;
            });
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (productName: string) => {
        setSearchQuery(productName);
        setSuggestions([]);
    };

    const handleProductClick = (productId: string) => {
        router.push(`/review/${productId}`);
    };

    const handleSearchClick = () => {
        const filtered = products.filter((product) =>
            product.namaBrand?.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSuggestions(filtered);
    };

    const handlePagination = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const pageNumbers = Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => i + 1);

    return (
        <div className="ecatalog-container mt-20">
            <h1 className="ecatalog-title">E-Katalog Produk UMKM</h1>

            <div className="ecatalog-search-container relative">
                <input
                    type="text"
                    placeholder="Masukkan kata kunci pencarian"
                    className="ecatalog-search-input"
                    value={searchQuery}
                    onChange={handleSearchChange}
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
                <button className="ecatalog-search-button" onClick={handleSearchClick}>
                    Cari
                </button>

                {suggestions.length > 0 && (
                    <ul className="suggestions-box">
                        {suggestions.map((suggestion) => (
                            <li
                                key={suggestion.id}
                                onClick={() => handleSuggestionClick(suggestion.namaBrand)}
                                className="suggestion-item"
                            >
                                {suggestion.namaBrand}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {loading ? (
                <p className="text-center">Sedang memuat produk...</p>
            ) : (
                <div className="ecatalog-product-container">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="ecatalog-product-card"
                            onClick={() => handleProductClick(product.id)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={product.fotoProduk || "/placeholder.png"}
                                alt={product.namaBrand || "Produk"}
                                className="product-img"
                            />
                            <div className="product-details">
                                <p className="product-brand">{product.namaBrand || "Brand Tidak Diketahui"}</p>
                                <p className="product-owner">{product.namaOwner || "Owner Tidak Diketahui"}</p>
                                <p className="product-desc">{product.descProduct || "Deskripsi tidak tersedia"}</p>
                                <p className="product-price">Rp {product.harga || "-"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {pageNumbers.length > 1 && (
                <div className="pagination">
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            className={`pagination-button ${number === currentPage ? "active" : ""}`}
                            onClick={() => handlePagination(number)}
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
