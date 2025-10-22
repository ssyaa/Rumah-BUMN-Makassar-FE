"use client";
import React, { useState, useEffect } from "react";
import { FaStore, FaGlobe, FaLaptop, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const InformasiPembinaan = () => {
    const [counter, setCounter] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    // Function to detect scroll and trigger counter animation
    const handleScroll = () => {
        const element = document.getElementById("scrollTrigger");
        if (element) {
        const rect = element.getBoundingClientRect();
        // Trigger the animation when the element is in the viewport
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setHasScrolled(true);
        }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Animate counter when scrolled into view
    useEffect(() => {
        if (hasScrolled) {
        let start = 0;
        const end = 188;
        const duration = 2000; // Animation duration in milliseconds
        const increment = end / (duration / 50); // Increment value per step (50ms)

        const animateCounter = setInterval(() => {
            if (start < end) {
            start += increment;
            setCounter(Math.floor(start));
            } else {
            clearInterval(animateCounter);
            }
        }, 50);
        }
    }, [hasScrolled]);

    return (
        <div className="w-full min-h-[200px] flex flex-col md:flex-row items-center justify-between bg-[#001F5B] text-white py-16 px-10 shadow-md">
        
        {/* Bagian Teks - Kiri pada PC, Tengah pada Mobile */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0"
        >
            <h2 className="text-lg md:text-xl font-bold tracking-wide">
            Informasi Pembinaan Rumah BUMN BRI Makassar
            </h2>
        </motion.div>

        {/* Bagian Ikon Statistik - Kanan pada PC, Tengah pada Mobile */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-end gap-6"
        >
            {/* UMKM */}
            <div className="flex flex-col items-center" id="scrollTrigger">
            <FaHome className="text-5xl md:text-6xl" />
            <motion.p
                className="text-sm md:text-base font-bold"
                animate={{ opacity: hasScrolled ? 1 : 1 }}
                transition={{ duration: 0.5 }}
            >
                {counter}
            </motion.p>
            <p className="text-xs md:text-sm font-bold">UMKM</p>
            </div>

            {/* Go Digital */}
            <div className="flex flex-col items-center">
            <FaLaptop className="text-5xl md:text-6xl" />
            <motion.p
                className="text-sm md:text-base font-bold"
                animate={{ opacity: hasScrolled ? 1 : 1 }}
                transition={{ duration: 0.5 }}
            >
                {counter}
            </motion.p>
            <p className="text-xs md:text-sm font-bold">Go Digital</p>
            </div>

            {/* Go Modern */}
            <div className="flex flex-col items-center">
            <FaStore className="text-5xl md:text-6xl" />
            <motion.p
                className="text-sm md:text-base font-bold"
                animate={{ opacity: hasScrolled ? 1 : 1 }}
                transition={{ duration: 0.5 }}
            >
                {counter}
            </motion.p>
            <p className="text-xs md:text-sm font-bold">Go Modern</p>
            </div>

            {/* Go Online */}
            <div className="flex flex-col items-center">
            <FaGlobe className="text-5xl md:text-6xl" />
            <motion.p
                className="text-sm md:text-base font-bold"
                animate={{ opacity: hasScrolled ? 1 : 1 }}
                transition={{ duration: 0.5 }}
            >
                {counter}
            </motion.p>
            <p className="text-xs md:text-sm font-bold">Go Online</p>
            </div>
        </motion.div>
        </div>
    );
};

export default InformasiPembinaan;
