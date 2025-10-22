"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../../firebase-config";

const DisplayProduct = () => {
  const [nope, setNope] = useState<string>("");

  useEffect(() => {
    const fetchNope = async () => {
      try {
        const db = getFirestore(app);
        const docRef = doc(db, "personalContact", "DisplayProduk");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNope(docSnap.data().nope);
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
      window.open(`https://api.whatsapp.com/send?phone=${nope}`, "_blank");
    }
  };

  return (
    <div className="p-6 pt-12 bg-white shadow-md flex flex-col md:flex-row justify-between items-center w-full overflow-x-hidden">
      {/* Bagian Kiri: Teks */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[48px] font-bold tracking-[5px] md:tracking-[10px] uppercase"
          style={{
            fontFamily: "Alexandria, sans-serif",
            color: "#514C00",
            textShadow: "2px 2px 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          DISPLAY PRODUK
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-2 text-black text-[20px] md:text-[32px] tracking-[1px] md:tracking-[2px]"
          style={{
            fontFamily: "Alata, sans-serif",
          }}
        >
          Memperkenalkan produk Anda dengan memajangnya di Rumah BUMN Makassar.
        </motion.p>

        {/* Tombol Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleContactClick}
            disabled={!nope}
            className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md uppercase text-xs md:text-sm font-semibold"
          >
            {nope ? "Contact Personal" : "Loading..."}
          </button>
        </motion.div>
      </div>

      {/* Bagian Kanan: Kosong */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0"></div>
    </div>
  );
};

export default DisplayProduct;
