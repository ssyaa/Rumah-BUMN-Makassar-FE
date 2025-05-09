"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { firestore } from "@/../firebase-config";
import { collection, getDocs, query, where, Query } from "firebase/firestore";
import Image from "next/image";
import "./catalog.css";

interface Product {
    id: string;
    namaBrand: string;
    namaOwner: string;
    descProduct: string;
    harga: number;
    fotoProduk?: string;
    jenisUMKM?: string;
}

const Ecatalog: React.FC = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedQuery, setSelectedQuery] = useState<string>("Semua Jenis UMKM");
    const [products, setProducts] = useState<Product[]>([]);
    const [suggestions, setSuggestions] = useState<Product[]>([]);
    const [currentPage] = useState<number>(1);
    const productsPerPage = 16;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let productsQuery: Query = collection(firestore, "products");

                if (selectedQuery !== "Semua Jenis UMKM") {
                    productsQuery = query(productsQuery, where("jenisUMKM", "==", selectedQuery));
                }

                const querySnapshot = await getDocs(productsQuery);
                const productsData: Product[] = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<Product, "id">),
                }));
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts();
    }, [selectedQuery]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 0) {
            const filteredSuggestions = products.filter((product) =>
                product.namaBrand.toLowerCase().includes(query.toLowerCase())
            );
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

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
                    <option>F&amp;B</option>
                    <option>Fashion</option>
                    <option>Craft</option>
                    <option>Beauty</option>
                </select>
                <button className="ecatalog-search-button">Cari</button>

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

            {products.length === 0 ? (
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
                            <div className="relative w-full h-40">
                                <Image
                                    src={Array.isArray(product.fotoProduk) && product.fotoProduk[0]? product.fotoProduk[0]: "/placeholder.png"} //error ini (gambar tidak tampil)
                                    alt={product.namaBrand || "Produk"}
                                    fill
                                    className="object-cover rounded-t-lg"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="product-details">
                                <p className="product-brand">{product.namaBrand}</p>
                                <p className="product-owner">{product.namaOwner}</p>
                                <p className="product-desc">{product.descProduct}</p>
                                <p className="product-price">Rp {product.harga.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Ecatalog;
