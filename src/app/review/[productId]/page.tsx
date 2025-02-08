"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { firestore } from "@/../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import "./review.css"; // Import file CSS

const ReviewPage = () => {
    const { productId } = useParams(); // Ambil productId dari URL
    const router = useRouter(); // Gunakan useRouter untuk navigasi
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            if (productId) {
                try {
                    const productRef = doc(firestore, "products", productId as string);
                    const productSnap = await getDoc(productRef);

                    if (productSnap.exists()) {
                        setProduct(productSnap.data());
                    } else {
                        console.log("Produk tidak ditemukan");
                    }
                } catch (error) {
                    console.error("Error fetching product details: ", error);
                }
            }
        };

        fetchProductDetails();
    }, [productId]);

    if (!product) {
        return <p style={{ fontFamily: "Poppins, sans-serif", textAlign: "center" }}>Memuat detail produk...</p>;
    }

    return (
        <div className="review-container">
            {/* Tombol Kembali */}
            <button onClick={() => router.back()} className="back-button">⬅ Kembali</button>

            {/* Kontainer utama */}
            <div className="product-wrapper">
                {/* Bagian Kiri: Gambar Produk & Logo UMKM */}
                <div className="image-container">
                    <img 
                        src={product.fotoProduk || "/placeholder.png"} 
                        alt={product.namaBrand} 
                        className="product-image" 
                    />
                    <img 
                        src={product.logoUMKM || "/placeholder-logo.png"} 
                        alt="Logo UMKM" 
                        className="umkm-logo" 
                    />
                </div>
                    {/* Bagian Kanan: Detail Produk */}
                    <div className="product-details">
                    {/* Container untuk Logo UMKM + Nama Brand */}
                    <div className="product-title-container">
                        <img 
                            src={product.logoUMKM || "/placeholder-logo.png"} 
                            alt="Logo UMKM" 
                            className="umkm-logo" 
                        />
                        <h1 className="product-title">{product.namaBrand}</h1>
                    </div>

                    <p className="product-description"><strong>Deskripsi Produk:</strong> {product.descProduct}</p>
                    <p className="product-type"><strong>Jenis UMKM:</strong> {product.jenisUmkm}</p>
                    <p className="product-owner"><strong>Pemilik:</strong> {product.namaOwner}</p>
                    <p className="product-price"><strong>Harga:</strong> Rp {product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;
