'use client';
import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimoni: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Menyimpan referensi ke setiap card

    const Testimoni = [
        {
            imageSrc: '/mnt/data/image.png', // Ganti dengan path gambar
            quote: 'Alhamdulillah saya sangat terbantu setelah saya menjadi bagian dari RB!',
            name: 'Nama Testimoni 1',
        },
        {
            imageSrc: '/mnt/data/image.png', // Ganti dengan path gambar
            quote: 'Alhamdulillah saya sangat terbantu setelah saya menjadi bagian dari RB!',
            name: 'Nama Testimoni 2',
        },
        {
            imageSrc: '/mnt/data/image.png', // Ganti dengan path gambar
            quote: 'Alhamdulillah saya sangat terbantu setelah saya menjadi bagian dari RB!',
            name: 'Nama Testimoni 3',
        },
        {
            imageSrc: '/mnt/data/image.png', // Ganti dengan path gambar
            quote: 'Alhamdulillah saya sangat terbantu setelah saya menjadi bagian dari RB!',
            name: 'Nama Testimoni 4',
        },
        {
            imageSrc: '/mnt/data/image.png', // Ganti dengan path gambar
            quote: 'Alhamdulillah saya sangat terbantu setelah saya menjadi bagian dari RB!',
            name: 'Nama Testimoni 5',
        },
    ];

    // Menambahkan efek otomatis berganti card
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % Testimoni.length);
        }, 5000); // Ganti setiap 5 detik

        return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
    }, []);

    // Efek untuk menggulir ke card yang aktif
    useEffect(() => {
        if (cardRefs.current[activeIndex]) {
            cardRefs.current[activeIndex]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center', // Menjadikan elemen berada di tengah secara horizontal
            });
        }
    }, [activeIndex]);

    const handleCardChange = (index: number) => {
        setActiveIndex(index);
    };

    return (
            <section className="Testimoni-section bg-blue h-screen w-full flex items-center justify-center py-0">
            <div className="container mx-auto px-[5vw] flex items-center justify-between w-full">
            {/* Bagian Kiri: Teks */}
            <div className="w-full lg:w-1/2 text-left pr-[5vw]">
                <h2 className="text-[4vw] font-bold mb-[5vh]">Kenapa memilih Rumah BUMN?</h2>
            </div>

            {/* Bagian Kanan: Card */}
            <div className="w-full lg:w-1/2 overflow-x-auto whitespace-nowrap flex">
                {Testimoni.map((testimonial, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            cardRefs.current[index] = el;
                        }}
                        className={`inline-block mr-[2vw] transition-all duration-500 transform ${
                            activeIndex === index ? 'scale-110 shadow-2xl shadow-blue-500 z-10' : 'scale-100'
                        }`}
                        onClick={() => handleCardChange(index)}
                    >
                        <TestimonialCard
                            imageSrc={testimonial.imageSrc}
                            quote={testimonial.quote}
                            name={testimonial.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Testimoni;
