"use client";

import React, { useEffect, useState } from "react";
import "./review.css";
import { useParams } from "next/navigation";
import { db } from "@/../firebase-config";
import { doc, onSnapshot } from "firebase/firestore";
import Image from "next/image";

interface Product {
  fotoProduk: string;
  beratProduk: string;
  jenisUMKM: string;
  variantProduk: string;
  howProduction: string;
  makeBrand: string;
  selling: string;
  namaBrand: string;
  namaOwner: string;
  nope: string;
  alamatUsaha: string;
  igUsaha: string;
  deskShortProduk: string;
  harga: string;
}

const ReviewPage = () => {
  const { productId } = useParams();
  const id = Array.isArray(productId) ? productId[0] : productId;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    const docRef = doc(db, "products", id);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setProduct(docSnap.data() as Product);
      } else {
        console.error("Produk tidak ditemukan");
      }
    });

    return () => unsubscribe();
  }, [id]);

  return (
    <div className="review-page">
      <div className="container-review">
        <div className="box-1">
          {product ? (
            <div className="content">
              {/* Gambar Produk */}
              <div className="left">
                <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                  <Image
                    src={product.fotoProduk}
                    alt={product.namaBrand}
                    fill
                    className="object-cover rounded-md product-image"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
              </div>

              {/* Informasi Produk */}
              <div className="right">
                <h1 className="title">{product.namaBrand}</h1>
                <p className="owner">{product.namaOwner}</p>

                <div className="info-grid-b1">
                  <div className="info-label-b1"><b>Harga</b></div>
                  <div className="info-value-b1">{product.harga}</div>

                  <div className="info-label-b1"><b>Jenis UMKM</b></div>
                  <div className="info-value-b1">{product.jenisUMKM}</div>

                  <div className="info-label-b1"><b>Berat Produk</b></div>
                  <div className="info-value-b1">{product.beratProduk}</div>

                  <div className="info-label-b1"><b>Variant Produk</b></div>
                  <div className="info-value-b1">{product.variantProduk}</div>
                </div>
              </div>
            </div>
          ) : (
            <p className="loading">Memuat data...</p>
          )}
        </div>
      </div>

      <div className="container">
        <div className="box-2">
          {product ? (
            <div className="info-grid-b2">
              <div className="info-label-b2"><b>Nomor Telepon</b></div>
              <div className="info-value-b2">{product.nope}</div>

              <div className="info-label-b2"><b>Instagram</b></div>
              <div className="info-value-b2">{product.igUsaha}</div>

              <div className="info-label-b2"><b>Alamat Usaha</b></div>
              <div className="info-value-b2">{product.alamatUsaha}</div>

              <div className="info-label-b2"><b>Cerita Branding</b></div>
              <div className="info-value-b2">{product.makeBrand}</div>

              <div className="info-label-b2"><b>Cara Produksi</b></div>
              <div className="info-value-b2">{product.howProduction}</div>

              <div className="info-label-b2"><b>Cara Penjualan</b></div>
              <div className="info-value-b2">{product.selling}</div>
            </div>
          ) : (
            <p className="loading">Memuat data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
