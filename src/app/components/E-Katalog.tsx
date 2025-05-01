"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../../firebase-config"; // Pastikan kamu sudah setup firebase app ya

const EKatalog = () => {
    const [nope, setNope] = useState<string | null>(null);

    useEffect(() => {
    const fetchNope = async () => {
        try {
            const db = getFirestore(app);
            const docRef = doc(db, "personalContact", "ekatalog");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const fetchedNope = docSnap.data().nope;
                console.log("Fetched Nope:", fetchedNope);
                setNope(fetchedNope);
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error fetching document:", error);
        }
    };

    fetchNope();
    }, []);

    const handleContactClick = () => {
        if (nope) {
            // Membuka WhatsApp dengan nomor yang sudah didapat
            window.open(`https://wa.me/${nope}`, "_blank");
        } else {
            alert("Nomor WhatsApp belum tersedia!");
        }
    };

    return (
        <div className="p-6 pt-32 md:pt-56 bg-white shadow-md flex flex-col md:flex-row justify-between items-center w-full overflow-x-hidden">
            {/* Bagian Kiri: Gambar dengan animasi */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 flex justify-center"
            >
                <Image
                    src="/ekatalog.png"
                    alt="E-Katalog Produk"
                    width={500}
                    height={500}
                    className="object-contain"
                />
            </motion.div>

            {/* Bagian Kanan: Teks */}
            <div className="w-full md:w-1/2 text-center md:text-right mt-10 md:mt-0">
                <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[28px] md:text-[48px] tracking-[5px] md:tracking-[10px] uppercase font-bold"
                    style={{
                        fontFamily: "Alexandria, sans-serif",
                        color: "#514C00",
                        textShadow: "2px 2px 3px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    E-KATALOG PRODUK
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-2 text-black text-[18px] md:text-[32px] tracking-[1px] md:tracking-[2px]"
                    style={{
                        fontFamily: "Alata, sans-serif",
                    }}
                >
                    E-Katalog adalah platform digital yang memudahkan Anda menemukan dan mendukung
                    produk unggulan UMKM Rumah BUMN secara praktis dan efisien.
                </motion.p>

                {/* Tombol */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex gap-4 justify-center md:justify-end mt-4"
                >
                    {/* Tombol Contact */}
                    <button
                        onClick={handleContactClick}
                        disabled={!nope}
                        className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md uppercase text-xs md:text-sm font-semibold"
                    >
                        {nope ? "Contact Personal" : "Loading..."}
                    </button>

                    {/* Tombol E-Katalog */}
                    <Link href="https://www.canva.com/design/DAF-Ct6WCDU/H-6RvB6HJ55V0EN2-IUGyQ/edit?utm_content=DAF-Ct6WCDU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                        <button className="px-4 py-2 bg-[#001f5b] hover:bg-[#00307a] text-white rounded-lg shadow-md uppercase text-xs md:text-sm font-semibold">
                            E-KATALOG
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default EKatalog;
