"use client";

import { motion } from "framer-motion";

const ProgramPage = () => {
    return (
        <div id="program" className="flex pl-7 pt-12 items-center overflow-x-hidden">
            <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-[36px] md:text-[56px] font-bold tracking-[5px] md:tracking-[10px] uppercase"
                style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#001C57",
                    textShadow: "2px 2px 3px rgba(0, 0, 0, 0.2)",
                }}
            >
                PROGRAM RUMAH BUMN
            </motion.h1>
        </div>
    );
};

export default ProgramPage;
